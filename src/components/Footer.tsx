import { Link } from 'react-router-dom';
import { Users, Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  const socialLinks = {
    linkedin: 'https://www.linkedin.com/company/madiltech/',
    twitter: 'https://x.com/madilcarreiras',
    instagram: 'https://www.instagram.com/madil.io?igsh=MTk3MTRyOWJqMWFmbg== ',
    facebook: 'https://facebook.com/madil',
    whatsapp: 'https://wa.me/555192451356',
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">Madil</span>
            </div>
            <p className="text-sm">{t('footer.description')}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors duration-200">{t('navbar.about')}</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors duration-200">{t('navbar.services')}</Link></li>
              <li><Link to="/testimonials" className="hover:text-blue-400 transition-colors duration-200">{t('navbar.testimonials')}</Link></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors duration-200">{t('navbar.contact')}</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.contactInfo')}</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@madil.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+55 51 9245-1356</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Business Ave, Suite 400</span>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                <Twitter className="h-6 w-6" />
              </a>
              <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-200">
                <Facebook className="h-6 w-6" />
              </a>
              <a href={socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors duration-200">
                <FaWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Madil. {t('footer.allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
