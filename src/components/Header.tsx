import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when scrolling up or at the top
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } 
      // Hide header when scrolling down (after 10px threshold)
      else if (currentScrollY > lastScrollY && currentScrollY > 10) {
        setIsVisible(false);
        setIsMenuOpen(false); // Close mobile menu when hiding
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full bg-background border-b border-muted/20 z-50 transition-transform duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-paragraph text-base transition-colors ${
                isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Início
            </Link>
            <Link
              to="/about"
              className={`font-paragraph text-base transition-colors ${
                isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Quem Somos
            </Link>
            <Link
              to="/institutional"
              className={`font-paragraph text-base transition-colors ${
                isActive('/institutional') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Definição Institucional
            </Link>
            <Link
              to="/solutions"
              className={`font-paragraph text-base transition-colors ${
                isActive('/solutions') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Soluções
            </Link>
            <Link
              to="/governance"
              className={`font-paragraph text-base transition-colors ${
                isActive('/governance') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Governança na Prática
            </Link>
            <Link
              to="/events"
              className={`font-paragraph text-base transition-colors ${
                isActive('/events') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Eventos
            </Link>
            <Link
              to="/ebooks"
              className={`font-paragraph text-base transition-colors ${
                isActive('/ebooks') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Publicações & E-books
            </Link>
            <Link
              to="/contact"
              className={`font-paragraph text-base transition-colors ${
                isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Contato
            </Link>
          </nav>

          <Link to="/" className="flex items-center gap-3">
            <Image
              src="https://static.wixstatic.com/media/904ff8_e139363c186d4f4f8a5fd7c11421908a~mv2.png"
              width={240}
              className="h-16 w-auto"
              originWidth={1002}
              originHeight={366} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground"
            aria-label="Alternar menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-6 flex flex-col gap-4 pb-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Início
            </Link>
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Quem Somos
            </Link>
            <Link
              to="/institutional"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/institutional') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Definição Institucional
            </Link>
            <Link
              to="/solutions"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/solutions') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Soluções
            </Link>
            <Link
              to="/governance"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/governance') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Governança na Prática
            </Link>
            <Link
              to="/events"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/events') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Eventos
            </Link>
            <Link
              to="/ebooks"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/ebooks') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Publicações & E-books
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Contato
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
