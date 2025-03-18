
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Packages', path: '/packages' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close the mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        'fixed w-full top-0 left-0 z-50 transition-all duration-300',
        scrolled 
          ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <div className="hotel-container flex items-center justify-between">
        <Link 
          to="/" 
          className="font-serif text-2xl md:text-3xl font-semibold text-hotel-navy"
        >
          Tranquil Haven
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'font-medium text-sm uppercase tracking-wider transition-colors duration-300',
                location.pathname === link.path
                  ? 'text-hotel-navy after:w-full'
                  : 'text-hotel-navy/70 hover:text-hotel-navy',
                'relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px]',
                'after:bg-hotel-navy after:transition-all after:duration-300',
                location.pathname === link.path ? 'after:w-full' : 'after:w-0 hover:after:w-full'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Book Now Button */}
        <div className="hidden md:block">
          <Link 
            to="/packages" 
            className="btn-primary"
          >
            Book Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-hotel-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white bg-opacity-95 backdrop-blur-md transform transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col p-8 pt-24 h-full">
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'font-medium text-xl transition-colors duration-300',
                  location.pathname === link.path
                    ? 'text-hotel-navy'
                    : 'text-hotel-navy/70 hover:text-hotel-navy'
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="mt-auto">
            <Link 
              to="/packages" 
              className="btn-primary w-full flex justify-center"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
