import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { 
  UserCheck, 
  Building2, 
  ArrowRight, 
  CheckCircle2, 
  FileText, 
  Users, 
  ShieldCheck,
  Target,
  Award,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function InstitutionalPage() {
  const [activeTab, setActiveTab] = useState<'advisors' | 'companies'>('advisors');

  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-primary text-primary-foreground py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none"
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-heading text-5xl lg:text-7xl mb-6">
              Definição Institucional
            </h1>
            <p className="font-paragraph text-xl lg:text-2xl text-primary-foreground/80 leading-relaxed">
              Conectando excelência em governança corporativa através de uma rede qualificada de conselheiros independentes e empresas parceiras comprometidas com as melhores práticas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full py-24 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
                    Nossa Missão
                  </h2>
                  <p className="font-paragraph text-foreground/70 text-lg leading-relaxed">
                    Fortalecer a governança corporativa no Brasil através da conexão entre conselheiros independentes altamente qualificados e organizações que buscam excelência em suas práticas de gestão e tomada de decisão estratégica.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-4">
                    Nossa Visão
                  </h2>
                  <p className="font-paragraph text-foreground/70 text-lg leading-relaxed">
                    Ser a principal referência em governança corporativa, reconhecida pela qualidade de nossa rede de conselheiros e pelo impacto positivo que geramos nas organizações parceiras, promovendo crescimento sustentável e decisões éticas.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="w-full py-16 bg-background border-y border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab('advisors')}
              className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full font-paragraph font-medium transition-all duration-300 ${
                activeTab === 'advisors'
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-white text-foreground border border-muted/30 hover:border-accent'
              }`}
            >
              <UserCheck className="w-5 h-5" />
              Rede de Conselheiros Independentes
            </button>
            <button
              onClick={() => setActiveTab('companies')}
              className={`flex items-center justify-center gap-3 px-8 py-4 rounded-full font-paragraph font-medium transition-all duration-300 ${
                activeTab === 'companies'
                  ? 'bg-accent text-accent-foreground shadow-lg'
                  : 'bg-white text-foreground border border-muted/30 hover:border-accent'
              }`}
            >
              <Building2 className="w-5 h-5" />
              Empresas Parceiras
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {activeTab === 'advisors' && <AdvisorsSection />}
      {activeTab === 'companies' && <CompaniesSection />}

      {/* CTA Section */}
      <section className="w-full py-24 bg-secondary text-secondary-foreground">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl mb-6">
              Pronto para Fazer Parte?
            </h2>
            <p className="font-paragraph text-xl text-secondary-foreground/90 mb-10 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos fortalecer sua jornada em governança corporativa.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-10 py-5 rounded-full font-paragraph font-medium hover:bg-accent/80 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Entre em Contato
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Advisors Section Component
function AdvisorsSection() {
  const advisorSteps = [
    {
      number: '01',
      title: 'Manifestação de Interesse',
      description: 'O candidato expressa interesse em integrar a Rede de Conselheiros através do formulário de contato ou indicação de membros atuais.',
      icon: FileText,
    },
    {
      number: '02',
      title: 'Análise de Perfil',
      description: 'Avaliação detalhada do currículo, experiência profissional, formação acadêmica e certificações em governança corporativa.',
      icon: UserCheck,
    },
    {
      number: '03',
      title: 'Entrevista de Qualificação',
      description: 'Entrevista com a equipe técnica para avaliar competências, valores éticos, visão estratégica e alinhamento com os princípios da Alliance.',
      icon: Users,
    },
    {
      number: '04',
      title: 'Verificação de Referências',
      description: 'Checagem de referências profissionais e validação de experiências anteriores em conselhos ou posições de liderança estratégica.',
      icon: ShieldCheck,
    },
    {
      number: '05',
      title: 'Aprovação e Integração',
      description: 'Aprovação final pelo comitê de admissão, assinatura do termo de compromisso e integração à rede com acesso a eventos, treinamentos e oportunidades.',
      icon: Award,
    },
  ];

  const advisorBenefits = [
    'Acesso exclusivo a oportunidades em conselhos de empresas de diversos setores',
    'Participação em eventos de networking e desenvolvimento profissional',
    'Certificações e treinamentos contínuos em governança corporativa',
    'Visibilidade no mercado através da plataforma Alliance',
    'Conexão com uma rede de profissionais de alto nível',
    'Suporte técnico e jurídico para atuação em conselhos',
  ];

  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-6">
            Rede de Conselheiros Independentes
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
            Nossa rede é composta por profissionais experientes, éticos e comprometidos com a excelência em governança. O processo de seleção é rigoroso para garantir que apenas os melhores talentos integrem nosso ecossistema.
          </p>
        </motion.div>

        {/* Entry Flow */}
        <div className="mb-24">
          <h3 className="font-heading text-3xl text-foreground mb-12 text-center">
            Fluxo de Entrada para Conselheiros
          </h3>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-muted/30" />
            
            <div className="space-y-12">
              {advisorSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex flex-col lg:flex-row gap-6 lg:gap-12"
                >
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-[120px] h-[120px] rounded-full bg-accent text-accent-foreground flex items-center justify-center relative z-10 shadow-lg">
                    <span className="font-heading text-3xl">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-background p-8 lg:p-10 border border-muted/20 hover:border-accent transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="font-heading text-2xl text-foreground">
                        {step.title}
                      </h4>
                    </div>
                    <p className="font-paragraph text-foreground/70 leading-relaxed pl-16">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground p-12 lg:p-16"
        >
          <h3 className="font-heading text-3xl lg:text-4xl mb-10">
            Benefícios de Integrar a Rede
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advisorBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="font-paragraph text-primary-foreground/90 leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Companies Section Component
function CompaniesSection() {
  const companySteps = [
    {
      number: '01',
      title: 'Primeiro Contato',
      description: 'A empresa manifesta interesse em estabelecer ou fortalecer seu conselho através de nossos canais de atendimento.',
      icon: FileText,
    },
    {
      number: '02',
      title: 'Diagnóstico Organizacional',
      description: 'Realizamos uma análise detalhada da estrutura atual de governança, necessidades específicas, cultura organizacional e objetivos estratégicos.',
      icon: Target,
    },
    {
      number: '03',
      title: 'Mapeamento de Perfil',
      description: 'Identificação das competências, experiências e características ideais dos conselheiros necessários para atender às demandas da organização.',
      icon: Users,
    },
    {
      number: '04',
      title: 'Apresentação de Candidatos',
      description: 'Seleção e apresentação de conselheiros da nossa rede que melhor se adequam ao perfil mapeado, incluindo currículos detalhados e histórico profissional.',
      icon: UserCheck,
    },
    {
      number: '05',
      title: 'Facilitação do Processo',
      description: 'Apoio durante entrevistas, negociações e formalização da parceria, garantindo alinhamento entre expectativas e responsabilidades.',
      icon: ShieldCheck,
    },
    {
      number: '06',
      title: 'Acompanhamento Contínuo',
      description: 'Suporte contínuo após a formação do conselho, incluindo avaliações periódicas, treinamentos e ajustes conforme necessário.',
      icon: TrendingUp,
    },
  ];

  const companyBenefits = [
    'Acesso a uma rede pré-qualificada de conselheiros independentes',
    'Processo de seleção personalizado e alinhado à cultura organizacional',
    'Redução de tempo e custos no processo de recrutamento',
    'Garantia de profissionais com experiência comprovada em governança',
    'Suporte técnico durante todo o processo de implementação',
    'Acompanhamento e avaliação contínua da efetividade do conselho',
  ];

  return (
    <section className="w-full py-24 bg-background">
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-20"
        >
          <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-6">
            Empresas Parceiras
          </h2>
          <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
            Trabalhamos com organizações de diversos portes e setores que buscam fortalecer sua governança corporativa através de conselhos independentes qualificados. Nosso processo é personalizado para atender às necessidades específicas de cada empresa.
          </p>
        </motion.div>

        {/* Entry Flow */}
        <div className="mb-24">
          <h3 className="font-heading text-3xl text-foreground mb-12 text-center">
            Fluxo de Entrada para Empresas
          </h3>
          
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-[60px] top-0 bottom-0 w-px bg-muted/30" />
            
            <div className="space-y-12">
              {companySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex flex-col lg:flex-row gap-6 lg:gap-12"
                >
                  {/* Step Number Circle */}
                  <div className="flex-shrink-0 w-[120px] h-[120px] rounded-full bg-accent text-accent-foreground flex items-center justify-center relative z-10 shadow-lg">
                    <span className="font-heading text-3xl">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-background p-8 lg:p-10 border border-muted/20 hover:border-accent transition-colors">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <step.icon className="w-6 h-6 text-accent" />
                      </div>
                      <h4 className="font-heading text-2xl text-foreground">
                        {step.title}
                      </h4>
                    </div>
                    <p className="font-paragraph text-foreground/70 leading-relaxed pl-16">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-primary-foreground p-12 lg:p-16"
        >
          <h3 className="font-heading text-3xl lg:text-4xl mb-10">
            Benefícios para Empresas Parceiras
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyBenefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <p className="font-paragraph text-primary-foreground/90 leading-relaxed">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
