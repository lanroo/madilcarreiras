import { motion } from 'framer-motion';
import { Building2, Users, Trophy, Target } from 'lucide-react';

const PartnerCard = ({ name, logo, description, industry }: {
  name: string;
  logo: string;
  description: string;
  industry: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <img
      src={logo}
      alt={name}
      className="h-12 object-contain mb-4"
    />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-blue-600 text-sm mb-3">{industry}</p>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Partners = () => {
  const featuredPartners = [
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/200px-Microsoft_logo.svg.png",
      industry: "Technology",
      description: "Long-term partnership delivering top tech talent and leadership solutions."
    },
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/200px-Google_2015_logo.svg.png",
      industry: "Technology",
      description: "Collaborative recruitment for innovative roles and specialized positions."
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/200px-Amazon_logo.svg.png",
      industry: "E-commerce & Technology",
      description: "Strategic talent acquisition for rapid growth and expansion."
    },
    {
      name: "Meta",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/200px-Meta_Platforms_Inc._logo.svg.png",
      industry: "Social Media & Technology",
      description: "Executive search and specialized recruitment for cutting-edge projects."
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/200px-Apple_logo_black.svg.png",
      industry: "Technology & Consumer Electronics",
      description: "Premium talent solutions for design and engineering excellence."
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/200px-IBM_logo.svg.png",
      industry: "Technology & Consulting",
      description: "Enterprise-level recruitment and workforce transformation."
    }
  ];

  const stats = [
    {
      icon: Building2,
      value: "500+",
      label: "Partner Companies"
    },
    {
      icon: Users,
      value: "10,000+",
      label: "Successful Placements"
    },
    {
      icon: Trophy,
      value: "98%",
      label: "Client Satisfaction"
    },
    {
      icon: Target,
      value: "15+",
      label: "Industries Served"
    }
  ];

  return (
    <div className="pt-20 space-y-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Global Partners
            </h1>
            <p className="text-xl mb-8">
              Collaborating with industry leaders to deliver exceptional talent solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <p className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Partners Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Partners</h2>
          <p className="text-xl text-gray-600">
            Working with the world's most innovative companies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPartners.map((partner, index) => (
            <PartnerCard key={index} {...partner} />
          ))}
        </div>
      </section>

      {/* Industry Coverage */}
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-600">
              Expertise across diverse sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Technology",
              "Finance",
              "Healthcare",
              "Manufacturing",
              "Retail",
              "Energy",
              "Education",
              "Consulting"
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-4 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="font-medium text-gray-800">{industry}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;