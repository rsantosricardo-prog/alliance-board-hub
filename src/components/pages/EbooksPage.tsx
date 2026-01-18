import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Ebooks } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EbooksPage() {
  const [ebooks, setEbooks] = useState<Ebooks[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadEbooks();
  }, []);

  const loadEbooks = async () => {
    setIsLoading(true);
    const result = await BaseCrudService.getAll<Ebooks>('ebooks');
    const publishedEbooks = result.items.filter(ebook => ebook.status === 'Publicado' || ebook.status === 'Published');
    setEbooks(publishedEbooks);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="w-full bg-primary text-primary-foreground py-24 px-6">
          <div className="max-w-[100rem] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
                Conhecimento Estratégico para Fortalecer a Governança
              </h1>
              <p className="font-paragraph text-xl md:text-2xl text-primary-foreground/90">
                Publicações desenvolvidas pela Alliance Board Hub para apoiar decisões éticas, 
                sustentáveis e alinhadas às melhores práticas de governança corporativa.
              </p>
            </motion.div>
          </div>
        </section>

        {/* E-books Grid */}
        <section className="w-full py-20 px-6">
          <div className="max-w-[100rem] mx-auto" style={{ minHeight: isLoading ? '400px' : 'auto' }}>
            {isLoading ? null : ebooks.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
              >
                {ebooks.map((ebook, index) => (
                  <motion.div
                    key={ebook._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link 
                      to={`/ebooks/${ebook._id}`}
                      className="group block h-full"
                    >
                      <div className="bg-white border border-border rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:border-accent">
                        {/* Cover Image */}
                        {ebook.coverImage && (
                          <div className="aspect-[3/4] overflow-hidden bg-muted">
                            <Image
                              src={ebook.coverImage}
                              alt={ebook.title || 'E-book cover'}
                              width={400}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        )}
                        
                        {/* Content */}
                        <div className="p-8 flex flex-col flex-grow">
                          {/* Category */}
                          {ebook.category && (
                            <div className="mb-4">
                              <span className="inline-block px-4 py-1 bg-accent/10 text-accent text-sm font-paragraph rounded-full">
                                {ebook.category}
                              </span>
                            </div>
                          )}
                          
                          {/* Title */}
                          <h3 className="font-heading text-2xl text-foreground mb-3 group-hover:text-accent transition-colors">
                            {ebook.title}
                          </h3>
                          
                          {/* Subtitle */}
                          {ebook.subtitle && (
                            <p className="font-paragraph text-lg text-muted mb-4">
                              {ebook.subtitle}
                            </p>
                          )}
                          
                          {/* Short Description */}
                          {ebook.shortDescription && (
                            <p className="font-paragraph text-base text-foreground/80 mb-6 flex-grow">
                              {ebook.shortDescription}
                            </p>
                          )}
                          
                          {/* Format & CTA */}
                          <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                            <span className="font-paragraph text-sm text-muted">
                              Formato: PDF
                            </span>
                            <span className="font-paragraph text-accent font-medium flex items-center gap-2">
                              <Download className="w-4 h-4" />
                              {ebook.ctaText || 'Download gratuito'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-xl text-muted">
                  Nenhum e-book disponível no momento.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Institutional Message */}
        <section className="w-full bg-secondary/5 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-paragraph text-lg text-foreground/80 italic">
              "Compartilhar conhecimento é parte essencial de uma governança responsável."
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
