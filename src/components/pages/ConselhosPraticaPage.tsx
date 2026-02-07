import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConselhosPraticaPage() {
  const handleRegister = () => {
    // Replace with your actual registration link
    window.open('https://your-registration-link.com', '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: '0px 0px -100px 0px' }
  };

  const speakers = [
    {
      name: 'Marcela Silveira',
      bio: 'Executiva com atuação estratégica em gestão, inovação e tecnologia.',
      image: 'https://static.wixstatic.com/media/904ff8_2542461445a44912b686b84de8ee3600~mv2.png?originWidth=256&originHeight=256'
    },
    {
      name: 'Júlio Damião',
      bio: 'Conselheiro e advisor com sólida experiência em governança corporativa e leitura de cenários estratégicos.',
      image: 'https://static.wixstatic.com/media/904ff8_d92a59fd0aa8464084882df9463ef3db~mv2.png?originWidth=256&originHeight=256'
    },
    {
      name: 'Ricardo Santos',
      bio: 'Especialista em governança, risco e processos de Due Diligence, com foco em decisões de alto impacto.',
      image: 'https://static.wixstatic.com/media/904ff8_f4f65760e66a4a7dafc213051cb2fe16~mv2.png?originWidth=256&originHeight=256'
    }
  ];

  const agenda = [
    {
      time: '16:00 – 16:15',
      title: 'Welcome Coffee & Credenciamento',
      speaker: ''
    },
    {
      time: '16:15 – 16:40',
      title: 'O Futuro é Hoje – Tendências, Tecnologia, Inovação e Gestão',
      speaker: 'Marcela Silveira'
    },
    {
      time: '16:40 – 17:30',
      title: 'Cenários – Desafios atuais e futuros dos Conselhos',
      speaker: 'Júlio Damião'
    },
    {
      time: '17:30 – 18:00',
      title: 'A Arte da Tomada de Decisão – Acuracidade das Informações e Due Diligence',
      speaker: 'Ricardo Santos'
    },
    {
      time: '18:00 – 22:00',
      title: 'Happy Hour Executivo – jantar completo e bebidas à vontade',
      speaker: ''
    }
  ];

  const benefits = [
    'Discussões reais sobre decisão, governança, risco e inovação',
    'Conteúdo aplicável à atuação estratégica e em Conselhos',
    'Networking qualificado entre C-Levels, empresários e conselheiros',
    'Ambiente sofisticado, sem dispersão',
    'Evento com curadoria de público'
  ];

  const includes = [
    'Acesso a todo o conteúdo',
    'Welcome Coffee',
    'Happy Hour executivo com jantar e bebidas à vontade',
    'Networking qualificado'
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 pt-32 pb-20 overflow-hidden bg-gradient-to-b from-black via-black to-gray-950">
        <motion.div
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* Subtitle accent */}
          <motion.div
            className="mb-8 inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="font-paragraph text-sm tracking-widest text-gray-400 uppercase">Evento Executivo</p>
          </motion.div>

          {/* Main title */}
          <motion.h1
            className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            CONSELHOS<br />NA PRÁTICA
          </motion.h1>

          {/* Divider */}
          <motion.div
            className="w-16 h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-8"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />

          {/* Subtitle */}
          <motion.p
            className="font-paragraph text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Decisão, Governança e Inovação em Ambientes de Alta Complexidade
          </motion.p>

          {/* Support text */}
          <motion.p
            className="font-paragraph text-base text-gray-400 mb-16 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Um encontro presencial, exclusivo e cuidadosamente curado para C-Levels, empresários e conselheiros.
          </motion.p>

          {/* Event details */}
          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 mb-16 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-paragraph text-sm">LOCALIZAÇÃO</span>
              <span className="font-paragraph text-sm">Restaurante Pavino – Brooklin, SP</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-paragraph text-sm">DATA</span>
              <span className="font-paragraph text-sm">19 de março</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <span className="text-gray-500 font-paragraph text-sm">HORÁRIO</span>
              <span className="font-paragraph text-sm">16h às 22h</span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <Button
              size="lg"
              onClick={handleRegister}
              className="bg-white text-black hover:bg-gray-100 font-heading text-base px-10 py-3 rounded-sm transition-all duration-300"
            >
              Garanta sua cadeira – Vagas limitadas
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Posicionamento */}
      <section className="w-full bg-gray-950 px-4 py-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          {...fadeInUp}
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Este não é um evento aberto.
          </h2>
          <p className="font-paragraph text-lg text-gray-300 leading-relaxed">
            Este encontro foi desenhado para líderes que ocupam — ou se preparam para ocupar — posições reais de decisão. Aqui, conteúdo estratégico e networking acontecem entre pares, em um ambiente reservado, elegante e intencionalmente curado.
          </p>
        </motion.div>
      </section>

      {/* Por que participar */}
      <section className="w-full px-4 py-32">
        <motion.h2
          className="font-heading text-5xl md:text-6xl font-bold mb-20 text-center"
          {...fadeInUp}
        >
          Por que participar
        </motion.h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
              <p className="font-paragraph text-base text-gray-300 leading-relaxed">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section className="w-full bg-gray-950 px-4 py-32">
        <motion.h2
          className="font-heading text-5xl md:text-6xl font-bold mb-20 text-center"
          {...fadeInUp}
        >
          Agenda do Evento
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-0">
          {agenda.map((item, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-800 py-8 last:border-b-0"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="md:w-32 flex-shrink-0">
                  <p className="font-heading text-sm text-gray-400 tracking-wide">{item.time}</p>
                </div>
                <div className="flex-1">
                  <p className="font-heading text-lg text-white mb-2">{item.title}</p>
                  {item.speaker && (
                    <p className="font-paragraph text-sm text-gray-400">
                      {item.speaker}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Palestrantes */}
      <section className="w-full px-4 py-32">
        <motion.h2
          className="font-heading text-5xl md:text-6xl font-bold mb-20 text-center"
          {...fadeInUp}
        >
          Palestrantes
        </motion.h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <div className="mb-8 overflow-hidden">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{speaker.name}</h3>
              <p className="font-paragraph text-sm text-gray-400 leading-relaxed">{speaker.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Investimento */}
      <section className="w-full bg-gray-950 px-4 py-32">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          {...fadeInUp}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-12">
            Valor da cadeira – 1º lote
          </h2>
          <div className="mb-8">
            <p className="font-heading text-6xl md:text-7xl font-bold text-white mb-6">R$ 550,00</p>
            <p className="font-paragraph text-base text-gray-400">
              Evento presencial | Vagas extremamente limitadas | Curadoria de público
            </p>
          </div>
        </motion.div>
      </section>

      {/* O que está incluso */}
      <section className="w-full px-4 py-32">
        <motion.h2
          className="font-heading text-5xl md:text-6xl font-bold mb-20 text-center"
          {...fadeInUp}
        >
          O que está incluso
        </motion.h2>

        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
          {includes.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 flex-shrink-0"></div>
              <p className="font-paragraph text-base text-gray-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full bg-gradient-to-b from-gray-950 to-black px-4 py-32">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          {...fadeInUp}
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-12 leading-tight">
            Este não é um evento para assistir.
            <br />
            É um encontro para participar, trocar e se posicionar.
          </h2>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '0px 0px -100px 0px' }}
          >
            <Button
              size="lg"
              onClick={handleRegister}
              className="bg-white text-black hover:bg-gray-100 font-heading text-base px-10 py-3 rounded-sm transition-all duration-300"
            >
              Garanta sua cadeira agora
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Spacing before footer */}
      <div className="h-12"></div>

      <Footer />
    </div>
  );
}
