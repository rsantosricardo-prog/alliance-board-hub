import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    position: '',
    company: '',
    segment: '',
    yearsExperience: '',
    linkedIn: '',
    cityState: '',
    expertise: '',
    whyJoin: '',
    whatContribute: '',
    howKnew: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateLinkedIn = (url: string) => {
    return url.includes('linkedin.com');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate LinkedIn
    if (!validateLinkedIn(formData.linkedIn)) {
      toast({
        title: 'LinkedIn Inválido',
        description: 'Por favor, insira um URL válido do LinkedIn.',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Here you would typically send the data to your backend/CRM
    console.log('Form submitted:', formData);

    setSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        position: '',
        company: '',
        segment: '',
        yearsExperience: '',
        linkedIn: '',
        cityState: '',
        expertise: '',
        whyJoin: '',
        whatContribute: '',
        howKnew: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background pt-28">
        <Header />
        <section className="w-full py-32 lg:py-40">
          <div className="max-w-2xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-primary-foreground" />
                </div>
              </div>
              <h1 className="font-heading text-4xl lg:text-5xl text-secondary mb-6">
                Candidatura Recebida
              </h1>
              <p className="font-paragraph text-lg text-secondary/80 mb-8">
                Sua candidatura foi recebida com sucesso. Nossa equipe fará a análise e, caso o perfil esteja alinhado à proposta do grupo, entraremos em contato.
              </p>
              <p className="font-paragraph text-base text-secondary/60">
                Obrigado por seu interesse em fazer parte de nossa comunidade exclusiva de líderes.
              </p>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full bg-primary py-20 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl lg:text-7xl text-primary-foreground mb-6">
              Grupo Exclusivo de Líderes
            </h1>
            <p className="font-paragraph text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Candidatura para participação em comunidade estratégica de networking, governança e inovação executiva
            </p>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="w-full py-20 lg:py-32">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Disclaimer */}
            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 mb-12">
              <p className="font-paragraph text-base text-secondary/80">
                <span className="font-semibold text-secondary">Aviso Importante:</span> Este é um grupo exclusivo, com vagas limitadas. Todas as candidaturas passam por curadoria. O envio do formulário não garante acesso imediato.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block font-paragraph text-base text-secondary mb-3">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="João da Silva"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-paragraph text-base text-secondary mb-3">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="joao@empresa.com"
                />
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block font-paragraph text-base text-secondary mb-3">
                  Cargo Atual *
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                >
                  <option value="">Selecione seu cargo</option>
                  <option value="CEO">CEO</option>
                  <option value="Presidente">Presidente</option>
                  <option value="Vice-Presidente">Vice-Presidente</option>
                  <option value="Diretor Executivo">Diretor Executivo</option>
                  <option value="Diretor Geral">Diretor Geral</option>
                  <option value="Sócio">Sócio</option>
                  <option value="Conselheiro">Conselheiro</option>
                  <option value="Outro C-Level">Outro C-Level</option>
                </select>
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block font-paragraph text-base text-secondary mb-3">
                  Empresa / Grupo / Organização *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Nome da sua empresa"
                />
              </div>

              {/* Segment */}
              <div>
                <label htmlFor="segment" className="block font-paragraph text-base text-secondary mb-3">
                  Segmento de Atuação *
                </label>
                <input
                  type="text"
                  id="segment"
                  name="segment"
                  value={formData.segment}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Ex.: Tecnologia, Finanças, Saúde, etc."
                />
              </div>

              {/* Years of Experience */}
              <div>
                <label htmlFor="yearsExperience" className="block font-paragraph text-base text-secondary mb-3">
                  Tempo de Experiência em Posição Executiva (anos) *
                </label>
                <input
                  type="number"
                  id="yearsExperience"
                  name="yearsExperience"
                  value={formData.yearsExperience}
                  onChange={handleChange}
                  required
                  min="0"
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="Ex.: 15"
                />
              </div>

              {/* LinkedIn */}
              <div>
                <label htmlFor="linkedIn" className="block font-paragraph text-base text-secondary mb-3">
                  LinkedIn (obrigatório) *
                </label>
                <input
                  type="url"
                  id="linkedIn"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="https://linkedin.com/in/seu-perfil"
                />
              </div>

              {/* City and State */}
              <div>
                <label htmlFor="cityState" className="block font-paragraph text-base text-secondary mb-3">
                  Cidade e Estado *
                </label>
                <input
                  type="text"
                  id="cityState"
                  name="cityState"
                  value={formData.cityState}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  placeholder="São Paulo, SP"
                />
              </div>

              {/* Expertise */}
              <div>
                <label htmlFor="expertise" className="block font-paragraph text-base text-secondary mb-3">
                  Principal Área de Expertise *
                </label>
                <select
                  id="expertise"
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                >
                  <option value="">Selecione sua área de expertise</option>
                  <option value="Estratégia">Estratégia</option>
                  <option value="Finanças">Finanças</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Governança">Governança</option>
                  <option value="Inovação">Inovação</option>
                  <option value="Operações">Operações</option>
                  <option value="Pessoas">Pessoas</option>
                  <option value="ESG">ESG</option>
                  <option value="IA">IA</option>
                  <option value="Investimentos">Investimentos</option>
                  <option value="Outra">Outra</option>
                </select>
              </div>

              {/* Why Join */}
              <div>
                <label htmlFor="whyJoin" className="block font-paragraph text-base text-secondary mb-3">
                  Por que deseja participar deste grupo exclusivo? *
                </label>
                <textarea
                  id="whyJoin"
                  name="whyJoin"
                  value={formData.whyJoin}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Compartilhe brevemente suas motivações..."
                />
              </div>

              {/* What Contribute */}
              <div>
                <label htmlFor="whatContribute" className="block font-paragraph text-base text-secondary mb-3">
                  O que você acredita que pode agregar ao grupo? *
                </label>
                <textarea
                  id="whatContribute"
                  name="whatContribute"
                  value={formData.whatContribute}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                  placeholder="Descreva suas contribuições potenciais..."
                />
              </div>

              {/* How Knew */}
              <div>
                <label htmlFor="howKnew" className="block font-paragraph text-base text-secondary mb-3">
                  Como ficou sabendo do grupo? *
                </label>
                <select
                  id="howKnew"
                  name="howKnew"
                  value={formData.howKnew}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Indicação de Membro">Indicação de Membro</option>
                  <option value="Website">Website</option>
                  <option value="Redes Sociais">Redes Sociais</option>
                  <option value="Evento">Evento</option>
                  <option value="Mídia">Mídia</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 font-paragraph text-base font-semibold bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Enviando candidatura...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Candidatura
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
