import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ConselhosPraticaPage() {
  const [isScrolled, setIsScrolled] = useState(false);

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
      <section className="relative w-full min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gray-800 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gray-900 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-heading text-7xl md:text-8xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            CONSELHOS NA PRÁTICA
          </motion.h1>

          <motion.p
            className="font-paragraph text-2xl md:text-3xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Decisão, Governança e Inovação em Ambientes de Alta Complexidade
          </motion.p>

          <motion.p
            className="font-paragraph text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Um encontro presencial, exclusivo e cuidadosamente curado para C-Levels, empresários e conselheiros.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">📍</span>
              <span className="font-paragraph">Restaurante Pavino – Brooklin, São Paulo</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <span className="font-paragraph">19 de março</span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <span className="text-2xl">⏰</span>
              <span className="font-paragraph">16h às 22h</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 font-heading text-lg px-12 py-6 rounded-lg"
            >
              Garanta sua cadeira – Vagas limitadas
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Posicionamento */}
      <section className="w-full max-w-6xl mx-auto px-4 py-24">
        <motion.div
          className="text-center"
          {...fadeInUp}
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">
            Este não é um evento aberto.
          </h2>
          <p className="font-paragraph text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Este encontro foi desenhado para líderes que ocupam — ou se preparam para ocupar — posições reais de decisão.
            Aqui, conteúdo estratégico e networking acontecem entre pares, em um ambiente reservado, elegante e intencionalmente curado.
          </p>
        </motion.div>
      </section>

      {/* Por que participar */}
      <section className="w-full max-w-6xl mx-auto px-4 py-24">
        <motion.h2
          className="font-heading text-5xl md:text-6xl font-bold mb-16 text-center"
          {...fadeInUp}
        >
          Por que participar
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex gap-6 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
              <p className="font-paragraph text-lg text-gray-300 leading-relaxed">
                {benefit}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Agenda */}
      <section className="w-full max-w-6xl mx-auto px-4 py-24">
        <motion.h2
          className="font-heading text-5xl md:text-6xl font-bold mb-16 text-center"
          {...fadeInUp}
        >
          Agenda do Evento
        </motion.h2>

        <div className="space-y-8">
          {agenda.map((item, index) => (
            <motion.div
              key={index}
              className="border-l-2 border-gray-700 pl-8 py-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <p className="font-heading text-lg text-gray-400 mb-2">{item.time}</p>
                  <p className="font-paragraph text-xl text-white mb-2">{item.title}</p>
                  {item.speaker && (
                    <p className="font-paragraph text-gray-400">
                      <span className="text-gray-500">Palestrante:</span> {item.speaker}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Palestrantes */}
      <section className="w-full max-w-6xl mx-auto px-4 py-24">
        <motion.h2
          className="font-heading text-5xl md:text-6xl font-bold mb-16 text-center"
          {...fadeInUp}
        >
          Palestrantes
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">{speaker.name}</h3>
              <p className="font-paragraph text-gray-300 leading-relaxed">{speaker.bio}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Investimento */}
      <section className="w-full max-w-6xl mx-auto px-4 py-24">
        <motion.div
          className="text-center"
          {...fadeInUp}
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8">
            Valor da cadeira – 1º lote
          </h2>
          <div className="mb-8">
            <p className="font-heading text-7xl font-bold text-white mb-4">R$ 500,00</p>
            <p className="font-paragraph text-lg text-gray-400">
              Evento presencial | Vagas extremamente limitadas | Curadoria de público
            </p>
          </div>
        </motion.div>
      </section>

      {/* O que está incluso */}
      <section className="w-full max-w-6xl mx-auto px-4 py-24">
        <motion.h2
          className="font-heading text-5xl md:text-6xl font-bold mb-16 text-center"
          {...fadeInUp}
        >
          O que está incluso
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {includes.map((item, index) => (
            <motion.div
              key={index}
              className="flex gap-4 items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: '0px 0px -100px 0px' }}
            >
              <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
              <p className="font-paragraph text-lg text-gray-300">{item}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Final */}
      <section className="w-full max-w-6xl mx-auto px-4 py-24">
        <motion.div
          className="text-center"
          {...fadeInUp}
        >
          <h2 className="font-heading text-5xl md:text-6xl font-bold mb-8 leading-tight">
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
              className="bg-white text-black hover:bg-gray-200 font-heading text-lg px-12 py-6 rounded-lg"
            >
              Garanta sua cadeira agora
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Spacing before footer */}
      <div className="h-24"></div>

      <Footer />
    </div>
  );
}
