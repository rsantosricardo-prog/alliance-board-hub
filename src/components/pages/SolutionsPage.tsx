import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SMBoardLogo from '@/components/SMBoardLogo';
import { 
  Building2, 
  Users, 
  GraduationCap, 
  FileCheck, 
  TrendingUp, 
  Shield,
  Target,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: Building2,
      title: "Formação de Conselhos",
      description: "Estruturação completa de conselhos de administração e consultivos, desde a definição do perfil ideal até a seleção e onboarding de conselheiros.",
      features: [
        "Mapeamento de competências necessárias",
        "Busca e seleção de conselheiros qualificados",
        "Due diligence e verificação de credenciais",
        "Processo de onboarding estruturado"
      ],
      color: "primary"
    },
    {
      icon: Users,
      title: "Conexão Estratégica",
      description: "Matching inteligente entre conselheiros independentes e organizações, baseado em expertise, valores e objetivos estratégicos.",
      features: [
        "Análise de fit cultural e estratégico",
        "Rede global de conselheiros certificados",
        "Processo de apresentação facilitado",
        "Acompanhamento pós-conexão"
      ],
      color: "secondary"
    },
    {
      icon: GraduationCap,
      title: "Capacitação & Desenvolvimento",
      description: "Palestras para conselheiros e executivos em governança corporativa, ESG e tendências de mercado.",
      features: [
        "Workshops especializados",
        "Mentoria para novos conselheiros",
        "Conteúdo exclusivo e atualizado"
      ],
      color: "primary"
    },
    {
      icon: FileCheck,
      title: "Assessoria em Governança",
      description: "Consultoria especializada para implementação e otimização de práticas de governança corporativa alinhadas às melhores referências globais.",
      features: [
        "Diagnóstico de maturidade em governança",
        "Desenho de estruturas de governança",
        "Políticas e procedimentos",
        "Compliance e gestão de riscos"
      ],
      color: "secondary"
    },
    {
      icon: TrendingUp,
      title: "Avaliação de Conselhos",
      description: "Processos estruturados de avaliação de desempenho de conselhos e conselheiros, com foco em melhoria contínua.",
      features: [
        "Avaliação 360° de conselhos",
        "Feedback individual de conselheiros",
        "Planos de desenvolvimento",
        "Benchmarking com mercado"
      ],
      color: "primary"
    },
    {
      icon: Shield,
      title: "Governança ESG",
      description: "Integração de práticas ESG na governança corporativa, preparando organizações para os desafios da sustentabilidade.",
      features: [
        "Estruturação de comitês ESG",
        "Indicadores e métricas de impacto",
        "Relatórios de sustentabilidade",
        "Engajamento de stakeholders"
      ],
      color: "secondary"
    }
  ];

  const sectors = [
    "Tecnologia & Inovação",
    "Serviços Financeiros",
    "Saúde & Life Sciences",
    "Energia & Sustentabilidade",
    "Varejo & Consumo",
    "Indústria & Manufatura",
    "Educação",
    "Terceiro Setor & ONGs"
  ];

  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center bg-gradient-to-br from-primary to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 py-32 relative z-10 w-full">
          <div className="grid grid-cols-1 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <SMBoardLogo variant="dark" className="h-20 mb-8" />
              <h1 className="font-heading text-6xl lg:text-8xl mb-8 leading-tight">
                Soluções & Atuação
              </h1>
              <p className="font-paragraph text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
                Transformamos governança em vantagem competitiva através de soluções integradas e personalizadas para cada desafio estratégico.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
      {/* Solutions Grid */}
      <section className="w-full py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl lg:text-6xl text-secondary mb-6">
              Nossas Soluções
            </h2>
            <p className="font-paragraph text-lg text-secondary/70 max-w-3xl mx-auto">
              Oferecemos um portfólio completo de serviços para fortalecer a governança em todas as suas dimensões
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-secondary/10 p-10 lg:p-12 hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-6 mb-8">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <solution.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-heading text-3xl text-secondary mb-3">
                      {solution.title}
                    </h3>
                    <div className="w-12 h-1 bg-primary" />
                  </div>
                </div>

                <p className="font-paragraph text-secondary/70 leading-relaxed mb-8">
                  {solution.description}
                </p>

                <ul className="space-y-3">
                  {solution.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="font-paragraph text-base text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Sectors Section */}
      <section className="w-full py-32 bg-secondary text-secondary-foreground">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl lg:text-6xl mb-6">
              Setores de Atuação
            </h2>
            <p className="font-paragraph text-lg text-secondary-foreground/80 max-w-3xl mx-auto">
              Experiência multissetorial para atender às especificidades de cada indústria
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 border border-white/10 p-6 text-center hover:bg-white/10 transition-colors duration-300"
              >
                <Target className="w-8 h-8 text-primary mx-auto mb-4" />
                <p className="font-paragraph text-sm text-secondary-foreground/90">
                  {sector}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full py-32 bg-[#EAEAEA]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-5xl lg:text-6xl text-secondary mb-8">
              Pronto para Transformar sua Governança?
            </h2>
            <p className="font-paragraph text-xl text-secondary/70 mb-12 max-w-2xl mx-auto">
              Entre em contato e descubra como nossas soluções podem fortalecer sua organização.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-12 py-5 rounded-full font-paragraph font-medium hover:bg-secondary hover:text-secondary-foreground transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Fale com Nossos Especialistas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
