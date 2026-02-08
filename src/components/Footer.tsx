import { Link } from 'react-router-dom';
import { Mail, MapPin, Linkedin, ArrowRight } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-20 lg:py-24 relative z-10">
        {/* Top Section - Brand & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 pb-16 border-b border-border">
          {/* Brand Column */}
          <div className="flex flex-col justify-between">
            <div>
              <Image 
                src="https://static.wixstatic.com/media/904ff8_35c505e9c82646a2b7d6d0d4886211e3~mv2.png" 
                alt="SM Board Monogram" 
                width={60}
                height={60}
                className="mb-6"
              />
              <h3 className="font-heading text-2xl mb-4 text-foreground">SM Board</h3>
              <p className="font-paragraph text-base text-foreground/80 leading-relaxed max-w-md">
                Conectando conselheiros e C-Levels para decisões estratégicas de alto impacto através de inteligência coletiva e capital intelectual.
              </p>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a 
                href="https://www.linkedin.com/company/smboard/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-accent/30 flex items-center justify-center text-accent hover:bg-accent hover:text-background transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col justify-center items-start lg:items-end">
            <div className="max-w-md">
              <h4 className="font-heading text-xl mb-4 text-foreground">Pronto para transformar sua estratégia?</h4>
              <p className="font-paragraph text-base text-foreground/70 mb-6">
                Entre em contato com nosso time e descubra como a SM Board pode impulsionar suas decisões estratégicas.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-paragraph text-base font-medium text-background bg-accent px-8 py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 group"
              >
                Fale Conosco
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-16 pb-16 border-b border-border">
          {/* Navigation Column */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-foreground">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-base text-foreground/70 hover:text-accent transition-colors duration-300">
                Início
              </Link>
              <Link to="/about" className="font-paragraph text-base text-foreground/70 hover:text-accent transition-colors duration-300">
                Quem Somos
              </Link>
              <Link to="/strategy" className="font-paragraph text-base text-foreground/70 hover:text-accent transition-colors duration-300">
                Estratégia
              </Link>
              <Link to="/institutional" className="font-paragraph text-base text-foreground/70 hover:text-accent transition-colors duration-300">
                Institucional
              </Link>
              <Link to="/solutions" className="font-paragraph text-base text-foreground/70 hover:text-accent transition-colors duration-300">
                Soluções
              </Link>
            </nav>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-foreground">Recursos</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/events" className="font-paragraph text-base text-foreground/70 hover:text-accent transition-colors duration-300">
                Eventos
              </Link>
              <Link to="/ebooks" className="font-paragraph text-base text-foreground/70 hover:text-accent transition-colors duration-300">
                E-books
              </Link>
              <Link to="/governance" className="font-paragraph text-base text-foreground/70 hover:text-accent transition-colors duration-300">
                Governança
              </Link>
              <Link to="/podcast" className="font-paragraph text-base text-foreground/70 hover:text-accent transition-colors duration-300">
                Podcast
              </Link>
              <Link to="/duediligence-ia" className="font-paragraph text-base text-foreground/70 hover:text-accent transition-colors duration-300">
                eDue
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-lg mb-6 text-foreground">Contato</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-paragraph text-sm text-foreground/70">Endereço</p>
                  <p className="font-paragraph text-base text-foreground/90 leading-relaxed">
                    Rua Funchal, 538<br />
                    Itaim Bibi, São Paulo - SP<br />
                    04548-060
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-paragraph text-sm text-foreground/70">Email</p>
                  <a href="mailto:contato@smboard.com.br" className="font-paragraph text-base text-foreground/90 hover:text-accent transition-colors">
                    contato@smboard.com.br
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-paragraph text-sm text-foreground/60 text-center md:text-left">
            © {new Date().getFullYear()} SM Board. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center md:justify-end">
            <Link to="/about" className="font-paragraph text-sm text-foreground/60 hover:text-accent transition-colors">
              Sobre Nós
            </Link>
            <span className="text-foreground/20">•</span>
            <Link to="/contact" className="font-paragraph text-sm text-foreground/60 hover:text-accent transition-colors">
              Política de Privacidade
            </Link>
            <span className="text-foreground/20">•</span>
            <Link to="/contact" className="font-paragraph text-sm text-foreground/60 hover:text-accent transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
