import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import logo from '../img/foto.png'; 

interface NavItem {
  to: string;
  label: string;
}

const NavLink = ({
  to,
  label,
  isActive,
  onClick,
  className = '',
}: NavItem & { isActive: boolean; onClick?: () => void; className?: string }) => (
  <Link to={to} onClick={onClick} className={`relative ${className}`}>
    <motion.span
      className={`block px-4 py-2 rounded-md text-base font-medium transition-colors duration-200
        ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
    >
      {label}
      {isActive && (
        <motion.div
          layoutId="activeIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
          initial={false}
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
    </motion.span>
  </Link>
);

const LanguageSwitch = ({ className = '' }: { className?: string }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'pt', label: 'PT' },
  ];

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <Globe className="h-5 w-5 text-gray-400" />
      <div className="flex space-x-1">
        {languages.map(({ code, label }) => (
          <motion.button
            key={code}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => i18n.changeLanguage(code)}
            className={`px-3 py-1 rounded-md text-base font-medium transition-colors duration-200
              ${currentLang === code
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:bg-gray-100'}`}
          >
            {label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

const MobileMenu = ({
  isOpen,
  links,
  currentPath,
  onClose,
}: {
  isOpen: boolean;
  links: NavItem[];
  currentPath: string;
  onClose: () => void;
}) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
        transition={{ duration: 0.2 }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-100"
      >
        <div className="px-4 py-2 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              {...link}
              isActive={currentPath === link.to}
              onClick={onClose}
              className="block w-full"
            />
          ))}
          <div className="pt-4 pb-2 border-t border-gray-100">
            <LanguageSwitch className="justify-center" />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links: NavItem[] = [
    { to: '/', label: t('navbar.home') },
    { to: '/about', label: t('navbar.about') },
    { to: '/services', label: t('navbar.services') },
    { to: '/partners', label: t('navbar.partners') },
    { to: '/testimonials', label: t('navbar.testimonials') },
    { to: '/contact', label: t('navbar.contact') },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed w-full z-50 bg-white/80 backdrop-blur-lg shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src={logo}
                alt="Logo"
                className="h-12 w-12 object-cover rounded-lg"
              />
              <span className="text-2xl font-bold text-blue-600">Madil</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <NavLink
                key={link.to}
                {...link}
                isActive={location.pathname === link.to}
              />
            ))}
            <LanguageSwitch />
            <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-lg hover:bg-blue-700">
              {t('navbar.getStarted')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isOpen}
        links={links}
        currentPath={location.pathname}
        onClose={() => setIsOpen(false)}
      />
    </motion.nav>
  );
};

export default Navbar;
