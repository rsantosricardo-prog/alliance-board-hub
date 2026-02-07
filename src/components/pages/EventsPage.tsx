import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Eventos } from '@/entities';
import { Image } from '@/components/ui/image';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { format } from 'date-fns';

export default function EventsPage() {
  const [events, setEvents] = useState<Eventos[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasNext, setHasNext] = useState(false);
  const [skip, setSkip] = useState(0);
  const limit = 12;

  const loadEvents = async (currentSkip: number = 0) => {
    try {
      const result = await BaseCrudService.getAll<Eventos>('events', {}, { limit, skip: currentSkip });
      const sortedItems = result.items.sort((a, b) => {
        const dateA = a.eventDateTime ? new Date(a.eventDateTime).getTime() : 0;
        const dateB = b.eventDateTime ? new Date(b.eventDateTime).getTime() : 0;
        return dateA - dateB;
      });
      if (currentSkip === 0) {
        setEvents(sortedItems);
      } else {
        setEvents(prev => {
          const combined = [...prev, ...sortedItems];
          return combined.sort((a, b) => {
            const dateA = a.eventDateTime ? new Date(a.eventDateTime).getTime() : 0;
            const dateB = b.eventDateTime ? new Date(b.eventDateTime).getTime() : 0;
            return dateA - dateB;
          });
        });
      }
      setHasNext(result.hasNext);
      setSkip(result.nextSkip || 0);
    } catch (error) {
      console.error('Error loading events:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const handleLoadMore = () => {
    loadEvents(skip);
  };

  const formatEventDate = (dateString: Date | string | undefined) => {
    if (!dateString) return '';
    try {
      const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
      return format(date, 'MMMM d, yyyy • h:mm a');
    } catch {
      return '';
    }
  };

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
            className="text-center mx-auto"
          >
            <h1 className="font-heading text-5xl lg:text-7xl text-primary-foreground mb-6">
              Eventos de Governança
            </h1>
            <p className="font-paragraph text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Junte-se a nós para discussões perspicazes, workshops e oportunidades de networking focadas em governança corporativa ética e sustentável.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Events List Section */}
      <section className="w-full py-20 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="min-h-[600px]">
            {isLoading ? null : events.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                  {events.map((event, index) => (
                    <motion.div
                      key={event._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link
                        to={`/events/${event._id}`}
                        className="block group"
                      >
                        {/* Event Image */}
                        {event.eventImage && (
                          <div className="relative w-full aspect-[4/3] mb-6 overflow-hidden bg-secondary">
                            <Image
                              src={event.eventImage}
                              alt={event.eventTitle || 'Event image'}
                              width={600}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                        )}

                        {/* Event Content */}
                        <div>
                          <h3 className="font-heading text-2xl lg:text-3xl text-secondary mb-4 group-hover:text-primary transition-colors">
                            {event.eventTitle}
                          </h3>

                          {/* Date and Time */}
                          {event.eventDateTime && (
                            <div className="flex items-start gap-3 mb-3">
                              <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                              <p className="font-paragraph text-base text-secondary/80">
                                {formatEventDate(event.eventDateTime)}
                              </p>
                            </div>
                          )}

                          {/* Location */}
                          {event.location && (
                            <div className="flex items-start gap-3 mb-3">
                              <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                              <p className="font-paragraph text-base text-secondary/80">
                                {event.location}
                              </p>
                            </div>
                          )}



                          {/* Agenda Preview */}
                          {event.agendaDescription && (
                            <p className="font-paragraph text-sm text-secondary/60 mt-4 line-clamp-2">
                              {event.agendaDescription}
                            </p>
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Load More Button */}
                {hasNext && (
                  <div className="mt-16 text-center">
                    <button
                      onClick={handleLoadMore}
                      className="font-paragraph text-base bg-secondary text-secondary-foreground px-10 py-4 rounded-full hover:bg-secondary/90 transition-colors"
                    >
                      Carregar Mais Eventos
                    </button>
                  </div>
                )}
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-center py-20"
              >
                <h2 className="font-heading text-3xl text-secondary mb-4">
                  Nenhum Evento Disponível
                </h2>
                <p className="font-paragraph text-lg text-secondary/60">
                  Volte em breve para eventos de governança futuros.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
