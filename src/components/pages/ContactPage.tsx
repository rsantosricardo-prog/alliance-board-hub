import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Mensagem Enviada com Sucesso',
      description: 'Obrigado por entrar em contato. Retornaremos em breve.',
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      organization: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="w-full bg-primary py-20 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="font-heading text-5xl lg:text-7xl text-primary-foreground mb-6">
              Entre em Contato
            </h1>
            <p className="font-paragraph text-lg lg:text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Conecte-se conosco para saber mais sobre governança corporativa ética e sustentável, ou para explorar oportunidades de parceria.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Contact Form and Info Section */}
      <section className="w-full py-20 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-secondary mb-8">
                Envie-nos uma Mensagem
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block font-paragraph text-base text-secondary mb-2">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="João Silva"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block font-paragraph text-base text-secondary mb-2">
                    Endereço de E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="joao@exemplo.com"
                  />
                </div>

                {/* Organization */}
                <div>
                  <label htmlFor="organization" className="block font-paragraph text-base text-secondary mb-2">
                    Organização
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Sua Empresa"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block font-paragraph text-base text-secondary mb-2">
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block font-paragraph text-base text-secondary mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 font-paragraph text-base bg-white border border-secondary/20 rounded-lg focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Conte-nos mais sobre sua consulta..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 font-paragraph text-base bg-secondary text-secondary-foreground px-8 py-4 rounded-full hover:bg-secondary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Enviar Mensagem
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-3xl lg:text-4xl text-secondary mb-8">
                Informações de Contato
              </h2>

              <div className="space-y-8 mb-12">
                {/* Email */}
                <div className="flex items-start gap-4">

                  <div>

                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">

                  <div>

                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl text-secondary mb-2">Escritório</h3>
                    <p className="font-paragraph text-base text-secondary/80">
                      Rua Funchal, 538<br />
                      Itaim Bibi, São Paulo - SP<br />
                      04548-060 / Eixo Faria Lima
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-80 rounded-lg overflow-hidden border border-secondary/20 mb-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.7446788891!2d-46.68504!3d-23.5868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce574d7c4e5c8d%3A0x7e5c5e5c5e5c5e5c!2sRua%20Funchal%2C%20538%20-%20Itaim%20Bibi%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004548-060!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do Escritório"
                />
              </div>

              {/* Additional Info Box */}
              <div className="bg-secondary text-secondary-foreground p-8 rounded-lg">
                <h3 className="font-heading text-2xl mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 font-paragraph text-base">
                  <p>Segunda - Sexta: 9:00 - 18:00</p>

                </div>
                <div className="mt-6 pt-6 border-t border-secondary-foreground/20">
                  <p className="font-paragraph text-sm text-secondary-foreground/80">
                    Normalmente respondemos a todas as consultas dentro de 24 horas durante dias úteis.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Map or Additional CTA Section */}
      <section className="w-full py-20 lg:py-32 bg-secondary">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-heading text-4xl lg:text-5xl text-secondary-foreground mb-6">
              Junte-se à Nossa Rede
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto mb-8">
              Faça parte de uma comunidade dedicada a promover práticas de governança corporativa éticas e sustentáveis.
            </p>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
