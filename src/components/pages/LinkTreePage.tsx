import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { Globe, Linkedin, Instagram, MessageCircle, Rocket, Youtube } from 'lucide-react';

export default function LinkTreePage() {
  const links = [
    {
      title: 'Marcela C. Silveira',
      subtitle: 'Fundadora',
      items: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/marcelasilveira', icon: Linkedin },
        { label: 'Instagram', url: 'https://www.instagram.com/marcela_silveira_sm', icon: Instagram },
        { label: 'WhatsApp', url: 'https://api.whatsapp.com/send/?phone=5531920038573&text=Quero+agendar+uma+demonstração+do+eDUE&type=phone_number&app_absent=0', icon: MessageCircle },
      ]
    },
    {
      title: 'SM Board',
      subtitle: 'Ecossistema',
      items: [
        { label: 'Website', url: 'https://smboard.com.br', icon: Globe },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/company/smboard/', icon: Linkedin },
        { label: 'Instagram', url: 'https://www.instagram.com/smartmoneyboard', icon: Instagram },
        { label: 'WhatsApp', url: 'https://api.whatsapp.com/send/?phone=5511917198570&text=Quero+agendar+uma+demonstração+do+eDUE&type=phone_number&app_absent=0', icon: MessageCircle },
      ]
    },
    {
      title: 'eDue',
      subtitle: 'Equity Due Diligence | IA',
      items: [
        { label: 'Plataforma', url: 'https://duediligence.ia.br/', icon: Rocket },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/company/edue-ia/', icon: Linkedin },
        { label: 'Instagram', url: 'https://www.instagram.com/eduediligence', icon: Instagram },
        { label: 'YouTube', url: 'https://www.youtube.com/channel/UC_5nAYfzH7COzARC4GT0TpQ', icon: Youtube },
      ]
    },
    {
      title: 'Target Skin Brasil',
      subtitle: "Prevenção ao Câncer de Pele",
      items: [
        { label: 'Website', url: 'https://targetskinbrasil.com.br', icon: Globe },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/company/target-skin-brasil/', icon: Linkedin },
      ]
    },
    {
      title: "Ânima Bruta",
      subtitle: "Arte e Decoração",
      items: [
        { label: 'Website', url: 'https://www.animabruta.com', icon: Globe },
        { label: 'Instagram', url: 'https://www.instagram.com/anima_bruta/', icon: Instagram },
      ]
    },
    {
      title: 'M.Leon',
      subtitle: "Diamonds",
      items: [
        { label: 'Website', url: 'https://mleon.com.br', icon: Globe },
        { label: 'Instagram', url: 'https://www.instagram.com/mleon_official', icon: Instagram },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900 flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-slate-800/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-slate-800/20 to-transparent rounded-full blur-3xl" />
      </div>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 relative z-10"
      >
        <h1 className="font-heading text-5xl md:text-6xl text-white mb-2">Cartão Virtual</h1>
        <p className="font-paragraph text-lg text-gray-300">Prazer nos conectar</p>
      </motion.div>
      {/* Links Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl space-y-8 relative z-10"
      >
        {links.map((section, sectionIdx) => (
          <motion.div key={sectionIdx} variants={itemVariants} className="space-y-3">
            {/* Section Header */}
            <div className="text-center mb-4">
              <h2 className="font-heading text-2xl mb-1 text-primary">{section.title}</h2>
              <p className="font-paragraph text-sm text-gray-400">{section.subtitle}</p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.items.map((link, linkIdx) => {
                const IconComponent = link.icon;
                return (
                  <motion.a
                    key={linkIdx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-6 py-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80 hover:from-slate-700/90 hover:to-slate-800/90 rounded-xl border border-slate-700/50 hover:border-slate-600 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer backdrop-blur-sm"
                  >
                    <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                    <span className="font-paragraph text-white font-medium">{link.label}</span>
                    <span className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-gray-400">→</span>
                  </motion.a>
                );
              })}
            </div>

            {/* Divider */}
            {sectionIdx < links.length - 1 && (
              <div className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent my-6" />
            )}
          </motion.div>
        ))}
      </motion.div>
      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 text-center relative z-10"
      >
        <p className="font-paragraph text-sm text-gray-500">© 2026.  Todos os direitos reservados.</p>
      </motion.div>
    </div>
  );
}
