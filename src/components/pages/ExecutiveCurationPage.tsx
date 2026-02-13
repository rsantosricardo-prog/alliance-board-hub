import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function ExecutiveCurationPage() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [formData, setFormData] = useState({
    fullName: '',
    currentPosition: '',
    company: '',
    linkedInProfile: '',
    corporateEmail: '',
    whatsApp: '',
    leadershipYears: '',
    hasBeenCouncilor: false,
    strategicAreas: '',
    interestReason: '',
    valueProposition: '',
    referredBy: '',
    agreedToTerms: false,
    agreedToCuration: false,
  });

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) newErrors.fullName = 'Nome completo é obrigatório';
    if (!formData.currentPosition.trim()) newErrors.currentPosition = 'Cargo atual é obrigatório';
    if (!formData.company.trim()) newErrors.company = 'Empresa é obrigatória';
    if (!formData.linkedInProfile.trim()) newErrors.linkedInProfile = 'LinkedIn é obrigatório';
    if (!formData.corporateEmail.trim()) newErrors.corporateEmail = 'E-mail corporativo é obrigatório';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.corporateEmail)) {
      newErrors.corporateEmail = 'E-mail inválido';
    }
    if (!formData.whatsApp.trim()) newErrors.whatsApp = 'WhatsApp é obrigatório';
    if (!formData.leadershipYears) newErrors.leadershipYears = 'Tempo de atuação é obrigatório';
    if (!formData.strategicAreas.trim()) newErrors.strategicAreas = 'Áreas estratégicas são obrigatórias';
    if (!formData.interestReason.trim()) newErrors.interestReason = 'Motivo do interesse é obrigatório';
    if (!formData.valueProposition.trim()) newErrors.valueProposition = 'Valor a agregar é obrigatório';
    if (!formData.agreedToTerms) newErrors.agreedToTerms = 'Você deve concordar com os termos';
    if (!formData.agreedToCuration) newErrors.agreedToCuration = 'Você deve concordar com a curadoria';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await BaseCrudService.create('executivecurations', {
        _id: crypto.randomUUID(),
        fullName: formData.fullName,
        currentPosition: formData.currentPosition,
        company: formData.company,
        linkedInProfile: formData.linkedInProfile,
        corporateEmail: formData.corporateEmail,
        whatsApp: formData.whatsApp,
        leadershipYears: formData.leadershipYears,
        hasBeenCouncilor: formData.hasBeenCouncilor,
        strategicAreas: formData.strategicAreas,
        interestReason: formData.interestReason,
        valueProposition: formData.valueProposition,
        referredBy: formData.referredBy || null,
        agreedToTerms: formData.agreedToTerms,
        agreedToCuration: formData.agreedToCuration,
        submissionDate: new Date(),
        status: 'Pending',
      });

      setIsSuccess(true);
      setFormData({
        fullName: '',
        currentPosition: '',
        company: '',
        linkedInProfile: '',
        corporateEmail: '',
        whatsApp: '',
        leadershipYears: '',
        hasBeenCouncilor: false,
        strategicAreas: '',
        interestReason: '',
        valueProposition: '',
        referredBy: '',
        agreedToTerms: false,
        agreedToCuration: false,
      });

      setTimeout(() => {
        navigate('/events');
      }, 3000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setErrors({ submit: 'Erro ao enviar o formulário. Tente novamente.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  if (isSuccess) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center py-20">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="font-heading text-4xl text-foreground mb-4">Solicitação Recebida</h1>
              <p className="font-paragraph text-lg text-muted mb-6">
                Recebemos sua solicitação. Seu perfil será analisado pela curadoria. Caso aprovado(a),
                você receberá acesso exclusivo para aquisição da sua cadeira.
              </p>
              <p className="font-paragraph text-sm text-muted">
                Você será redirecionado em breve...
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-16 px-4 pt-[calc(1cm+4rem)]">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          {/* Form */}
          <div className="mb-12 text-center">
            <h1 className="font-heading text-5xl text-foreground mb-4">Solicitar Curadoria</h1>
            <p className="font-paragraph text-lg text-muted max-w-2xl mx-auto">
            Acesso exclusivo para conselheiros, C-Levels, investidores e líderes estratégicos.
            Sua participação está sujeita à curadoria.
          </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            {/* Section 1: Identificação */}
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-6">1. Identificação</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="fullName" className="font-paragraph text-sm text-foreground mb-2 block">
                    Nome Completo *
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`bg-input border-border text-foreground font-paragraph ${
                      errors.fullName ? 'border-red-500' : ''
                    }`}
                    placeholder="Seu nome completo"
                  />
                  {errors.fullName && (
                    <p className="text-red-500 font-paragraph text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="currentPosition" className="font-paragraph text-sm text-foreground mb-2 block">
                    Cargo Atual *
                  </Label>
                  <Input
                    id="currentPosition"
                    name="currentPosition"
                    type="text"
                    value={formData.currentPosition}
                    onChange={handleInputChange}
                    className={`bg-input border-border text-foreground font-paragraph ${
                      errors.currentPosition ? 'border-red-500' : ''
                    }`}
                    placeholder="Ex: CEO, Diretor, Presidente"
                  />
                  {errors.currentPosition && (
                    <p className="text-red-500 font-paragraph text-xs mt-1">{errors.currentPosition}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="company" className="font-paragraph text-sm text-foreground mb-2 block">
                    Empresa *
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`bg-input border-border text-foreground font-paragraph ${
                      errors.company ? 'border-red-500' : ''
                    }`}
                    placeholder="Nome da empresa"
                  />
                  {errors.company && (
                    <p className="text-red-500 font-paragraph text-xs mt-1">{errors.company}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="linkedInProfile" className="font-paragraph text-sm text-foreground mb-2 block">
                    LinkedIn *
                  </Label>
                  <Input
                    id="linkedInProfile"
                    name="linkedInProfile"
                    type="url"
                    value={formData.linkedInProfile}
                    onChange={handleInputChange}
                    className={`bg-input border-border text-foreground font-paragraph ${
                      errors.linkedInProfile ? 'border-red-500' : ''
                    }`}
                    placeholder="https://linkedin.com/in/seu-perfil"
                  />
                  {errors.linkedInProfile && (
                    <p className="text-red-500 font-paragraph text-xs mt-1">{errors.linkedInProfile}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="corporateEmail" className="font-paragraph text-sm text-foreground mb-2 block">
                    E-mail Corporativo *
                  </Label>
                  <Input
                    id="corporateEmail"
                    name="corporateEmail"
                    type="email"
                    value={formData.corporateEmail}
                    onChange={handleInputChange}
                    className={`bg-input border-border text-foreground font-paragraph ${
                      errors.corporateEmail ? 'border-red-500' : ''
                    }`}
                    placeholder="seu.email@empresa.com"
                  />
                  {errors.corporateEmail && (
                    <p className="text-red-500 font-paragraph text-xs mt-1">{errors.corporateEmail}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="whatsApp" className="font-paragraph text-sm text-foreground mb-2 block">
                    WhatsApp *
                  </Label>
                  <Input
                    id="whatsApp"
                    name="whatsApp"
                    type="tel"
                    value={formData.whatsApp}
                    onChange={handleInputChange}
                    className={`bg-input border-border text-foreground font-paragraph ${
                      errors.whatsApp ? 'border-red-500' : ''
                    }`}
                    placeholder="+55 (11) 99999-9999"
                  />
                  {errors.whatsApp && (
                    <p className="text-red-500 font-paragraph text-xs mt-1">{errors.whatsApp}</p>
                  )}
                </div>
              </div>
            </section>

            {/* Section 2: Perfil Executivo */}
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-6">2. Perfil Executivo</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="leadershipYears" className="font-paragraph text-sm text-foreground mb-2 block">
                    Tempo de Atuação em Liderança *
                  </Label>
                  <select
                    id="leadershipYears"
                    name="leadershipYears"
                    value={formData.leadershipYears}
                    onChange={handleInputChange}
                    className={`w-full bg-input border border-border text-foreground font-paragraph px-3 py-2 rounded-md ${
                      errors.leadershipYears ? 'border-red-500' : ''
                    }`}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="5-10">5–10 anos</option>
                    <option value="10-20">10–20 anos</option>
                    <option value="+20">+20 anos</option>
                  </select>
                  {errors.leadershipYears && (
                    <p className="text-red-500 font-paragraph text-xs mt-1">{errors.leadershipYears}</p>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <Checkbox
                    id="hasBeenCouncilor"
                    name="hasBeenCouncilor"
                    checked={formData.hasBeenCouncilor}
                    onChange={handleInputChange}
                    className="border-border"
                  />
                  <Label htmlFor="hasBeenCouncilor" className="font-paragraph text-sm text-foreground cursor-pointer">
                    Já atua ou atuou como conselheiro(a)?
                  </Label>
                </div>

                <div>
                  <Label htmlFor="strategicAreas" className="font-paragraph text-sm text-foreground mb-2 block">
                    Principais Áreas de Decisão Estratégica *
                  </Label>
                  <Textarea
                    id="strategicAreas"
                    name="strategicAreas"
                    value={formData.strategicAreas}
                    onChange={handleInputChange}
                    className={`bg-input border-border text-foreground font-paragraph ${
                      errors.strategicAreas ? 'border-red-500' : ''
                    }`}
                    placeholder="Descreva suas principais áreas de expertise estratégica"
                    rows={3}
                  />
                  {errors.strategicAreas && (
                    <p className="text-red-500 font-paragraph text-xs mt-1">{errors.strategicAreas}</p>
                  )}
                </div>
              </div>
            </section>

            {/* Section 3: Alinhamento Estratégico */}
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-6">3. Alinhamento Estratégico</h2>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="interestReason" className="font-paragraph text-sm text-foreground mb-2 block">
                    Qual o Principal Motivo do Seu Interesse Neste Encontro? *
                  </Label>
                  <Textarea
                    id="interestReason"
                    name="interestReason"
                    value={formData.interestReason}
                    onChange={handleInputChange}
                    className={`bg-input border-border text-foreground font-paragraph ${
                      errors.interestReason ? 'border-red-500' : ''
                    }`}
                    placeholder="Descreva brevemente seu interesse"
                    rows={3}
                  />
                  {errors.interestReason && (
                    <p className="text-red-500 font-paragraph text-xs mt-1">{errors.interestReason}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="valueProposition" className="font-paragraph text-sm text-foreground mb-2 block">
                    O Que Você Pode Agregar ao Grupo de Alto Nível Presente no Evento? *
                  </Label>
                  <Textarea
                    id="valueProposition"
                    name="valueProposition"
                    value={formData.valueProposition}
                    onChange={handleInputChange}
                    className={`bg-input border-border text-foreground font-paragraph ${
                      errors.valueProposition ? 'border-red-500' : ''
                    }`}
                    placeholder="Descreva sua proposta de valor"
                    rows={3}
                  />
                  {errors.valueProposition && (
                    <p className="text-red-500 font-paragraph text-xs mt-1">{errors.valueProposition}</p>
                  )}
                </div>
              </div>
            </section>

            {/* Section 4: Indicação */}
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-6">4. Indicação</h2>
              <div>
                <Label htmlFor="referredBy" className="font-paragraph text-sm text-foreground mb-2 block">
                  Foi Indicado(a) por Algum Membro? Se Sim, Por Quem?
                </Label>
                <Input
                  id="referredBy"
                  name="referredBy"
                  type="text"
                  value={formData.referredBy}
                  onChange={handleInputChange}
                  className="bg-input border-border text-foreground font-paragraph"
                  placeholder="Nome do membro (opcional)"
                />
              </div>
            </section>

            {/* Section 5: Confirmação */}
            <section>
              <h2 className="font-heading text-2xl text-foreground mb-6">5. Confirmação</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreedToTerms"
                    name="agreedToTerms"
                    checked={formData.agreedToTerms}
                    onChange={handleInputChange}
                    className="border-border mt-1"
                  />
                  <Label htmlFor="agreedToTerms" className="font-paragraph text-sm text-foreground cursor-pointer">
                    Declaro que as informações fornecidas são verídicas. *
                  </Label>
                </div>
                {errors.agreedToTerms && (
                  <p className="text-red-500 font-paragraph text-xs">{errors.agreedToTerms}</p>
                )}

                <div className="flex items-start space-x-3">
                  <Checkbox
                    id="agreedToCuration"
                    name="agreedToCuration"
                    checked={formData.agreedToCuration}
                    onChange={handleInputChange}
                    className="border-border mt-1"
                  />
                  <Label htmlFor="agreedToCuration" className="font-paragraph text-sm text-foreground cursor-pointer">
                    Estou ciente de que a participação é sujeita à curadoria e que, se aprovado(a),
                    receberei acesso exclusivo para aquisição da cadeira. *
                  </Label>
                </div>
                {errors.agreedToCuration && (
                  <p className="text-red-500 font-paragraph text-xs">{errors.agreedToCuration}</p>
                )}
              </div>
            </section>

            {/* Error Message */}
            {errors.submit && (
              <div className="bg-red-50 border border-red-200 rounded-md p-4">
                <p className="font-paragraph text-sm text-red-700">{errors.submit}</p>
              </div>
            )}

            {/* Submit Button */}
            <div className="flex gap-4 pt-8">
              <Button
                type="button"
                onClick={() => navigate('/events')}
                variant="outline"
                className="flex-1 font-paragraph"
              >
                Cancelar
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 font-paragraph bg-foreground text-background hover:bg-secondary"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <LoadingSpinner />
                    Enviando...
                  </div>
                ) : (
                  'Enviar Solicitação'
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
