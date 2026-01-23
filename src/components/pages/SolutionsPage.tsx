import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  Building2, 
  Users, 
  GraduationCap, 
  FileCheck, 
  TrendingUp, 
  Shield,
  Briefcase,
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
      description: "Programas de formação e atualização para conselheiros e executivos em governança corporativa, ESG e tendências de mercado.",
      features: [
        "Workshops e treinamentos especializados",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-1 bg-primary-foreground mb-8" />
              <h1 className="font-heading text-6xl lg:text-8xl mb-8 leading-tight">
                Soluções & Atuação
              </h1>
              <p className="font-paragraph text-xl lg:text-2xl text-primary-foreground/90 leading-relaxed">
                Transformamos governança em vantagem competitiva através de soluções integradas e personalizadas para cada desafio estratégico.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full h-96">
                <div className="absolute inset-0 bg-primary-foreground/10 backdrop-blur-sm rounded-lg" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Briefcase className="w-32 h-32 text-primary-foreground/30" />
                </div>
              </div>
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
                  <div className={`w-16 h-16 rounded-full bg-${solution.color}/10 flex items-center justify-center flex-shrink-0 group-hover:bg-${solution.color} transition-colors`}>
                    <solution.icon className={`w-8 h-8 text-${solution.color} group-hover:text-white transition-colors`} />
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
      {/* Conselho as a Service Section */}
      <section className="w-full py-32 bg-gradient-to-br from-[#EAEAEA] to-white">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="font-paragraph text-sm text-primary font-medium">Modelo Contínuo de Assessoria</span>
            </div>
            <h2 className="font-heading text-5xl lg:text-7xl text-secondary mb-8">
              Conselho as a Service
            </h2>
            <p className="font-heading text-2xl lg:text-3xl text-primary mb-12 italic">
              Governança não é um evento. É um processo contínuo.
            </p>
            <div className="max-w-4xl mx-auto">
              <p className="font-paragraph text-lg text-secondary/80 leading-relaxed mb-6">
                Um modelo contínuo de assessoria em governança corporativa que conecta organizações a conselheiros experientes, oferecendo apoio estratégico recorrente para decisões críticas, alinhamento institucional e sustentabilidade de longo prazo.
              </p>
              <p className="font-paragraph text-lg text-secondary/80 leading-relaxed">
                Diferente de consultorias pontuais, o Conselho as a Service promove acompanhamento estruturado, visão externa independente e amadurecimento progressivo da governança.
              </p>
            </div>
          </motion.div>

          {/* Packages Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20">
            
            {/* Pacote Essencial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white border-2 border-secondary/20 p-10 hover:border-primary hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="mb-8">
                <div className="w-12 h-1 bg-primary mb-6" />
                <h3 className="font-heading text-3xl text-secondary mb-2">
                  Pacote Essencial
                </h3>
                <p className="font-paragraph text-sm text-secondary/60 uppercase tracking-wider">
                  Estruturação Inicial
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-secondary/80">Apoio estratégico periódico</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-secondary/80">Participação em reuniões-chave</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-secondary/80">Orientação em decisões estruturantes</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-secondary/80">Foco em organização inicial da governança</span>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-secondary/10">
                <p className="font-paragraph text-sm text-secondary/60 italic">
                  Ideal para organizações que estão estruturando suas práticas de governança
                </p>
              </div>
            </motion.div>

            {/* Pacote Estratégico */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary text-primary-foreground border-2 border-primary p-10 hover:shadow-2xl transition-all duration-300 transform lg:scale-105 relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-6 py-2 rounded-full">
                <span className="font-paragraph text-xs font-bold uppercase tracking-wider">Recomendado</span>
              </div>

              <div className="mb-8">
                <div className="w-12 h-1 bg-primary-foreground mb-6" />
                <h3 className="font-heading text-3xl text-primary-foreground mb-2">
                  Pacote Estratégico
                </h3>
                <p className="font-paragraph text-sm text-primary-foreground/70 uppercase tracking-wider">
                  Acompanhamento Contínuo
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-primary-foreground/90">Acompanhamento contínuo da alta gestão</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-primary-foreground/90">Participação recorrente em fóruns decisórios</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-primary-foreground/90">Apoio em planejamento estratégico e governança</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-primary-foreground/90">Mediação e visão externa independente</span>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-primary-foreground/20">
                <p className="font-paragraph text-sm text-primary-foreground/70 italic">
                  Para organizações que buscam amadurecimento contínuo da governança
                </p>
              </div>
            </motion.div>

            {/* Pacote Avançado */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white border-2 border-secondary/20 p-10 hover:border-primary hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="mb-8">
                <div className="w-12 h-1 bg-primary mb-6" />
                <h3 className="font-heading text-3xl text-secondary mb-2">
                  Pacote Avançado
                </h3>
                <p className="font-paragraph text-sm text-secondary/60 uppercase tracking-wider">
                  Parceria Estratégica
                </p>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-secondary/80">Atuação próxima ao conselho e à liderança</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-secondary/80">Apoio em decisões complexas e sensíveis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-secondary/80">Estruturação e amadurecimento da governança</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <span className="font-paragraph text-secondary/80">Acompanhamento estratégico de longo prazo</span>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-secondary/10">
                <p className="font-paragraph text-sm text-secondary/60 italic">
                  Para organizações que demandam parceria estratégica de alto nível
                </p>
              </div>
            </motion.div>
          </div>

          {/* Customization Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="max-w-3xl mx-auto bg-white border border-primary/20 p-8">
              <p className="font-paragraph text-secondary/70 leading-relaxed">
                <span className="font-bold text-primary">Nota:</span> Todos os pacotes são customizáveis conforme a realidade e necessidades específicas de cada organização. O escopo é ajustado para garantir máximo valor e alinhamento estratégico.
              </p>
            </div>
          </motion.div>
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
