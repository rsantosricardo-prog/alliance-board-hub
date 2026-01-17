import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-white">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-xl mb-4 text-white">Alliance Board Hub</h3>
            <p className="font-paragraph text-sm text-white/80">
              Conectando conselheiros e organizações para fortalecer a governança corporativa com clareza, independência e excelência.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-white">Navegação</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-sm text-white/80 hover:text-white transition-colors">
                Início
              </Link>
              <Link to="/about" className="font-paragraph text-sm text-white/80 hover:text-white transition-colors">
                Quem Somos
              </Link>
              <Link to="/solutions" className="font-paragraph text-sm text-white/80 hover:text-white transition-colors">
                Soluções
              </Link>
              <Link to="/governance" className="font-paragraph text-sm text-white/80 hover:text-white transition-colors">
                Governança na Prática
              </Link>
              <Link to="/events" className="font-paragraph text-sm text-white/80 hover:text-white transition-colors">
                Eventos
              </Link>
              <Link to="/contact" className="font-paragraph text-sm text-white/80 hover:text-white transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-lg mb-4 text-white">Entre em Contato</h4>
            <p className="font-paragraph text-sm text-white/80 mb-4">
              Entre em contato para saber mais sobre governança ética e sustentável.
            </p>
            <Link
              to="/contact"
              className="inline-block font-paragraph text-sm text-white bg-primary px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              Fale Conosco
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="font-paragraph text-sm text-white/60 text-center">
            © {new Date().getFullYear()} Alliance Board Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
