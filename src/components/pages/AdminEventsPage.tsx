import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BaseCrudService } from '@/integrations';
import { Eventos } from '@/entities';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { ArrowLeft, Plus } from 'lucide-react';

export default function AdminEventsPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    eventTitle: '',
    introduction: '',
    targetAudience: '',
    agendaDescription: '',
    detailedAgenda: '',
    location: '',
    virtualLink: '',
    price: '',
    eventDateTime: '',
    eventImage: '',
    finalMessage: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const eventData = {
        _id: crypto.randomUUID(),
        eventTitle: formData.eventTitle,
        introduction: formData.introduction,
        targetAudience: formData.targetAudience,
        agendaDescription: formData.agendaDescription,
        detailedAgenda: formData.detailedAgenda,
        location: formData.location,
        virtualLink: formData.virtualLink || undefined,
        price: formData.price ? parseFloat(formData.price) : undefined,
        eventDateTime: formData.eventDateTime ? new Date(formData.eventDateTime) : undefined,
        eventImage: formData.eventImage || undefined,
        finalMessage: formData.finalMessage,
      };

      await BaseCrudService.create('events', eventData);

      // Reset form
      setFormData({
        eventTitle: '',
        introduction: '',
        targetAudience: '',
        agendaDescription: '',
        detailedAgenda: '',
        location: '',
        virtualLink: '',
        price: '',
        eventDateTime: '',
        eventImage: '',
        finalMessage: '',
      });

      // Redirect to events page
      navigate('/events');
    } catch (error) {
      console.error('Error creating event:', error);
      alert('Erro ao criar evento. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full bg-primary py-16 lg:py-24">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-6">
            <button
              onClick={() => navigate('/events')}
              className="flex items-center gap-2 text-primary-foreground hover:opacity-80 transition-opacity"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-paragraph">Voltar</span>
            </button>
          </div>
          <h1 className="font-heading text-5xl lg:text-6xl text-primary-foreground">
            Adicionar Novo Evento
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="w-full py-20 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Event Title */}
              <div>
                <label className="font-paragraph text-base font-semibold text-secondary mb-2 block">
                  Título do Evento *
                </label>
                <Input
                  type="text"
                  name="eventTitle"
                  value={formData.eventTitle}
                  onChange={handleChange}
                  placeholder="Ex: Conferência de Governança 2026"
                  required
                  className="w-full"
                />
              </div>

              {/* Introduction */}
              <div>
                <label className="font-paragraph text-base font-semibold text-secondary mb-2 block">
                  Introdução *
                </label>
                <Textarea
                  name="introduction"
                  value={formData.introduction}
                  onChange={handleChange}
                  placeholder="Descrição breve do evento"
                  required
                  className="w-full min-h-[120px]"
                />
              </div>

              {/* Target Audience */}
              <div>
                <label className="font-paragraph text-base font-semibold text-secondary mb-2 block">
                  Público-Alvo
                </label>
                <Input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  placeholder="Ex: Executivos, Conselheiros, Gestores"
                  className="w-full"
                />
              </div>

              {/* Agenda Description */}
              <div>
                <label className="font-paragraph text-base font-semibold text-secondary mb-2 block">
                  Descrição da Agenda
                </label>
                <Textarea
                  name="agendaDescription"
                  value={formData.agendaDescription}
                  onChange={handleChange}
                  placeholder="Resumo dos tópicos a serem abordados"
                  className="w-full min-h-[120px]"
                />
              </div>

              {/* Detailed Agenda */}
              <div>
                <label className="font-paragraph text-base font-semibold text-secondary mb-2 block">
                  Agenda Detalhada
                </label>
                <Textarea
                  name="detailedAgenda"
                  value={formData.detailedAgenda}
                  onChange={handleChange}
                  placeholder="Agenda completa com horários e palestrantes"
                  className="w-full min-h-[150px]"
                />
              </div>

              {/* Location */}
              <div>
                <label className="font-paragraph text-base font-semibold text-secondary mb-2 block">
                  Local
                </label>
                <Input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Ex: São Paulo, SP ou Online"
                  className="w-full"
                />
              </div>

              {/* Event Date and Time */}
              <div>
                <label className="font-paragraph text-base font-semibold text-secondary mb-2 block">
                  Data e Hora do Evento
                </label>
                <Input
                  type="datetime-local"
                  name="eventDateTime"
                  value={formData.eventDateTime}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>

              {/* Virtual Link */}
              <div>
                <label className="font-paragraph text-base font-semibold text-secondary mb-2 block">
                  Link Virtual (Zoom, Teams, etc)
                </label>
                <Input
                  type="url"
                  name="virtualLink"
                  value={formData.virtualLink}
                  onChange={handleChange}
                  placeholder="https://zoom.us/..."
                  className="w-full"
                />
              </div>

              {/* Price */}
              <div>
                <label className="font-paragraph text-base font-semibold text-secondary mb-2 block">
                  Preço (R$)
                </label>
                <Input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="w-full"
                />
              </div>

              {/* Event Image URL */}
              <div>
                <label className="font-paragraph text-base font-semibold text-secondary mb-2 block">
                  URL da Imagem do Evento
                </label>
                <Input
                  type="url"
                  name="eventImage"
                  value={formData.eventImage}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full"
                />
              </div>

              {/* Final Message */}
              <div>
                <label className="font-paragraph text-base font-semibold text-secondary mb-2 block">
                  Mensagem Final
                </label>
                <Textarea
                  name="finalMessage"
                  value={formData.finalMessage}
                  onChange={handleChange}
                  placeholder="Mensagem de encerramento ou call-to-action"
                  className="w-full min-h-[100px]"
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-8">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner />
                      <span>Criando...</span>
                    </>
                  ) : (
                    <>
                      <Plus className="w-5 h-5" />
                      <span>Criar Evento</span>
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate('/events')}
                  className="px-8 py-3 rounded-full border border-secondary text-secondary hover:bg-secondary/10 transition-colors"
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
