import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';

export default function LinkTreePage() {
  const links = [
    {
      title: 'SM Board',
      subtitle: 'Ecossistema',
      items: [
        { label: 'Website', url: 'https://smboard.com.br', icon: '🌐' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/company/smboard/', icon: '💼' },
        { label: 'Instagram', url: 'https://www.instagram.com/smartmoneyboard', icon: '📸' },
        { label: 'WhatsApp', url: 'https://api.whatsapp.com/send/?phone=5511917198570&text&type=phone_number&app_absent=0&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGn_7TqW8TndODWe1rmz5vJ2M5TZt2g6rgcG3g-v-wCTyMTdz1VETjLC4eJFsE_aem_fbNvAHFRR3DKK7hE4xS0fA', icon: '💬' },
      ]
    },
    {
      title: 'eDue',
      subtitle: 'Equity Due Diligence | IA',
      items: [
        { label: 'Plataforma', url: 'https://duediligence.ia.br/', icon: '🚀' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/company/edue-ia/', icon: '💼' },
        { label: 'Instagram', url: 'https://www.instagram.com/eduediligence', icon: '📸' },
      ]
    },
    {
      title: 'Marcela Silveira',
      subtitle: 'Fundadora',
      items: [
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/marcelasilveira', icon: '💼' },
        { label: 'Instagram', url: 'https://www.instagram.com/marcela_silveira_sm', icon: '📸' },
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
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black flex flex-col items-center justify-center px-4 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="font-heading text-5xl md:text-6xl text-white mb-2">SM Board</h1>
        <p className="font-paragraph text-lg text-gray-400">Ecossistema de Inovação</p>
      </motion.div>

      {/* Links Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-2xl space-y-8"
      >
        {links.map((section, sectionIdx) => (
          <motion.div key={sectionIdx} variants={itemVariants} className="space-y-3">
            {/* Section Header */}
            <div className="text-center mb-4">
              <h2 className="font-heading text-2xl text-white mb-1">{section.title}</h2>
              <p className="font-paragraph text-sm text-gray-500">{section.subtitle}</p>
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {section.items.map((link, linkIdx) => (
                <motion.a
                  key={linkIdx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  <span className="text-xl">{link.icon}</span>
                  <span className="font-paragraph text-white font-medium">{link.label}</span>
                  <span className="absolute right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            {sectionIdx < links.length - 1 && (
              <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent my-6" />
            )}
          </motion.div>
        ))}
      </motion.div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <p className="font-paragraph text-sm text-gray-600">
          © 2026 SM Board. Todos os direitos reservados.
        </p>
      </motion.div>
    </div>
  );
}
