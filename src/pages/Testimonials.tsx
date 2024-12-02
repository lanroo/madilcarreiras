import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, role, company, content, image }: {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white p-6 rounded-lg shadow-lg"
  >
    <div className="flex items-center mb-4">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mr-4"
      />
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <p className="text-blue-600">{company}</p>
      </div>
    </div>
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-600">{content}</p>
  </motion.div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Luiz",
      role: "CTO",
      company: "TechVision Inc.",
      content: "Madil helped us find exceptional talent that transformed our engineering team. Their understanding of our technical needs and company culture was impressive.",
      image: "https://st.depositphotos.com/1032561/1364/i/450/depositphotos_13647537-stock-photo-close-up-portrait-of-a.jpg"
    },
    {
      name: "Michael Chen",
      role: "Director of Operations",
      company: "Global Solutions",
      content: "The career mentorship program provided invaluable guidance for my professional development. I highly recommend their services to anyone looking to advance their career.",
      image: "https://img.freepik.com/free-photo/handsome-young-male-walking-street_158595-4694.jpg?t=st=1733170412~exp=1733174012~hmac=96799a2acb0f59c150dad0fca33bf2b3f615aefdb51098fefb0d06600e8364a4&w=740"
    },
    {
      name: "Emily Rodriguez",
      role: "Frontend Pleno",
      company: "Innovation Corp",
      content: "Working with Madil has significantly improved our hiring process. Their attention to detail and quick response time make them stand out from other recruiters.",
      image: "https://img.freepik.com/free-photo/woman-retoucher-looking-camera-smiling-working-creative-media-agency-standing-front-webc_482257-3427.jpg?t=st=1733170462~exp=1733174062~hmac=33f7279e12a358c526d3b72ea2088af7ad0aadeee3621a9cf405d90a34dbf9bb&w=740"
    },
    {
      name: "Leah Park",
      role: "Senior Developer",
      company: "CodeCraft",
      content: "Thanks to Madil's career coaching, I successfully transitioned into a senior role. Their insights and support were instrumental in my career growth.",
      image: "https://img.freepik.com/free-photo/close-up-pleasant-curly-dark-hair-female-customer-support-manager-smiling-broadly-ready-help-express-interest-happiness-grinning-white-teeth-delighted-have-positive-conversation-studio-background_176420-34934.jpg?t=st=1733170301~exp=1733173901~hmac=5e39b83b9fd3b149c79551e8a33cec4abce987c450ccf1b8b1ddb689044fc379&w=740"
    },
    {
      name: "Lisa Thompson",
      role: "CEO",
      company: "StartUp Ventures",
      content: "Madil's executive search services helped us build a world-class leadership team. Their network and professional approach exceeded our expectations.",
      image: "https://img.freepik.com/free-photo/confident-cheerful-young-businesswoman_1262-20881.jpg?t=st=1733170556~exp=1733174156~hmac=f6a5801f83ed49970b6585514ef1d475735edc5ab279624739d1e46604d59dff&w=740"
    },
    {
      name: "James Wilson",
      role: "Product Manager",
      company: "Future Tech",
      content: "The personalized approach and deep industry knowledge made my job search experience exceptional. I found my dream role through Madil.",
      image: "https://img.freepik.com/free-photo/high-angle-buisness-man_23-2148479585.jpg?t=st=1733170482~exp=1733174082~hmac=836341a17d5b65b1fda6412b1e466a756e795c5aa55092ca930dce151a261770&w=900"
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-gray-600">
              Hear from professionals and organizations who have transformed their careers and teams with Madil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;