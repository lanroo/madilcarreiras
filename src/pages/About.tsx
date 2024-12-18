import { motion } from "framer-motion";
import { Award, Clock, Globe, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-[center_top] text-white py-32"
        style={{
          backgroundImage: "url('https://blog-forbusiness.vagas.com.br/wp-content/uploads/2022/06/rh-tech.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-blue-600/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {t("about.heroTitle")}
            </h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto">
              {t("about.heroSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-fixed py-20"
        style={{
          backgroundImage: "url('https://www.comececomopedireito.com.br/blog/wp-content/uploads/2022/08/hr-tech-1280x530.jpg')",
        }}
      >
        {/* Overlay escura */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Conteúdo principal */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "500+", label: t("about.stats.successfulPlacements") },
            { value: "95%", label: t("about.stats.retentionRate") },
            { value: "200+", label: t("about.stats.partnerCompanies") },
            { value: "7+", label: t("about.stats.yearsExperience") },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 text-center hover:scale-105 hover:shadow-2xl transition-transform duration-300"
            >
              <p className="text-5xl font-bold text-blue-600 mb-3">{stat.value}</p>
              <p className="text-gray-800 font-medium text-lg">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>


      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {t("about.values.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("about.values.subtitle")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                icon: <Award className="h-14 w-14 text-blue-600 mx-auto" />, 
                title: t("about.values.excellence.title"),
                description: t("about.values.excellence.description"),
              },
              {
                icon: <Users className="h-14 w-14 text-blue-600 mx-auto" />, 
                title: t("about.values.partnership.title"),
                description: t("about.values.partnership.description"),
              },
              {
                icon: <Globe className="h-14 w-14 text-blue-600 mx-auto" />, 
                title: t("about.values.innovation.title"),
                description: t("about.values.innovation.description"),
              },
              {
                icon: <Clock className="h-14 w-14 text-blue-600 mx-auto" />, 
                title: t("about.values.efficiency.title"),
                description: t("about.values.efficiency.description"),
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {value.icon}
                <h3 className="text-xl font-semibold text-gray-900 mt-4 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
