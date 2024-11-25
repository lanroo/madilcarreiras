import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Importa o hook useTranslation
import logo from '../img/logo.jpg';

const Navbar = () => {
  const { t, i18n } = useTranslation(); // Hook para tradução
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: '/', label: t('navbar.home') },
    { to: '/about', label: t('navbar.about') },
    { to: '/services', label: t('navbar.services') },
    { to: '/partners', label: t('navbar.partners') },
    { to: '/testimonials', label: t('navbar.testimonials') },
    { to: '/contact', label: t('navbar.contact') },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng); // Altera o idioma
  };
  

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src={logo} alt="Madil Logo" className="h-12 w-12 object-contain" />
              <span className="text-2xl font-bold text-gray-900">Madil</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${
                  location.pathname === link.to
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                } transition-colors duration-200 font-medium`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
            >
              {t('navbar.getStarted')}
            </Link>

          </div>

          {/* Language Switch */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => changeLanguage('en')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('pt')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              PT
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${
                  location.pathname === link.to
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                } block px-3 py-2 rounded-md text-base font-medium`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {/* Language Switch in Mobile Menu */}
          <div className="flex justify-center space-x-4 p-4">
            <button
              onClick={() => changeLanguage('en')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage('pt')}
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              PT
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
