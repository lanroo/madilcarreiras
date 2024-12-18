import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Target, Users, Trophy, Building2, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PartnersSlider from "../components/PartnersSlider";
import BouncingIcon from "../components/BouncingIcon";

const Home = () => {
  const { t } = useTranslation();

  
  const achievements = [
    {
      icon: Users,
      value: "2,000+",
      label: t("home.achievements.successfulPlacements"),
    },
    {
      icon: Building2,
      value: "40+",
      label: t("home.achievements.partnerCompanies"),
    },
    {
      icon: Trophy,
      value: "98%",
      label: t("home.achievements.clientSatisfaction"),
    },
    {
      icon: BarChart,
      value: "7+",
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
    <AnimatePresence>
      <div className="pt-20 space-y-24">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <video
            src="https://i.gifer.com/J4x.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-2xl tracking-tight">
                {t("home.heroTitle")}
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                {t("home.heroSubtitle")}
              </p>
            </motion.div>
          </div>


          <BouncingIcon />
          </section>
          {/* <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-16 left-8/2 transform -translate-x-[85%]"
          >
            <div className="flex items-center justify-center h-12 w-12">
              <ChevronDown className="h-8 w-8 text-white animate-bounce" />
            </div>
          </motion.div> */}

        {/* Partners Section */}
        <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {t("home.trustedBy")}
              </h2>
              <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full" />
            </motion.div>
            <PartnersSlider />
          </div>
        </section>

       {/* Achievements Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
                {t("home.impactTitle")}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t("home.impactSubtitle")}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Background Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl transform transition-transform group-hover:scale-105 opacity-0 group-hover:opacity-100 duration-300 shadow-lg pointer-events-none" />
                  <div className="relative z-10 p-8 bg-white rounded-2xl shadow-xl group-hover:shadow-2xl group-hover:translate-y-[-4px] transition-all duration-300 flex flex-col items-center justify-center h-64 w-full">
                    <achievement.icon className="h-16 w-16 text-blue-600 group-hover:text-blue-400 mb-6 transition-colors duration-300" />
                    <p className="text-5xl font-bold text-gray-900 mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {achievement.value}
                    </p>
                    <p className="text-gray-600 font-medium text-lg group-hover:text-blue-400 transition-colors duration-300 text-center">
                      {achievement.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


      {/* Solutions Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
              {t("home.solutionsTitle")}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t("home.solutionsSubtitle")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-80 flex flex-col items-center justify-between">
                  <div className="relative w-20 h-20 mb-8 mx-auto">
                    <div className="absolute inset-0 bg-blue-100 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-blue-50 rounded-2xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300" />
                    <div className="relative flex items-center justify-center h-full">
                      <solution.icon className="h-12 w-12 text-blue-600" />
                    </div>
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                    {solution.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-gray-600 text-lg leading-relaxed text-center">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


        {/* CTA Section */}
        <section className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transform -skew-y-6" />
              <div className="relative bg-gradient-to-r from-blue-700 to-blue-500 rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-3xl" />
                <div className="relative px-8 py-24 sm:px-16 text-center">
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
                    {t("home.ctaTitle")}
                  </h2>
                  <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
                    {t("home.ctaSubtitle")}
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-600 bg-white rounded-full hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    {t("home.schedule")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </AnimatePresence>
  );
};

export default Home;