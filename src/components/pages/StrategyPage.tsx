import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SMBoardLogo from '@/components/SMBoardLogo';
import { ArrowRight, CheckCircle2, Users, Target, Zap, Globe } from 'lucide-react';

export default function StrategyPage() {
  return (
    <div className="min-h-screen bg-background pt-28">
      <Header />

      {/* Hero Section */}
      <section className="relative w-full bg-background py-32 lg:py-40 overflow-hidden">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <SMBoardLogo variant="light" className="h-20 mb-8" />
            <h1 className="font-heading text-6xl lg:text-7xl mb-8 text-foreground leading-tight">
              Decisões que Transformam
            </h1>
            <p className="font-paragraph text-xl lg:text-2xl text-foreground/70 leading-relaxed">
              SM Board conecta conselheiros e executivos C-Level em um ambiente seletivo de troca estratégica, onde visão de futuro, maturidade decisória e responsabilidade institucional convergem para impacto real.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Institutional Positioning */}
      <section className="w-full py-24 lg:py-32 bg-primary text-primary-foreground border-t border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h2 className="font-heading text-5xl lg:text-6xl mb-8">
              SM Board
            </h2>
            <p className="font-paragraph text-lg lg:text-xl text-primary-foreground/90 leading-relaxed mb-8">
              Um espaço de curadoria estratégica onde conselheiros independentes e executivos C-Level se encontram para discussões de alto nível, compartilhamento de experiências e construção de visão sistêmica sobre decisões que moldam organizações e mercados.
            </p>
            <p className="font-paragraph text-lg lg:text-xl text-primary-foreground/90 leading-relaxed">
              Não é uma plataforma de networking genérica. É um ambiente seletivo onde critério, experiência comprovada e alinhamento institucional definem quem participa. Aqui, cada membro contribui com capital intelectual qualificado para decisões que importam.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do - Strategic Experiences */}
      <section className="w-full py-24 lg:py-32 bg-background border-t border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <h2 className="font-heading text-5xl lg:text-6xl text-foreground mb-6">
              O Que Fazemos
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-2xl">
              Experiências estratégicas desenhadas para conectar líderes, ampliar perspectivas e gerar decisões de impacto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Curated Access */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border border-foreground/20 p-10 lg:p-12 rounded-lg hover:border-primary transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl text-foreground">
                  Acesso Qualificado
                </h3>
              </div>
              <p className="font-paragraph text-foreground/70 leading-relaxed">
                Conexão com uma rede seletiva de conselheiros e C-Levels que compartilham compromisso com excelência, visão estratégica e responsabilidade institucional. Cada membro é cuidadosamente curado.
              </p>
            </motion.div>

            {/* Strategic Environments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border border-foreground/20 p-10 lg:p-12 rounded-lg hover:border-primary transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl text-foreground">
                  Ambientes Estratégicos
                </h3>
              </div>
              <p className="font-paragraph text-foreground/70 leading-relaxed">
                Espaços dedicados para discussão de temas críticos, troca de experiências e construção de visão coletiva. Cada ambiente é estruturado para gerar insights e decisões de impacto real.
              </p>
            </motion.div>

            {/* Knowledge Curation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="border border-foreground/20 p-10 lg:p-12 rounded-lg hover:border-primary transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl text-foreground">
                  Curadoria de Conhecimento
                </h3>
              </div>
              <p className="font-paragraph text-foreground/70 leading-relaxed">
                Conteúdo estratégico, insights de mercado e melhores práticas selecionadas especificamente para líderes que tomam decisões de alto impacto. Conhecimento que importa.
              </p>
            </motion.div>

            {/* Systemic Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="border border-foreground/20 p-10 lg:p-12 rounded-lg hover:border-primary transition-colors duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl text-foreground">
                  Visão Sistêmica
                </h3>
              </div>
              <p className="font-paragraph text-foreground/70 leading-relaxed">
                Perspectiva integrada sobre decisões estratégicas, considerando complexidade, interdependências e impacto de longo prazo. Visão que transforma.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Strategic Communities */}
      <section className="w-full py-24 lg:py-32 bg-primary text-primary-foreground border-t border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <h2 className="font-heading text-5xl lg:text-6xl mb-6">
              Comunidades Estratégicas
            </h2>
            <p className="font-paragraph text-lg text-primary-foreground/80 max-w-2xl">
              Dois ambientes distintos, cada um com critério de entrada, proposta de valor específica e comunidade curada.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Advisors Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-10 lg:p-12 rounded-lg"
            >
              <h3 className="font-heading text-3xl text-primary-foreground mb-4">
                Grupo de Conselheiros
              </h3>
              <p className="font-paragraph text-primary-foreground/80 leading-relaxed mb-8">
                Comunidade de conselheiros independentes qualificados. Espaço para discussão estratégica, compartilhamento de experiências e construção de visão coletiva sobre governança e decisões de impacto.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-primary-foreground/90">Acesso a comunidade seletiva de pares</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-primary-foreground/90">Discussões estratégicas e troca de experiências</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-primary-foreground/90">Conteúdo exclusivo e curado</p>
                </div>
              </div>
              <a
                href="https://chat.whatsapp.com/EG5yLFfjDi24OApOSCOw3O"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-2 w-full bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 font-paragraph font-medium"
              >
                Acessar Grupo
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* C-Levels Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-10 lg:p-12 rounded-lg"
            >
              <h3 className="font-heading text-3xl text-primary-foreground mb-4">
                Grupo de C-Levels
              </h3>
              <p className="font-paragraph text-primary-foreground/80 leading-relaxed mb-8">
                Comunidade seletiva de executivos C-Level. Entrada mediante curadoria e aprovação. Espaço para discussão estratégica entre pares qualificados, onde decisões de alto impacto são debatidas com profundidade.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-primary-foreground/90">Acesso curado e seletivo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-primary-foreground/90">Discussões de nível executivo</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-1" />
                  <p className="font-paragraph text-primary-foreground/90">Rede de pares de excelência</p>
                </div>
              </div>
              <a
                href="/contact"
                className="mt-10 inline-flex items-center justify-center gap-2 w-full bg-primary-foreground text-primary px-6 py-3 rounded-lg hover:bg-primary-foreground/90 transition-all duration-300 font-paragraph font-medium"
              >
                Solicitar Candidatura
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-32 lg:py-40 bg-background border-t border-foreground/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl lg:text-6xl mb-8 text-foreground">
              Pronto para Decisões que Importam?
            </h2>
            <p className="font-paragraph text-xl lg:text-2xl mb-12 text-foreground/70 max-w-2xl mx-auto">
              Conecte-se com uma rede de líderes estratégicos moldando o futuro através de decisões qualificadas.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href="/contact"
                className="min-w-[200px] bg-primary text-primary-foreground px-10 py-5 rounded-lg font-paragraph font-medium hover:bg-secondary transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Solicitar Acesso
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://buy.stripe.com/conselheiros"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-[200px] border-2 border-primary text-primary px-10 py-5 rounded-lg font-paragraph font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                Acessar Comunidade
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Widget Section */}
      <section className="w-full py-24 lg:py-32 bg-primary border-t border-foreground/10">
        <div className="max-w-4xl mx-auto px-6 flex justify-center">
          <div style={{ width: '240px', overflow: 'hidden', borderRadius: '4px', boxShadow: '0 6px 6px 0 rgba(22,45,61,.06),0 0 18px 0 rgba(22,45,61,.12)' }}>
            <div style={{ display: 'flex', borderRadius: '6px', backgroundColor: '#fff', fontFamily: 'Helvetica Neue,Helvetica,Arial' }}>
              <div style={{ display: 'flex', width: '100%', flexDirection: 'row', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', width: '100%', height: '153px', alignItems: 'center', justifyContent: 'center', backgroundPosition: 'center center', backgroundColor: '#EDEEF5' }}>
                  <div style={{ maxWidth: '100%', width: '100%', whiteSpace: 'nowrap', justifyContent: 'center', display: 'flex' }}>
                    <div style={{ fontSize: '28px', fontWeight: '400', lineHeight: '58px' }}>R$</div>
                    <div style={{ fontSize: '58px', fontWeight: '400', lineHeight: '58px' }}> 500 </div>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap', flexGrow: 'initial', textAlign: 'center', width: '100%', padding: 'calc(18px) calc(24px) calc(24px)' }}>
                  <div style={{ display: 'flex', flexDirection: 'row', width: '100%', maxWidth: '100%', maxHeight: '84px', justifyContent: 'center', wordBreak: 'break-word', overflow: 'hidden', marginBottom: '12px' }}>
                    <div style={{ fontSize: '21px', fontWeight: '700', lineHeight: '28px' }}>Onde conhecimento se transforma em Equity</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', width: '100%', margin: '0 calc(36px) calc(12px)' }}>
                    <hr style={{ backgroundColor: '#dfe5eb', minHeight: '1px', width: '100%', border: '0' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', height: '54px', wordBreak: 'break-word', marginBottom: '12px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '400', lineHeight: '18px', textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: '100%', verticalAlign: 'bottom' }}>Dia 19/03/2026
Restaurante Pavino Rua Roque Petrella, 235 – Brooklin, São Paulo – SP.</span>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                    <a href="https://www.smartmoneyboard.com/_paylink/AZxMV2zd" target="_blank" rel="noopener noreferrer" style={{ width: '100%' }}>
                      <button style={{ backgroundColor: 'black', width: '100%', justifyContent: 'center', textAlign: 'center', height: '36px', borderRadius: '18px', border: '0', minWidth: '84px', padding: '0 23px', textDecoration: 'none', userSelect: 'none', whiteSpace: 'nowrap', cursor: 'pointer', color: 'white' }}>
                        <span style={{ textOverflow: 'ellipsis', overflow: 'hidden', maxWidth: '100%', verticalAlign: 'bottom' }}>Pagar</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
