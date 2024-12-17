import { motion } from 'framer-motion';
import { Search, Users, Briefcase, LineChart, Target, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Importando o hook useTranslation

const ServiceCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
  >
    <Icon className="h-12 w-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <Link
      to="/contact"
      className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
    >
      {useTranslation().t('servicesPage.learnMore')} →
    </Link>
  </motion.div>
);

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Search,
      title: t('servicesPage.services.executiveSearch.title'),
      description: t('servicesPage.services.executiveSearch.description'),
    },
    {
      icon: Users,
      title: t('servicesPage.services.talentAcquisition.title'),
      description: t('servicesPage.services.talentAcquisition.description'),
    },
    {
      icon: Briefcase,
      title: t('servicesPage.services.careerCoaching.title'),
      description: t('servicesPage.services.careerCoaching.description'),
    },
    {
      icon: LineChart,
      title: t('servicesPage.services.hrConsulting.title'),
      description: t('servicesPage.services.hrConsulting.description'),
    },
    {
      icon: Target,
      title: t('servicesPage.services.industrySpecialization.title'),
      description: t('servicesPage.services.industrySpecialization.description'),
    },
    {
      icon: BookOpen,
      title: t('servicesPage.services.leadershipDevelopment.title'),
      description: t('servicesPage.services.leadershipDevelopment.description'),
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('servicesPage.heroTitle')}</h1>
            <p className="text-xl mb-8">{t('servicesPage.heroSubtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-4">{t('servicesPage.ctaTitle')}</h2>
            <p className="text-xl text-gray-600 mb-8">{t('servicesPage.ctaSubtitle')}</p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              {t('servicesPage.schedule')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
