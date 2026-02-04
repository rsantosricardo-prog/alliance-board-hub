import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Headphones, Play, Share2, ArrowRight, Users, Briefcase, Target } from 'lucide-react';
import { Image } from '@/components/ui/image';

export default function PodcastPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: '-100px' }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.2 },
    viewport: { once: true, margin: '-100px' }
  };

  const topics = [
    { title: 'Governança Corporativa', description: 'Estruturas, processos e melhores práticas que sustentam organizações' },
    { title: 'Conselhos de Administração', description: 'Composição, responsabilidades e impacto na performance' },
    { title: 'Comitês Especializados', description: 'Auditoria, riscos, remuneração e sustentabilidade' },
    { title: 'Ética e Compliance', description: 'Integridade, transparência e conformidade regulatória' },
    { title: 'Estratégia Corporativa', description: 'Visão de longo prazo e criação de valor sustentável' },
    { title: 'Tomada de Decisão', description: 'Processos, dilemas e responsabilidade compartilhada' }
  ];

  const entrepreneurialTopics = [
    { icon: Briefcase, title: 'Desafios do Empresário', description: 'Como o conselho pode potencializar a visão e estratégia do empresário' },
    { icon: Users, title: 'Dinâmica Conselho-Empresário', description: 'Construindo relacionamentos produtivos e confiança mútua' },
    { icon: Target, title: 'Criação de Valor', description: 'Alinhamento entre objetivos empresariais e governança' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-primary via-secondary to-primary py-20 md:py-32">
        <div className="max-w-[100rem] mx-auto px-4 md:px-8">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Left Content */}
            <div className="flex-1 text-white">
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Headphones className="w-8 h-8 text-accent" />
                <span className="text-accent font-semibold text-sm tracking-widest uppercase">Novo Podcast</span>
              </motion.div>

              <motion.h1
                className="font-heading text-5xl md:text-7xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                Se Conselho Fosse Bom
              </motion.h1>

              <motion.p
                className="text-2xl md:text-3xl text-accent font-semibold mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Empresário e Conselho em Diálogo
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-gray-100 mb-8 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.6 }}
              >
                O poder da decisão colegiada
              </motion.p>

              <motion.p
                className="text-lg text-gray-100 mb-8 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                Um espaço de reflexão prática, provocativa e educativa sobre o papel transformador dos conselhos, comitês e da governança na sustentabilidade e performance das organizações. Conversas profundas entre empresários e conselheiros que exploram como construir relacionamentos produtivos e criar valor compartilhado.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <button className="bg-accent text-primary hover:bg-opacity-90 px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
                  <Play className="w-5 h-5" />
                  Ouvir Episódios
                </button>
                <button className="border-2 border-accent text-accent hover:bg-accent hover:text-primary px-8 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                  <Share2 className="w-5 h-5" />
                  Compartilhar
                </button>
              </motion.div>
            </div>

            {/* Right Visual */}
            <motion.div
              className="flex-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-accent opacity-20 rounded-2xl blur-3xl"></div>
                <div className="relative bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
                  <div className="aspect-square bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                    <Headphones className="w-24 h-24 text-white opacity-80" />
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-white text-sm font-semibold">Disponível em todas as plataformas</p>
                    <p className="text-accent text-xs mt-2">Spotify • Apple Podcasts • YouTube</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Empresário e Conselho Connection Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-secondary to-primary">
        <div className="max-w-[100rem] mx-auto px-4 md:px-8">
          <motion.div
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              A Conexão Empresário e Conselho
            </h2>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Exploramos como empresários e conselheiros trabalham juntos para criar valor, tomar decisões estratégicas e construir organizações mais fortes e sustentáveis.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
          >
            {entrepreneurialTopics.map((topic, index) => {
              const Icon = topic.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-8 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300"
                  variants={fadeInUp}
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white text-center mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-gray-100 text-center leading-relaxed">
                    {topic.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Conceito Section */}
      <section className="w-full py-20 md:py-28 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-4 md:px-8">
          <motion.div
            className="max-w-4xl mx-auto"
            {...fadeInUp}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-8">
              O Conceito por Trás do Nome
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                <span className="font-semibold text-primary">"Se Conselho Fosse Bom"</span> não é apenas um título provocador — é um convite à reflexão. O nome encapsula uma verdade fundamental: conselhos bem constituídos, diversificados e engajados são pilares essenciais para organizações que prosperam.
              </p>

              <p>
                Neste podcast, exploramos como a <span className="font-semibold text-primary">decisão colegiada</span> — quando bem estruturada — transcende a simples agregação de opiniões. É a síntese de perspectivas distintas, a confrontação respeitosa de ideias, a responsabilidade compartilhada e o compromisso com resultados sustentáveis.
              </p>

              <p>
                Especialmente, focamos na <span className="font-semibold text-primary">relação dinâmica entre empresário e conselho</span>: Como o empresário pode se beneficiar da sabedoria coletiva? Como o conselho pode potencializar a visão empreendedora? Como construir confiança e comunicação efetiva? Como transformar potenciais conflitos em oportunidades de crescimento?
              </p>

              <p>
                Abordamos os desafios reais: Como construir conselhos verdadeiramente diversos? Como equilibrar autonomia com accountability? Como transformar conflito construtivo em decisões estratégicas? Como garantir que a governança não seja apenas compliance, mas catalisadora de valor?
              </p>

              <p>
                Cada episódio é uma conversa profunda com líderes, especialistas e pensadores que vivem essas questões. Sem jargões excessivos, mas com profundidade técnica. Provocativo, mas inspirador. Prático, mas reflexivo.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Temas Abordados Section */}
      <section className="w-full py-20 md:py-28 bg-white">
        <div className="max-w-[100rem] mx-auto px-4 md:px-8">
          <motion.div
            className="mb-16"
            {...fadeInUp}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
              Temas Que Exploramos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Uma cobertura abrangente dos pilares que sustentam a governança corporativa moderna e a relação produtiva entre empresário e conselho
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
          >
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:border-accent"
                variants={fadeInUp}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent bg-opacity-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:bg-opacity-20 transition-all duration-300">
                    <ArrowRight className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-primary mb-2">
                      {topic.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {topic.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Por Que Ouvir Section */}
      <section className="w-full py-20 md:py-28 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-[100rem] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              className="text-white"
              {...fadeInUp}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-8">
                Por Que Ouvir?
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Reflexão Prática</h3>
                    <p className="text-gray-100">Insights aplicáveis imediatamente em suas decisões e estruturas de governança</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Vozes Autoridades</h3>
                    <p className="text-gray-100">Conversas com Empresários, Conselheiros, CEOs, especialistas em governança e líderes de pensamento</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Perspectivas Diversas</h3>
                    <p className="text-gray-100">Diferentes setores, contextos e desafios que enriquecem sua compreensão</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Comunidade Engajada</h3>
                    <p className="text-gray-100">Faça parte de uma rede de profissionais comprometidos com governança de excelência</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-12 border border-white border-opacity-20">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-accent mb-2">15+</div>
                    <p className="text-white text-lg">Episódios Planejados</p>
                  </div>
                  <div className="h-px bg-white bg-opacity-20"></div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-accent mb-2">30-45min</div>
                    <p className="text-white text-lg">Conversas Aprofundadas</p>
                  </div>
                  <div className="h-px bg-white bg-opacity-20"></div>
                  <div className="text-center">
                    <div className="text-5xl font-bold text-accent mb-2">Quinzenal</div>
                    <p className="text-white text-lg">Novos Episódios</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 md:py-28 bg-gray-50">
        <div className="max-w-[100rem] mx-auto px-4 md:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            {...fadeInUp}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-6">
              Pronto para Refletir?
            </h2>

            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Ouça os episódios, reflita sobre as questões que movem a governança corporativa, compartilhe suas perspectivas e faça parte de uma comunidade comprometida com decisões colegiadas de excelência.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-white hover:bg-secondary px-10 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105">
                <Play className="w-5 h-5" />
                Começar a Ouvir
              </button>
              <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-10 py-4 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300">
                <Share2 className="w-5 h-5" />
                Compartilhar com Colegas
              </button>
            </div>

            <p className="text-gray-600 text-sm mt-8">
              Disponível em Spotify, Apple Podcasts, YouTube e outras plataformas de streaming
            </p>
          </motion.div>
        </div>
      </section>

      {/* Keywords Section (SEO) */}
      <section className="w-full py-12 bg-white border-t border-gray-200">
        <div className="max-w-[100rem] mx-auto px-4 md:px-8">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              <span className="font-semibold">Palavras-chave:</span> Governança corporativa • Conselho de administração • Empresário • Decisão colegiada • Boas práticas de governança • Comitês especializados • Estratégia corporativa • Tomada de decisão • Compliance • Ética empresarial • Liderança estratégica • Relação empresário-conselho
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
