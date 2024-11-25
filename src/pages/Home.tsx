import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Trophy, Building2, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PartnersSlider from '../components/PartnersSlider';

const Home = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      icon: Users,
      value: "10,000+",
      label: t('home.achievements.successfulPlacements'),
    },
    {
      icon: Building2,
      value: "500+",
      label: t('home.achievements.partnerCompanies'),
    },
    {
      icon: Trophy,
      value: "98%",
      label: t('home.achievements.clientSatisfaction'),
    },
    {
      icon: BarChart,
      value: "15+",
      label: t('home.achievements.yearsExperience'),
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: t('home.solutions.executiveSearch.title'),
      description: t('home.solutions.executiveSearch.description'),
    },
    {
      icon: Users,
      title: t('home.solutions.professionalRecruitment.title'),
      description: t('home.solutions.professionalRecruitment.description'),
    },
    {
      icon: BarChart,
      title: t('home.solutions.careerDevelopment.title'),
      description: t('home.solutions.careerDevelopment.description'),
    },
  ];

  return (
    <div className="pt-20 space-y-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('home.heroTitle')}</h1>
            <p className="text-xl mb-8">{t('home.heroSubtitle')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                {t('home.getStarted')} <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                {t('home.ourServices')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Slider */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900">{t('home.trustedBy')}</h2>
          </motion.div>
          <PartnersSlider />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">{t('home.impactTitle')}</h2>
          <p className="text-xl text-gray-600">{t('home.impactSubtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <p className="text-4xl font-bold text-gray-900 mb-2">{achievement.value}</p>
              <p className="text-gray-600">{achievement.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">{t('home.solutionsTitle')}</h2>
            <p className="text-xl text-gray-600">{t('home.solutionsSubtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <solution.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg shadow-xl p-8 text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">{t('home.ctaTitle')}</h2>
            <p className="text-xl mb-8">{t('home.ctaSubtitle')}</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              {t('home.schedule')}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
