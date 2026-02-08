import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import SMBoardLogo from '@/components/SMBoardLogo';

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
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center justify-center lg:mx-0 hover:opacity-80 transition-opacity duration-300">
            <SMBoardLogo variant="light" className="h-14" />
          </Link>

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
              to="/strategy"
              className={`font-paragraph text-base transition-colors ${
                isActive('/strategy') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Estratégia
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
              to="/duediligence-ia"
              className={`font-paragraph text-base transition-colors ${
                isActive('/duediligence-ia') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              eDue
            </Link>
            <Link
              to="/podcast"
              className={`font-paragraph text-base transition-colors ${
                isActive('/podcast') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Podcast
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Alternar menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
              to="/strategy"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/strategy') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Estratégia
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
              to="/duediligence-ia"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/duediligence-ia') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              eDue
            </Link>
            <Link
              to="/podcast"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/podcast') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Podcast
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
