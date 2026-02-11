import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Eventos } from '@/entities';
import { Image } from '@/components/ui/image';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Calendar, MapPin, ExternalLink, ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Eventos | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadEvent = async () => {
      if (!id) return;
      
      try {
        const data = await BaseCrudService.getById<Eventos>('events', id);
        setEvent(data);
      } catch (error) {
        console.error('Error loading event:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadEvent();
  }, [id]);

  const formatEventDate = (dateString: Date | string | undefined) => {
    if (!dateString) return '';
    try {
      const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
      const formatted = format(date, "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR });
      // Capitalize first letter of day and month
      return formatted.replace(/^(.)/, (match) => match.toUpperCase()).replace(/ de ([a-z])/g, (match, letter) => ` de ${letter.toUpperCase()}`);
    } catch {
      return '';
    }
  };

  const formatEventTime = (dateString: Date | string | undefined) => {
    if (!dateString) return '';
    try {
      const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
      return format(date, 'HH:mm', { locale: ptBR });
    } catch {
      return '';
    }
  };

  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />
      <div className="w-full py-12 lg:py-20">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          {/* Back Button */}
          <Link
            to="/events"
            className="inline-flex items-center gap-2 font-paragraph text-base text-secondary hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar aos Eventos
          </Link>

          <div className="min-h-[600px]">
            {isLoading ? (
              <div className="flex items-center justify-center py-20">
                <LoadingSpinner />
              </div>
            ) : !event ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <h2 className="font-heading text-3xl text-secondary mb-4">
                  Evento Não Encontrado
                </h2>
                <p className="font-paragraph text-lg text-secondary/60 mb-8">
                  O evento que você está procurando não existe ou foi removido.
                </p>
                <Link
                  to="/events"
                  className="inline-block font-paragraph text-base bg-secondary text-secondary-foreground px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors"
                >
                  Ver Todos os Eventos
                </Link>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Event Image */}
                {event.eventImage && (
                  <div className="w-full aspect-[21/9] mb-12 overflow-hidden bg-secondary">
                    <Image
                      src={event.eventImage}
                      alt={event.eventTitle || 'Event'}
                      className="w-full h-full object-cover grayscale"
                      width={1600}
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
                  {/* Main Content */}
                  <div className="lg:col-span-2">
                    <h1 className="font-heading text-4xl lg:text-6xl text-secondary mb-8">
                      {event.eventTitle}
                    </h1>

                    {/* Introduction */}
                    {event.introduction && (
                      <div className="mb-12">
                        <p className="font-paragraph text-lg text-secondary/80 leading-relaxed whitespace-pre-line">
                          {event.introduction}
                        </p>
                      </div>
                    )}

                    {/* Detailed Agenda */}
                    {event.detailedAgenda && (
                      <div className="mb-12">
                        <h2 className="font-heading text-2xl lg:text-3xl text-secondary mb-6">
                          AGENDA
                        </h2>
                        <p className="font-paragraph text-lg text-secondary/80 leading-relaxed whitespace-pre-line">
                          {event.detailedAgenda}
                        </p>
                      </div>
                    )}

                    {/* Target Audience */}
                    {event.targetAudience && (
                      <div className="mb-12">
                        <h2 className="font-heading text-2xl lg:text-3xl text-secondary mb-6">
                          PARA QUEM É ESTE ENCONTRO
                        </h2>
                        <p className="font-paragraph text-lg text-secondary/80 leading-relaxed whitespace-pre-line">
                          {event.targetAudience}
                        </p>
                      </div>
                    )}

                    {/* Final Message */}
                    {event.finalMessage && (
                      <div className="mb-12">
                        <h2 className="font-heading text-2xl lg:text-3xl text-secondary mb-6">
                          MENSAGEM FINAL
                        </h2>
                        <p className="font-paragraph text-lg text-secondary/80 leading-relaxed whitespace-pre-line">
                          {event.finalMessage}
                        </p>
                      </div>
                    )}

                    {/* Legacy Agenda Description - kept for backward compatibility */}
                    {event.agendaDescription && !event.detailedAgenda && (
                      <div className="mb-12">
                        <h2 className="font-heading text-2xl lg:text-3xl text-secondary mb-6">
                            Agenda do Evento
                          </h2>
                        <p className="font-paragraph text-lg text-secondary/80 leading-relaxed whitespace-pre-line">
                        {event.agendaDescription}
                      </p>
                      </div>
                    )}
                  </div>

                  {/* Sidebar - Event Details */}
                  <div className="lg:col-span-1">
                    <div className="bg-secondary text-secondary-foreground p-8 rounded-lg sticky top-8">
                      <h3 className="font-heading text-2xl mb-6">Detalhes do Evento</h3>

                      {/* Date and Time */}
                      {event.eventDateTime && (
                        <div className="mb-6">
                          <div className="flex items-start gap-3 mb-2">
                            <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <p className="font-paragraph text-base text-secondary-foreground mb-1">
                                {formatEventDate(event.eventDateTime)}
                              </p>
                              <p className="font-paragraph text-sm text-secondary-foreground/70">
                                {formatEventTime(event.eventDateTime)}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Location */}
                      {event.location && (
                        <div className="mb-6">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <p className="font-paragraph text-base text-secondary-foreground">
                              {event.location}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Secure Your Seat CTA */}
                      <div className="mt-8 pt-6 border-t border-secondary-foreground/20">
                        <p className="font-paragraph text-sm text-secondary-foreground/70 mb-4">
                          Garanta sua participação
                        </p>
                        <div className="flex flex-col items-center gap-4">
                          <a
                            href="https://smartmoneyboard.com/_paylink/AZw9-E74"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full text-center font-paragraph text-base bg-secondary-foreground text-secondary px-6 py-3 rounded-full hover:bg-secondary-foreground/90 transition-colors"
                          >Minha Cadeira</a>
                          <div className="mt-2">
                            <Image
                              src="https://static.wixstatic.com/media/904ff8_f0a5e3f07f484c3996e48ae81ede4cf9~mv2.png"
                              alt="QR Code para garantir cadeira"
                              width={120}
                              height={120}
                              className="w-28 h-28"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Contact CTA */}
                      <div className="mt-8 pt-6 border-t border-secondary-foreground/20">
                        <p className="font-paragraph text-sm text-secondary-foreground/70 mb-4">
                          Tem dúvidas sobre este evento?
                        </p>
                        <Link
                          to="/contact"
                          className="block text-center font-paragraph text-base bg-secondary-foreground text-secondary px-6 py-3 rounded-full hover:bg-secondary-foreground/90 transition-colors"
                        >
                          Fale Conosco
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
