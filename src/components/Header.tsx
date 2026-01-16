import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Image } from '@/components/ui/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full bg-background border-b border-secondary/10">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <Image 
              src="https://static.wixstatic.com/media/904ff8_60f5e0c7c27d43e49b0942c2168b02b5~mv2.png" 
              alt="Alliance Board Hub Logo" 
              width={180}
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`font-paragraph text-base transition-colors ${
                isActive('/') ? 'text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              className={`font-paragraph text-base transition-colors ${
                isActive('/events') ? 'text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              Events
            </Link>
            <Link
              to="/contact"
              className={`font-paragraph text-base transition-colors ${
                isActive('/contact') ? 'text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-secondary"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 flex flex-col gap-4 pb-4">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/') ? 'text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              to="/events"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/events') ? 'text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              Events
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`font-paragraph text-base transition-colors ${
                isActive('/contact') ? 'text-primary' : 'text-secondary hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
