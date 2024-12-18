import { motion, AnimatePresence } from 'framer-motion';
import { Search, Users, Briefcase, LineChart, Target, BookOpen, UsersRound, ArrowRight, Code, Cpu, Globe, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, ReactNode } from 'react';

// Floating Animation Component
const FloatingElement = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    animate={{ 
      y: [0, -10, 0],
      rotate: [-1, 1, -1]
    }}
    transition={{ 
      duration: 5,
      delay,
      repeat: Infinity,
      ease: "easeInOut" 
    }}
  >
    {children}
  </motion.div>
);

// Glowing Background Effect
const GlowingBackground = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-[800px] h-[800px] -top-[400px] -left-[400px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
    <div className="absolute w-[600px] h-[600px] -bottom-[300px] -right-[300px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse delay-1000" />
    <div className="absolute w-[500px] h-[500px] top-[20%] left-[60%] bg-purple-500/20 rounded-full blur-[80px] animate-pulse delay-2000" />
  </div>
);

// Card Components
const ServiceCard = ({ icon: Icon, title, description, index }: { icon: any; title: string; description: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-lg hover:shadow-2xl transition-all duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
      <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      
      <div className="relative">
        <motion.div 
          className="bg-gradient-to-br from-blue-600 to-blue-400 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-blue-500/25"
          animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="h-10 w-10 text-white" />
        </motion.div>

        <motion.div
          animate={isHovered ? { x: 10 } : { x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
        </motion.div>

        <Link 
          to="/contact" 
          className="group/link inline-flex items-center"
        >
          <motion.span 
            className="relative text-blue-600 font-semibold"
            animate={isHovered ? { x: 5 } : { x: 0 }}
          >
            Saiba Mais
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover/link:w-full transition-all duration-300" />
          </motion.span>
          <motion.span
            animate={isHovered ? { x: 10, scale: 1.2 } : { x: 0, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.span>
        </Link>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-2 -right-2 w-4 h-4 bg-blue-500/20 rounded-full blur-sm" />
      <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-500/20 rounded-full blur-sm" />
    </motion.div>
  );
};

// Tech Stack Icons Animation
const TechStackIcons = () => (
  <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6">
    {[Code, Cpu, Globe, Sparkles].map((Icon, index) => (
      <FloatingElement key={index} delay={index * 1.5}>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 + index * 0.2 }}
          className="w-14 h-14 bg-white/10 backdrop-blur-xl rounded-xl flex items-center justify-center border border-white/20 shadow-lg"
        >
          <Icon className="h-6 w-6 text-white/90" />
        </motion.div>
      </FloatingElement>
    ))}
  </div>
);

// Main Component
const Services = () => {
  const { t } = useTranslation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <GlowingBackground />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 opacity-95" />
          <motion.div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              y: scrollY * 0.5
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-8 text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t('servicesPage.heroTitle')}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t('servicesPage.heroSubtitle')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Tech Community Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 rounded-[2.5rem] shadow-2xl border border-white/10"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] opacity-10 mix-blend-overlay" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-blue-800/50 background-animate" />
          
          <div className="relative p-12 md:p-16">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="flex-1 text-center md:text-left">
                <FloatingElement>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-white/10 backdrop-blur-xl rounded-2xl p-4 mb-8 border border-white/20"
                  >
                    <UsersRound className="h-12 w-12 text-white" />
                  </motion.div>
                </FloatingElement>
                
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {t('servicesPage.community.title')}
                </h3>
                <p className="text-xl text-blue-100/90 mb-8 leading-relaxed max-w-2xl">
                  {t('servicesPage.community.description')}
                </p>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://madil-carreiras.circle.so/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white/90 backdrop-blur-xl text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  {t('servicesPage.community.buttonText')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.a>
              </div>

              <div className="hidden md:block relative">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                    alt="Tech Community"
                    className="w-[450px] h-80 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-900/50 to-transparent" />
                </motion.div>
                
                {/* Decorative Elements */}
                <motion.div 
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-400/20 backdrop-blur-xl rounded-2xl z-0"
                />
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/20 backdrop-blur-xl rounded-2xl z-0"
                />
              </div>
            </div>
          </div>
          
          <TechStackIcons />
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Services;