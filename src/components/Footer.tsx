import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground">
      <div className="max-w-[120rem] mx-auto px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-xl mb-4">Alliance Board Hub</h3>
            <p className="font-paragraph text-sm text-secondary-foreground/80">
              Connecting board members and organizations to strengthen corporate governance with clarity, independence, and excellence.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-heading text-lg mb-4">Navigation</h4>
            <nav className="flex flex-col gap-3">
              <Link to="/" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Home
              </Link>
              <Link to="/events" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Events
              </Link>
              <Link to="/contact" className="font-paragraph text-sm text-secondary-foreground/80 hover:text-secondary-foreground transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-heading text-lg mb-4">Get in Touch</h4>
            <p className="font-paragraph text-sm text-secondary-foreground/80 mb-2">
              Reach out to learn more about ethical and sustainable governance.
            </p>
            <Link
              to="/contact"
              className="inline-block font-paragraph text-sm text-secondary-foreground bg-primary px-6 py-2 rounded-full hover:bg-primary/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <p className="font-paragraph text-sm text-secondary-foreground/60 text-center">
            © {new Date().getFullYear()} Alliance Board Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
