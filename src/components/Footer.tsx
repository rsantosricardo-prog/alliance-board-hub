import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-primary-foreground">Alliance Board Hub</h3>
            <p className="font-paragraph text-sm text-primary-foreground/80">
              Conectando conselheiros e organizações para fortalecer a governança corporativa com clareza, independência e excelência.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-primary-foreground">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Início
              </Link>
              <Link to="/about" className="font-paragraph text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Quem Somos
              </Link>
              <Link to="/solutions" className="font-paragraph text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Soluções
              </Link>
              <Link to="/governance" className="font-paragraph text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Governança na Prática
              </Link>
              <Link to="/events" className="font-paragraph text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Eventos
              </Link>
              <Link to="/contact" className="font-paragraph text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-primary-foreground">Entre em Contato</h4>
            <p className="font-paragraph text-sm text-primary-foreground/80 mb-4">
              Rua Funchal, 538<br />
              Itaim Bibi, São Paulo - SP<br />
              04548-060 / Eixo Faria Lima
            </p>
            <Link
              to="/contact"
              className="inline-block font-paragraph text-sm text-accent-foreground bg-accent px-6 py-3 rounded-full hover:bg-accent/80 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="font-paragraph text-sm text-primary-foreground/60 text-center">
            © {new Date().getFullYear()} Alliance Board Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
