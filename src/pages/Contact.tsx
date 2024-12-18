import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const ContactInfo = ({ icon: Icon, title, content }: { icon: any; title: string; content: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <div className="flex items-center space-x-4">
      <div className="bg-blue-500/20 p-4 rounded-xl">
        <Icon className="h-8 w-8 text-blue-600" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  </motion.div>
);

const Contact = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Pessoa Física',
    company: '',
    message: '',
  });

  const [status, setStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); 
      setStatus('success');
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isPortuguese = i18n.language.startsWith('pt'); 

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] -top-40 -left-40 bg-blue-500/20 rounded-full blur-[150px] animate-pulse" />
      <div className="absolute w-[400px] h-[400px] bottom-10 -right-20 bg-purple-500/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      {/* Hero Section */}
      <section className="relative py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">{t('contactPage.heroTitle')}</h1>
          <p className="text-lg text-gray-600 mt-4">{t('contactPage.heroSubtitle')}</p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <ContactInfo icon={Phone} title={t('contactPage.phone')} content="+55 51 9245-1356" />
            <ContactInfo icon={Mail} title={t('contactPage.email')} content="contact@madil.com" />
            <ContactInfo icon={MapPin} title={t('contactPage.office')} content="123 Business Ave, Suite 400, New York, NY 10001" />
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-xl backdrop-blur-xl space-y-6"
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4"
              >
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                <h2 className="text-2xl font-bold text-gray-900">Mensagem enviada com sucesso!</h2>
                <p className="text-gray-600">Obrigado pelo seu contato. Em breve retornaremos.</p>
              </motion.div>
            ) : status === 'error' ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-4"
              >
                <XCircle className="h-16 w-16 text-red-500 mx-auto" />
                <h2 className="text-2xl font-bold text-gray-900">Erro ao enviar mensagem</h2>
                <p className="text-gray-600">Por favor, carregue a página e tente novamente.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Tipo de Pessoa */}
                {isPortuguese && (
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700">
                      Tipo de Contato
                    </label>
                    <select
                      id="type"
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                    >
                      <option value="Pessoa Física">Pessoa Física</option>
                      <option value="CNPJ">CNPJ</option>
                    </select>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Nome
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                </div>

                {/* Empresa (somente para CNPJ e em PT) */}
                {isPortuguese && formData.type === 'CNPJ' && (
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                      Empresa
                    </label>
                    <input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 mt-1 border rounded-lg focus:ring focus:ring-blue-300"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center"
                >
                  Enviar
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
