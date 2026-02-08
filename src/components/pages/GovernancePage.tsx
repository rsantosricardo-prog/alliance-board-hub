import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SMBoardLogo from '@/components/SMBoardLogo';
import { 
  BookOpen, 
  FileText, 
  Video, 
  Podcast,
  Calendar,
  TrendingUp,
  Users,
  Award,
  ArrowRight,
  Download
} from 'lucide-react';

export default function GovernancePage() {
  const resources = [
    {
      icon: BookOpen,
      title: "Guias Práticos",
      description: "Manuais e frameworks para implementação de melhores práticas de governança",
      items: [
        "Guia de Formação de Conselhos",
        "Manual de Boas Práticas ESG",
        "Framework de Avaliação de Desempenho",
        "Checklist de Compliance"
      ]
    },
    {
      icon: FileText,
      title: "Artigos & Insights",
      description: "Análises aprofundadas sobre tendências e desafios da governança corporativa",
      items: [
        "Governança na Era Digital",
        "O Papel do Conselho em Crises",
        "ESG como Diferencial Competitivo",
        "Diversidade em Conselhos"
      ]
    },
    {
      icon: Video,
      title: "Webinars",
      description: "Conteúdo audiovisual com especialistas renomados em governança",
      items: [
        "Série: Conselheiro do Futuro",
        "Webinar: Gestão de Riscos",
        "Workshop: Estratégia de Longo Prazo",
        "Painel: Transformação Digital"
      ]
    },
    {
      icon: Podcast,
      title: "Podcast\nSE CONSELHO FOSSE BOM",
      description: "Conversas inspiradoras com líderes sobre governança e estratégia",
      items: [
        "Episódio 1: Independência Real",
        "Episódio 2: Cultura de Performance",
        "Episódio 3: Sucessão de Liderança",
        "Episódio 4: Inovação Responsável"
      ]
    }
  ];

  const bestPractices = [
    {
      title: "Composição Equilibrada",
      description: "Conselhos diversos em experiência, gênero, idade e background trazem perspectivas mais ricas e decisões mais robustas.",
      icon: Users
    },
    {
      title: "Independência Efetiva",
      description: "Conselheiros verdadeiramente independentes, sem conflitos de interesse, garantem decisões alinhadas aos interesses da organização.",
      icon: Award
    },
    {
      title: "Avaliação Contínua",
      description: "Processos regulares de avaliação de desempenho individual e coletivo promovem melhoria contínua e accountability.",
      icon: TrendingUp
    },
    {
      title: "Capacitação Permanente",
      description: "Conselheiros atualizados sobre tendências, regulações e melhores práticas agregam mais valor às discussões estratégicas.",
      icon: BookOpen
    }
  ];

  const caseStudies = [
    {
      title: "Transformação Digital em Empresa Familiar",
      sector: "Varejo",
      challenge: "Resistência à mudança e falta de expertise digital no conselho",
      solution: "Inclusão de conselheiros com experiência em transformação digital e programa de capacitação para o conselho existente",
      result: "Aprovação de roadmap digital e aumento de 40% em vendas online em 18 meses"
    },
    {
      title: "Estruturação de Governança ESG",
      sector: "Indústria",
      challenge: "Pressão de investidores por práticas ESG sem estrutura de governança adequada",
      solution: "Criação de comitê ESG, definição de KPIs e integração com estratégia corporativa",
      result: "Melhoria de rating ESG e captação de investimento sustentável"
    },
    {
      title: "Sucessão de CEO em Startup",
      sector: "Tecnologia",
      challenge: "Fundador-CEO precisava se afastar e não havia sucessor preparado",
      solution: "Processo estruturado de sucessão com apoio de conselheiros experientes e mentoria ao novo CEO",
      result: "Transição suave e crescimento de 60% no ano seguinte"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center bg-white overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SMBoardLogo variant="light" className="h-20 mb-8" />
              <h1 className="font-heading text-6xl lg:text-8xl text-secondary mb-8 leading-tight">
                Governança na Prática
              </h1>
              <p className="font-paragraph text-xl lg:text-2xl text-secondary/70 leading-relaxed">
                Conhecimento aplicado, casos reais e recursos práticos para elevar a governança da teoria à execução.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 bg-[#EAEAEA] rounded-lg overflow-hidden"
            >
              <Image
                src="https://static.wixstatic.com/media/904ff8_8b2ed19fab2d4bf0aac40294594cea06~mv2.png"
                alt="Governança na Prática"
                className="w-full h-full object-cover"
                width={800}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="w-full py-32 bg-[#EAEAEA]">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl lg:text-6xl text-secondary mb-6">
              Centro de Recursos
            </h2>
            <p className="font-paragraph text-lg text-secondary/70 max-w-3xl mx-auto">
              Conteúdo exclusivo para conselheiros e executivos que buscam excelência em governança
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-secondary/10 p-10 hover:border-primary/50 transition-colors duration-300"
              >
                <resource.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="font-heading text-3xl text-secondary mb-4">
                  {resource.title}
                </h3>
                <p className="font-paragraph text-secondary/70 mb-8">
                  {resource.description}
                </p>
                <ul className="space-y-3">
                  {resource.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Download className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Practices Section */}
      <section className="w-full py-32 bg-secondary text-secondary-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl lg:text-6xl mb-6">
              Melhores Práticas
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
              Princípios fundamentais para conselhos de alto desempenho
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/10 p-10 hover:bg-white/10 transition-colors duration-300"
              >
                <practice.icon className="w-10 h-10 text-primary mb-6" />
                <h3 className="font-heading text-2xl mb-4">
                  {practice.title}
                </h3>
                <p className="font-paragraph text-secondary-foreground/80 leading-relaxed">
                  {practice.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-32 bg-white">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl lg:text-6xl text-secondary mb-6">
              Casos de Sucesso
            </h2>
            <p className="font-paragraph text-lg text-secondary/70 max-w-3xl mx-auto">
              Exemplos reais de como a governança estratégica transforma organizações
            </p>
          </motion.div>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#EAEAEA] border border-secondary/10 p-10 lg:p-12"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="lg:w-1/3">
                    <span className="inline-block bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-paragraph mb-4">
                      {study.sector}
                    </span>
                    <h3 className="font-heading text-3xl text-secondary mb-4">
                      {study.title}
                    </h3>
                  </div>
                  <div className="lg:w-2/3 space-y-6">
                    <div>
                      <h4 className="font-paragraph font-bold text-secondary mb-2">Desafio</h4>
                      <p className="font-paragraph text-secondary/70">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-paragraph font-bold text-secondary mb-2">Solução</h4>
                      <p className="font-paragraph text-secondary/70">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-paragraph font-bold text-secondary mb-2">Resultado</h4>
                      <p className="font-paragraph text-secondary/70">{study.result}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Calendar className="w-16 h-16 mx-auto mb-8 text-primary-foreground" />
            <h2 className="font-heading text-5xl lg:text-6xl mb-8">
              Participe dos Nossos Eventos
            </h2>
            <p className="font-paragraph text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
              Workshops, webinars e encontros presenciais para aprofundar seu conhecimento em governança.
            </p>
            <Link
              to="/events"
              className="inline-flex items-center gap-3 bg-secondary text-secondary-foreground px-12 py-5 rounded-full font-paragraph font-medium hover:bg-white hover:text-black transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Ver Calendário de Eventos
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
