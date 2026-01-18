import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { Ebooks } from '@/entities';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Download, ArrowLeft, Calendar, Globe, Linkedin } from 'lucide-react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function EbookDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [ebook, setEbook] = useState<Ebooks | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    position: ''
  });

  useEffect(() => {
    loadEbook();
  }, [id]);

  const loadEbook = async () => {
    setIsLoading(true);
    const data = await BaseCrudService.getById<Ebooks>('ebooks', id!);
    setEbook(data);
    setIsLoading(false);
  };

  const handleDownloadClick = () => {
    setShowLeadForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the lead data to your CRM or database
    console.log('Lead captured:', formData);
    
    // Open the download link
    if (ebook?.downloadLink) {
      window.open(ebook.downloadLink, '_blank');
    }
    
    // Close the dialog
    setShowLeadForm(false);
    
    // Reset form
    setFormData({ name: '', email: '', position: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="w-full">
        <div className="max-w-[100rem] mx-auto px-6 py-12" style={{ minHeight: '600px' }}>
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <LoadingSpinner />
            </div>
          ) : !ebook ? (
            <div className="text-center py-20">
              <h2 className="font-heading text-3xl text-foreground mb-4">E-book não encontrado</h2>
              <Link to="/ebooks">
                <Button variant="outline" className="mt-6">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar para E-books
                </Button>
              </Link>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Back Button */}
              <Link to="/ebooks" className="inline-flex items-center text-accent hover:text-accent/80 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                <span className="font-paragraph">Voltar para E-books</span>
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                {/* Left Column - Cover Image */}
                <div>
                  <div className="sticky top-8">
                    <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-2xl max-w-md mx-auto">
                      <Image
                        src="https://static.wixstatic.com/media/904ff8_77a2ed534869425590c84c7f1923f99c~mv2.png"
                        width={500}
                        className="w-full h-full object-contain bg-black"
                        originWidth={1024}
                        originHeight={1024} />
                    </div>
                    
                    {/* Metadata */}
                    <div className="mt-6 space-y-3">
                      {ebook?.category && (
                        <div className="flex items-center gap-2 text-muted">
                          <span className="font-paragraph text-sm">Categoria:</span>
                          <span className="font-paragraph text-sm font-medium text-foreground">{ebook.category}</span>
                        </div>
                      )}
                      {ebook?.language && (
                        <div className="flex items-center gap-2 text-muted bg-transparent">
                          <Globe className="w-4 h-4" />
                          <span className="font-paragraph text-sm">{ebook.language}</span>
                        </div>
                      )}
                      {ebook?.publicationDate && (
                        <div className="flex items-center gap-2 text-muted">
                          <Calendar className="w-4 h-4" />
                          <span className="font-paragraph text-sm">
                            Janeiro 2026
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div>
                  {/* Title */}
                  <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
                    {ebook.title}
                  </h1>
                  {/* Subtitle */}
                  {ebook.subtitle && (
                    <p className="font-paragraph text-xl md:text-2xl text-muted mb-8">
                      {ebook.subtitle}
                    </p>
                  )}
                  {/* Download CTA */}
                  <div className="mb-12">
                    <Button 
                      onClick={handleDownloadClick}
                      size="lg"
                      className="w-full sm:w-auto text-lg px-8 py-6"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      {ebook.ctaText || 'Download gratuito do e-book'}
                    </Button>
                  </div>
                  {/* Full Description */}
                  {ebook.fullDescription && (
                    <div className="prose prose-lg max-w-none">
                      <div className="font-paragraph text-lg text-foreground/90 leading-relaxed whitespace-pre-line text-justify">
                        A publicação foi concebida como uma aproximação inicial ao tema da governança corporativa, especialmente direcionada a donos, proprietários, fundadores e executivos C-Level que buscam compreender, de forma clara e acessível, a relevância das boas práticas de governança para a condução de seus negócios.
                      </div>
                    </div>
                  )}
                  {/* About the Author - Rodrigo Domingorena */}

                  {/* Author Section */}
                  {ebook.authorName && (
                    <div className="mt-12 p-8 bg-secondary/5 rounded-lg border border-border">
                      <h3 className="font-heading text-2xl text-foreground mb-6">Sobre o Autor</h3>
                      <div className="flex flex-col sm:flex-row gap-6">
                        {/* Author Photo */}
                        {ebook.authorPhoto && (
                          <div className="flex-shrink-0">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-accent">
                              <Image
                                src={ebook.authorPhoto}
                                alt={ebook.authorName}
                                width={96}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        )}
                        
                        {/* Author Info */}
                        <div className="flex-grow">
                          <h4 className="font-heading text-xl text-foreground mb-2">{ebook.authorName}</h4>
                          {ebook.authorBio && (
                            <p className="font-paragraph text-base text-foreground/80 mb-4 leading-relaxed">
                              {ebook.authorBio}
                            </p>
                          )}
                          {ebook.authorLinkedIn && (
                            <a
                              href={ebook.authorLinkedIn}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-paragraph text-sm"
                            >
                              <Linkedin className="w-4 h-4" />
                              Conectar no LinkedIn
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                  {/* Institutional Note */}
                  <div className="mt-8 p-6 bg-secondary/5 border-l-4 border-accent rounded-r-lg">
                    <p className="font-paragraph text-sm text-foreground/80 italic">
                      Este material é disponibilizado gratuitamente como parte do compromisso da Alliance Board Hub 
                      com a disseminação das boas práticas de governança corporativa.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      <Footer />
      {/* Lead Capture Dialog */}
      <Dialog open={showLeadForm} onOpenChange={setShowLeadForm}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Acesse seu e-book gratuito</DialogTitle>
            <DialogDescription className="font-paragraph text-base">
              O acesso ao conteúdo é gratuito e utilizado exclusivamente para fins institucionais.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
            <div>
              <Label htmlFor="name" className="font-paragraph">Nome completo</Label>
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="Seu nome"
              />
            </div>
            
            <div>
              <Label htmlFor="email" className="font-paragraph">E-mail corporativo</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="seu.email@empresa.com"
              />
            </div>
            
            <div>
              <Label htmlFor="position" className="font-paragraph">Cargo / Função</Label>
              <Input
                id="position"
                name="position"
                type="text"
                required
                value={formData.position}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="Seu cargo"
              />
            </div>
            
            <Button type="submit" className="w-full" size="lg">
              <Download className="w-4 h-4 mr-2" />
              Baixar e-book
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
