import { motion } from 'framer-motion';
import { CheckCircle2, Shield, Zap, TrendingUp, Users, Lock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DueDiligenceIAPage() {
  const benefits = [
    {
      icon: Zap,
      title: 'Automação Inteligente de Análises',
      description: 'Processamento acelerado de dados com inteligência artificial, eliminando análises manuais demoradas.'
    },
    {
      icon: Shield,
      title: 'Redução de Riscos Jurídicos e Financeiros',
      description: 'Identificação proativa de exposições legais e financeiras com precisão e confiabilidade.'
    },
    {
      icon: TrendingUp,
      title: 'Tomada de Decisão Mais Rápida e Segura',
      description: 'Insights estratégicos baseados em dados consolidados para decisões corporativas assertivas.'
    },
    {
      icon: Lock,
      title: 'Conformidade com Governança e Compliance',
      description: 'Alinhamento automático com regulamentações e melhores práticas de governança corporativa.'
    },
    {
      icon: Users,
      title: 'Escalabilidade e Confiabilidade',
      description: 'Infraestrutura robusta capaz de processar grandes volumes de dados com segurança e performance.'
    },
    {
      icon: CheckCircle2,
      title: 'Integração de Múltiplas Fontes',
      description: 'Consolidação de dados públicos, jurídicos, financeiros e reputacionais em uma única plataforma.'
    }
  ];

  const targetAudience = [
    {
      title: 'Empresas e Grupos Econômicos',
      description: 'Análise profunda de parceiros, fornecedores e oportunidades de negócio com segurança jurídica.'
    },
    {
      title: 'Investidores e Fundos',
      description: 'Due diligence acelerada para avaliação de investimentos e identificação de riscos operacionais.'
    },
    {
      title: 'Escritórios de Advocacia',
      description: 'Suporte especializado em análises jurídicas e compliance para clientes corporativos.'
    },
    {
      title: 'Conselhos de Administração',
      description: 'Informações estratégicas para governança corporativa e tomada de decisão executiva.'
    },
    {
      title: 'Áreas de Compliance e Jurídico',
      description: 'Automação de processos de conformidade e gestão de riscos regulatórios.'
    },
    {
      title: 'Equipes de M&A',
      description: 'Análise completa de alvos de aquisição e fusão com redução de tempo e custos.'
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      {/* Hero Section */}
      <section className="w-full max-w-[120rem] mx-auto px-6 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Plataforma de Governança
          </h1>
          <p className="font-heading text-2xl lg:text-3xl text-secondary mb-8 font-semibold">Análise de Riscos e Segurança Jurídica</p>
          <p className="font-paragraph text-lg text-muted mb-12 max-w-3xl mx-auto leading-relaxed">
            Automatize processos de due diligence com inteligência artificial de ponta. Reduza tempo, custos e riscos operacionais enquanto garante conformidade com as mais altas práticas de governança corporativa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="hover:bg-secondary text-white font-semibold px-8 py-6 text-base rounded-lg bg-primary-foreground"
            >
              Acesse a Plataforma
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-6 text-base rounded-lg"
            >
              Assista à demo
            </Button>
          </div>
        </motion.div>
      </section>
      {/* O que é DueDiligence.Alliance */}
      <section className="w-full bg-gradient-to-br from-foreground/5 to-secondary/5 py-20 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-8">
              O que é eDue?
            </h2>
            <p className="font-paragraph text-lg text-muted mb-6 leading-relaxed">eDue é uma plataforma inteligente que realiza análises profundas e automatizadas de empresas, pessoas e ativos. Integrando dados públicos jurídicos, financeiros e reputacionais em tempo real, nossa solução oferece insights estratégicos para tomada de decisão segura e fundamentada.</p>
            <p className="font-paragraph text-lg text-muted leading-relaxed">
              Com tecnologia de inteligência artificial de última geração, a plataforma identifica riscos, oportunidades e conformidade regulatória, permitindo que sua organização tome decisões estratégicas com confiança e velocidade.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Benefícios */}
      <section className="w-full max-w-[100rem] mx-auto px-6 py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
            Principais Benefícios
          </h2>
          <p className="font-paragraph text-lg text-muted text-center max-w-2xl mx-auto">
            Transforme sua abordagem de análise de risco com tecnologia inteligente e confiável
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-foreground border-2 border-accent/30 rounded-xl p-8 hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-6 bg-primary">
                  <IconComponent className="w-12 h-12 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-bold text-background mb-4">
                  {benefit.title}
                </h3>
                <p className="font-paragraph text-background/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </section>
      {/* Para Quem é Indicado */}
      <section className="w-full bg-gradient-to-br from-secondary/10 to-foreground/5 py-20 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-foreground mb-4 text-center">
              Para Quem é Indicado
            </h2>
            <p className="font-paragraph text-lg text-muted text-center max-w-2xl mx-auto">
              Solução estratégica para organizações que buscam excelência em análise de risco e conformidade
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {targetAudience.map((audience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-foreground rounded-lg p-8 border-l-4 border-accent hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-heading text-xl font-bold text-background mb-3">
                  {audience.title}
                </h3>
                <p className="font-paragraph text-background/80 leading-relaxed">
                  {audience.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="w-full bg-gradient-to-r from-foreground to-secondary py-20 lg:py-28">
        <div className="max-w-[100rem] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold mb-6 text-primary-foreground">
              Pronto para Transformar Sua Análise de Risco?
            </h2>
            <p className="font-paragraph text-lg mb-12 max-w-2xl mx-auto leading-relaxed text-primary-foreground">
              Fale com um especialista e descubra como eDue pode impulsionar sua governança corporativa e conformidade.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-foreground hover:bg-accent hover:text-foreground font-semibold px-8 py-6 text-base rounded-lg border-0 border-solid border-[#000000ff] bg-secondary-foreground"
              >
                Fale com um Especialista
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-foreground font-semibold px-8 py-6 text-base rounded-lg bg-secondary"
              >Acesse a Plataforma</Button>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Trust Indicators */}
      <section className="w-full max-w-[100rem] mx-auto px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-foreground/5 to-accent/5 rounded-2xl p-12 text-center"
        >
          <h3 className="font-heading text-2xl lg:text-3xl font-bold text-foreground mb-8">
            Confiança e Segurança em Cada Análise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-heading text-4xl font-bold text-accent mb-2">99.9%</p>
              <p className="font-paragraph text-muted">Disponibilidade da Plataforma</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-accent mb-2">ISO 27001</p>
              <p className="font-paragraph text-muted">Padrão de Segurança</p>
            </div>
            <div>
              <p className="font-heading text-4xl font-bold text-accent mb-2">LGPD</p>
              <p className="font-paragraph text-muted">Conformidade Regulatória</p>
            </div>
          </div>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}
