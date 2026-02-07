import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h3 className="font-heading text-2xl lg:text-3xl mb-6 text-primary-foreground text-center">SM Board</h3>
            <p className="font-paragraph text-base text-primary-foreground/90 leading-relaxed mb-6 text-justify">
              Conectando conselheiros e C-Levels para decisões estratégicas de alto impacto através de inteligência coletiva e capital intelectual.
            </p>
            <div className="h-1 w-20 bg-accent rounded-full"></div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-primary-foreground">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-base text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300">
                Início
              </Link>
              <Link to="/about" className="font-paragraph text-base text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300">
                Quem Somos
              </Link>
              <Link to="/institutional" className="font-paragraph text-base text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300">
                Posicionamento
              </Link>
              <Link to="/events" className="font-paragraph text-base text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300">
                Eventos
              </Link>
              <Link to="/ebooks" className="font-paragraph text-base text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300">
                E-books
              </Link>
              <Link to="/duediligence-ia" className="font-paragraph text-base text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300">eDue</Link>
              <Link to="/podcast" className="font-paragraph text-base text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300">Podcast Se Conselho Fosse Bom</Link>
            </nav>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-primary-foreground">Recursos</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/governance" className="font-paragraph text-base text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300">
                Governança
              </Link>
              <Link to="/ebooks" className="font-paragraph text-base text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300">
                Biblioteca Digital
              </Link>
              <Link to="/events" className="font-paragraph text-base text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300">
                Próximos Eventos
              </Link>
              <Link to="/contact" className="font-paragraph text-base text-primary-foreground/80 hover:text-accent hover:translate-x-1 transition-all duration-300">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-xl mb-6 text-primary-foreground">Entre em Contato</h4>
            <div className="flex flex-col gap-4 mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                <p className="font-paragraph text-base text-primary-foreground/90 leading-relaxed">
                  Rua Funchal, 538<br />
                  Itaim Bibi, São Paulo - SP<br />
                  04548-060
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:conselho@allianceboardhub.com" className="font-paragraph text-base text-primary-foreground/90 hover:text-accent transition-colors">
                  conselho@allianceboardhub.com
                </a>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center font-paragraph text-base font-medium text-accent-foreground bg-accent px-8 py-3 rounded-full hover:bg-accent/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-accent/50"
            >
              Fale Conosco
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-paragraph text-sm text-primary-foreground/70 text-center md:text-left">
              © {new Date().getFullYear()} SM Board. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/about" className="font-paragraph text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                Sobre Nós
              </Link>
              <span className="text-primary-foreground/30">|</span>
              <Link to="/contact" className="font-paragraph text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                Política de Privacidade
              </Link>
              <span className="text-primary-foreground/30">|</span>
              <a 
                href="https://www.allianceboardhub.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/70 hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
