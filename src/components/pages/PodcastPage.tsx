import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Headphones, Clock, Bell } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function PodcastPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: '-100px' }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section - Coming Soon */}
      <section className="w-full bg-gradient-to-br from-primary via-secondary to-primary py-32 md:py-48">
        <div className="max-w-[100rem] mx-auto px-4 md:px-8">
          <motion.div
            className="flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-24 h-24 bg-accent bg-opacity-20 rounded-full flex items-center justify-center">
                <Headphones className="w-12 h-12 text-accent" />
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              className="flex items-center gap-2 mb-6 bg-white bg-opacity-10 backdrop-blur-md rounded-full px-6 py-2 border border-white border-opacity-20"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Clock className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm tracking-widest uppercase">Lançamento Em Breve</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Se Conselho Fosse Bom
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-2xl md:text-3xl text-accent font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Empresário e Conselho em Diálogo
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-100 mb-12 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Um espaço de reflexão prática, provocativa e educativa sobre o papel transformador dos conselhos, comitês e da governança na sustentabilidade e performance das organizações.
            </motion.p>

            {/* Coming Soon Message */}
            <motion.div
              className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-12 border border-white border-opacity-20 max-w-2xl w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <div className="space-y-6">
                <div>
                  <p className="text-white text-2xl font-bold mb-2">Episódios em Produção</p>
                  <p className="text-gray-100 text-lg">
                    Estamos preparando conversas profundas e inspiradoras com líderes, especialistas e pensadores sobre governança corporativa.
                  </p>
                </div>

                <div className="h-px bg-white bg-opacity-20"></div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">15+ Episódios Planejados</p>
                      <p className="text-gray-100 text-sm">Conversas aprofundadas de 30-45 minutos</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Lançamento Quinzenal</p>
                      <p className="text-gray-100 text-sm">Novos episódios a cada duas semanas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-primary font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">Todas as Plataformas</p>
                      <p className="text-gray-100 text-sm">Spotify, Apple Podcasts, YouTube e mais</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-white bg-opacity-20"></div>

                <button className="w-full bg-accent text-primary hover:bg-opacity-90 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
                  <Bell className="w-5 h-5" />
                  Notifique-me Quando Lançar
                </button>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.p
              className="text-gray-100 text-sm mt-12 max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Fique atento para o lançamento do primeiro episódio. Conversas que exploram como construir relacionamentos produtivos entre empresário e conselho, decisões colegiadas de excelência e governança que cria valor.
            </motion.p>
          </motion.div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
