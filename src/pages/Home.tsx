import { motion } from 'framer-motion';
import { ArrowRight, Target, Users, Trophy, Building2, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import PartnersSlider from '../components/PartnersSlider';

const Home = () => {
  const achievements = [
    {
      icon: Users,
      value: "10,000+",
      label: "Successful Placements",
    },
    {
      icon: Building2,
      value: "500+",
      label: "Partner Companies",
    },
    {
      icon: Trophy,
      value: "98%",
      label: "Client Satisfaction",
    },
    {
      icon: BarChart,
      value: "15+",
      label: "Years Experience",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Your Gateway to Madil Talent & Career Growth
            </h1>
            <p className="text-xl mb-8">
              Madil connects industry-leading companies with exceptional talent through strategic recruitment and career development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Our Services
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
            <h2 className="text-2xl font-semibold text-gray-900">Trusted by Industry Leaders</h2>
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
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl text-gray-600">
            Delivering exceptional results through strategic talent solutions
          </p>
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

      {/* Featured Services */}
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Comprehensive Solutions</h2>
            <p className="text-xl text-gray-600">
              Tailored services to meet your talent needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Executive Search",
                description: "Strategic recruitment for senior leadership positions",
                icon: Target,
              },
              {
                title: "Professional Recruitment",
                description: "Talent acquisition across industries and roles",
                icon: Users,
              },
              {
                title: "Career Development",
                description: "Expert guidance for career advancement",
                icon: BarChart,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <service.icon className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
                >
                  Learn More →
                </Link>
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
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Career or Team?</h2>
            <p className="text-xl mb-8">
              Let's discuss how Madil can help you achieve your goals
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
