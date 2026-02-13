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

  const highlightTimeInText = (text: string) => {
    // Pattern to match time formats like HH:mm or HH:MM
    const timePattern = /\d{1,2}:\d{2}/g;
    
    // Split text by lines
    const lines = text.split('\n');
    
    return lines.map((line, lineIndex) => {
      // Check if line contains time
      if (timePattern.test(line)) {
        // Reset regex lastIndex for next test
        timePattern.lastIndex = 0;
        
        // Split line by time pattern and wrap times in bold
        const parts = line.split(/([\d]{1,2}:[\d]{2})/);
        
        return (
          <div key={lineIndex}>
            {parts.map((part, partIndex) => {
              if (/([\d]{1,2}:[\d]{2})/.test(part)) {
                return <strong key={partIndex}>{line}</strong>;
              }
              return part;
            })}
          </div>
        );
      }
      
      return <div key={lineIndex}>{line}</div>;
    });
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

                    {/* Detailed Agenda - Elegant Section */}
                    {event.detailedAgenda && (
                      <div className="mb-16">
                        <h2 className="font-heading text-3xl lg:text-4xl text-secondary mb-12">
                          AGENDA DO EVENTO
                        </h2>
                        
                        <div className="space-y-8">
                          {/* Welcome Coffee & Credenciamento */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="pb-8 border-b border-secondary/20"
                          >
                            <div className="flex items-start gap-6">
                              <div className="flex-shrink-0">
                                <p className="font-heading text-xl text-amber-500 font-bold">16:00 – 16:15</p>
                              </div>
                              <div className="flex-grow">
                                <h3 className="font-heading text-2xl text-amber-500 font-bold mb-2">
                                  Welcome Coffee & Credenciamento
                                </h3>
                              </div>
                            </div>
                          </motion.div>

                          {/* Liderar Hoje as Decisões de Amanhã */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="pb-8 border-b border-secondary/20"
                          >
                            <div className="flex items-start gap-6">
                              <div className="flex-shrink-0">
                                <p className="font-heading text-xl text-amber-500 font-bold">16:15 – 16:40</p>
                              </div>
                              <div className="flex-grow">
                                <h3 className="font-heading text-2xl text-amber-500 font-bold mb-3">
                                  Liderar Hoje as Decisões de Amanhã
                                </h3>
                                <p className="font-paragraph text-base text-secondary/70 mb-3 italic">
                                  Tecnologia, inovação e gestão
                                </p>
                                <p className="font-heading text-lg text-amber-500 font-bold mb-4">
                                  Marcela Silveira
                                </p>
                                <p className="font-paragraph text-base text-secondary/80 leading-relaxed">
                                  Uma visão estratégica sobre como líderes e Conselhos precisam antecipar tendências, integrar tecnologia e inovar na gestão para sustentar decisões relevantes no presente e no futuro.
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Entre Risco e Crescimento */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="pb-8 border-b border-secondary/20"
                          >
                            <div className="flex items-start gap-6">
                              <div className="flex-shrink-0">
                                <p className="font-heading text-xl text-amber-500 font-bold">16:40 – 17:30</p>
                              </div>
                              <div className="flex-grow">
                                <h3 className="font-heading text-2xl text-amber-500 font-bold mb-3">
                                  Entre Risco e Crescimento – Cenários
                                </h3>
                                <p className="font-paragraph text-base text-secondary/70 mb-3 italic">
                                  Governança, pressão e decisões em ambientes complexos
                                </p>
                                <p className="font-heading text-lg text-amber-500 font-bold mb-4">
                                  Júlio Damião
                                </p>
                                <p className="font-paragraph text-base text-secondary/80 leading-relaxed">
                                  Leitura aprofundada dos cenários que impactam diretamente os Conselhos, explorando os dilemas entre risco, crescimento, responsabilidade e sustentabilidade das decisões estratégicas.
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Decidir com Consistência */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            viewport={{ once: true }}
                            className="pb-8 border-b border-secondary/20"
                          >
                            <div className="flex items-start gap-6">
                              <div className="flex-shrink-0">
                                <p className="font-heading text-xl text-amber-500 font-bold">17:30 – 18:00</p>
                              </div>
                              <div className="flex-grow">
                                <h3 className="font-heading text-2xl text-amber-500 font-bold mb-3">
                                  Decidir com Consistência
                                </h3>
                                <p className="font-paragraph text-base text-secondary/70 mb-3 italic">
                                  Informação, critério e responsabilidade no nível do Board
                                </p>
                                <p className="font-heading text-lg text-amber-500 font-bold mb-4">
                                  Ricardo Santos
                                </p>
                                <p className="font-paragraph text-base text-secondary/80 leading-relaxed">
                                  Como a qualidade da informação, o rigor dos critérios e os processos de Due Diligence sustentam decisões sólidas no ambiente de Conselho. Apresentação da plataforma eDue aplicada à governança.
                                </p>
                              </div>
                            </div>
                          </motion.div>

                          {/* Happy Hour Executivo */}
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            viewport={{ once: true }}
                          >
                            <div className="flex items-start gap-6">
                              <div className="flex-shrink-0">
                                <p className="font-heading text-xl text-amber-500 font-bold">18:00 – 22:00</p>
                              </div>
                              <div className="flex-grow">
                                <h3 className="font-heading text-2xl text-amber-500 font-bold mb-4">
                                  Happy Hour Executivo
                                </h3>
                                <ul className="space-y-2">
                                  <li className="font-paragraph text-base text-secondary/80">
                                    Jantar completo
                                  </li>
                                  <li className="font-paragraph text-base text-secondary/80">
                                    Bebidas à vontade
                                  </li>
                                  <li className="font-paragraph text-base text-secondary/80">
                                    Conexões estratégicas entre C-Levels, empresários e conselheiros
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        </div>
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
                            <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1 fill-primary-foreground" />
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
                          <div className="flex items-start gap-3 shadow-[12px_12px_4px_0px_#d9d9d9]">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1 fill-secondary-foreground shadow-[12px_12px_4px_0px_#d9d9d9]" />
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
                            href="/solicitar-curadoria"
                            className="w-full text-center font-paragraph text-base bg-secondary-foreground text-secondary px-6 py-3 rounded-full hover:bg-secondary-foreground/90 transition-colors"
                          >Solicitar Curadoria</a>
                          <div className="mt-2">

                          </div>
                        </div>
                      </div>
                      {/* Contact CTA */}

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
