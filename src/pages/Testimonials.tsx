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
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechVision Inc.",
      content: "Madil helped us find exceptional talent that transformed our engineering team. Their understanding of our technical needs and company culture was impressive.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Michael Chen",
      role: "Director of Operations",
      company: "Global Solutions",
      content: "The career mentorship program provided invaluable guidance for my professional development. I highly recommend their services to anyone looking to advance their career.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Emily Rodriguez",
      role: "VP of HR",
      company: "Innovation Corp",
      content: "Working with Madil has significantly improved our hiring process. Their attention to detail and quick response time make them stand out from other recruiters.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "David Park",
      role: "Senior Developer",
      company: "CodeCraft",
      content: "Thanks to Madil's career coaching, I successfully transitioned into a senior role. Their insights and support were instrumental in my career growth.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "Lisa Thompson",
      role: "CEO",
      company: "StartUp Ventures",
      content: "Madil's executive search services helped us build a world-class leadership team. Their network and professional approach exceeded our expectations.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=150&h=150"
    },
    {
      name: "James Wilson",
      role: "Product Manager",
      company: "Future Tech",
      content: "The personalized approach and deep industry knowledge made my job search experience exceptional. I found my dream role through Madil.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150"
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