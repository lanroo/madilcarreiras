import { motion } from "framer-motion";
import { ArrowRight, Target, Users, Trophy, Building2, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PartnersSlider from "../components/PartnersSlider";

const Home = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      icon: Users,
      value: "10,000+",
      label: t("home.achievements.successfulPlacements"),
    },
    {
      icon: Building2,
      value: "500+",
      label: t("home.achievements.partnerCompanies"),
    },
    {
      icon: Trophy,
      value: "98%",
      label: t("home.achievements.clientSatisfaction"),
    },
    {
      icon: BarChart,
      value: "15+",
      label: t("home.achievements.yearsExperience"),
    },
  ];

  const solutions = [
    {
      icon: Target,
      title: t("home.solutions.executiveSearch.title"),
      description: t("home.solutions.executiveSearch.description"),
    },
    {
      icon: Users,
      title: t("home.solutions.professionalRecruitment.title"),
      description: t("home.solutions.professionalRecruitment.description"),
    },
    {
      icon: BarChart,
      title: t("home.solutions.careerDevelopment.title"),
      description: t("home.solutions.careerDevelopment.description"),
    },
  ];

  return (
    <div className="pt-20 space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
  <video
    src="https://i.gifer.com/J4x.mp4"
    autoPlay
    muted
    loop
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  ></video>

  <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
        {t("home.heroTitle")}
      </h1>
      <p className="text-lg md:text-2xl mx-auto text-white drop-shadow-lg">
        {t("home.heroSubtitle")}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <Link
          to="/contact"
          className="bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-200 flex items-center justify-center"
        >
          {t("home.getStarted")}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
        <Link
          to="/services"
          className="border-2 border-white text-white px-8 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition-all duration-200"
        >
          {t("home.ourServices")}
        </Link>
      </div>
    </motion.div>
  </div>
</section>


      {/* Partners Slider */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl font-semibold text-gray-900">
              {t("home.trustedBy")}
            </h2>
          </motion.div>
          <PartnersSlider />
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {t("home.impactTitle")}
            </h2>
            <p className="text-xl text-gray-600">{t("home.impactSubtitle")}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-lg shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
              >
                <achievement.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <p className="text-4xl font-bold text-gray-900 mb-2">
                  {achievement.value}
                </p>
                <p className="text-gray-600 font-medium text-lg">
                  {achievement.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {t("home.solutionsTitle")}
            </h2>
            <p className="text-xl text-gray-600">
              {t("home.solutionsSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <solution.icon className="h-14 w-14 text-blue-600 mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-lg shadow-2xl p-12 text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">
              {t("home.ctaTitle")}
            </h2>
            <p className="text-lg mb-8">{t("home.ctaSubtitle")}</p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition-all duration-300"
            >
              {t("home.schedule")}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
