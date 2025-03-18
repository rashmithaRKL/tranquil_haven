
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hotel-navy text-white pt-16 pb-8">
      <div className="hotel-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="font-serif text-2xl font-semibold">
              Tranquil Haven
            </Link>
            <p className="text-hotel-beige mt-4 max-w-sm">
              Experience exceptional luxury and tranquility in our elegant hotel, 
              where timeless comfort meets modern sophistication.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-hotel-beige transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-hotel-beige transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-hotel-beige transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-hotel-beige hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-hotel-beige hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/packages" 
                  className="text-hotel-beige hover:text-white transition-colors duration-300"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-hotel-beige hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-hotel-beige hover:text-white transition-colors duration-300"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-hotel-beige" size={18} />
                <span className="text-hotel-beige">
                  123 Serenity Avenue, Coastal City, 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 flex-shrink-0 text-hotel-beige" size={18} />
                <a 
                  href="tel:+15551234567" 
                  className="text-hotel-beige hover:text-white transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 flex-shrink-0 text-hotel-beige" size={18} />
                <a 
                  href="mailto:info@tranquilhaven.com" 
                  className="text-hotel-beige hover:text-white transition-colors duration-300"
                >
                  info@tranquilhaven.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-4">Subscribe</h4>
            <p className="text-hotel-beige mb-4">
              Subscribe to our newsletter to receive special offers and updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-white/10 text-white placeholder:text-hotel-beige/70 rounded-md focus:outline-none focus:ring-2 focus:ring-hotel-gold"
              />
              <button 
                type="submit" 
                className="px-4 py-2 bg-hotel-gold text-hotel-navy font-medium rounded-md hover:bg-opacity-90 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-hotel-beige text-sm">
          <p>&copy; {currentYear} Tranquil Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
