import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { BrandEssence, CoreValues } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, ChevronDown, MessageCircle, Linkedin, Mail, Globe } from 'lucide-react';

export default function HomePage() {
  const [brandEssence, setBrandEssence] = useState<BrandEssence | null>(null);
  const [coreValues, setCoreValues] = useState<CoreValues[]>([]);
  const [isLoadingBrand, setIsLoadingBrand] = useState(true);
  const [isLoadingValues, setIsLoadingValues] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroParallax = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  useEffect(() => {
    const loadBrandEssence = async () => {
      try {
        const result = await BaseCrudService.getAll<BrandEssence>('brandessence');
        if (result.items.length > 0) {
          setBrandEssence(result.items[0]);
        }
      } catch (error) {
        console.error('Error loading brand essence:', error);
      } finally {
        setIsLoadingBrand(false);
      }
    };

    const loadCoreValues = async () => {
      try {
        const result = await BaseCrudService.getAll<CoreValues>('corevalues');
        const sorted = result.items.sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
        setCoreValues(sorted);
      } catch (error) {
        console.error('Error loading core values:', error);
      } finally {
        setIsLoadingValues(false);
      }
    };

    loadBrandEssence();
    loadCoreValues();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-background selection:bg-primary selection:text-white overflow-x-clip pt-28">
      <Header />

      {/* HERO SECTION */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-20 lg:pt-0">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Hero Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-8"
            >
              <div className="space-y-4">
                <span className="font-paragraph text-xs font-bold tracking-[0.2em] uppercase text-foreground/60">
                  SM Board
                </span>
                <h1 className="font-heading text-5xl lg:text-7xl leading-[1.1] text-foreground">
                  Decisões que Transformam
                </h1>
              </div>
              
              <p className="font-paragraph text-lg lg:text-xl text-foreground/70 leading-relaxed max-w-lg">
                Conectando conselheiros e C-Levels em um ambiente seletivo de troca estratégica, onde visão de futuro, maturidade decisória e responsabilidade institucional convergem para impacto real.
              </p>

              <div className="pt-8 border-t border-foreground/10 flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/strategy" 
                  className="group flex items-center justify-center w-full sm:w-auto bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-secondary transition-all duration-300 font-paragraph font-medium"
                >
                  Explorar Estratégia
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="group flex items-center justify-center w-full sm:w-auto border-2 border-foreground text-foreground px-8 py-4 rounded-lg hover:bg-foreground hover:text-background transition-all duration-300 font-paragraph font-medium"
                >
                  Solicitar Acesso
                </Link>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/10 z-10 group-hover:bg-black/0 transition-colors duration-700" />
              {isLoadingBrand ? (
                <div className="w-full h-full bg-neutral-200 animate-pulse" />
              ) : (
                <Image
                  src={brandEssence?.brandImage || "https://static.wixstatic.com/media/904ff8_f6b14faca1744f968654e0c5057e4581~mv2.png?originWidth=1152&originHeight=768"}
                  alt="Smart Money Strategy"
                  className="w-full h-full object-cover grayscale transition-transform duration-1000 ease-out group-hover:scale-105"
                  width={1200}
                />
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* INSTITUTIONAL POSITIONING SECTION */}
      <section className="relative w-full bg-background py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="space-y-4">
                <span className="font-paragraph text-xs font-bold tracking-[0.2em] uppercase text-foreground/60">
                  Posicionamento
                </span>
                <h2 className="font-heading text-5xl lg:text-6xl text-foreground leading-tight">
                  O que é SM Board
                </h2>
              </div>

              <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                {brandEssence?.summary || "SM Board é uma plataforma seletiva de Smart Money que conecta conselheiros e C-Levels em um ecossistema de alto valor estratégico."}
              </p>

              <div className="space-y-6 pt-8 border-t border-foreground/10">
                <div className="flex gap-4">
                  <div className="w-1 bg-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">Público-Alvo</h3>
                    <p className="font-paragraph text-foreground/70">Conselheiros independentes e C-Levels que buscam decisões estratégicas de alto impacto através de inteligência coletiva.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">Diferencial</h3>
                    <p className="font-paragraph text-foreground/70">Capital intelectual qualificado, acesso a pares de excelência e visão de longo prazo para decisões que transformam.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-1 bg-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl text-foreground mb-2">Propósito</h3>
                    <p className="font-paragraph text-foreground/70">Conectar líderes estratégicos em um ecossistema exclusivo onde conhecimento, experiência e visão convergem para decisões de impacto.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-black/5 z-10 group-hover:bg-black/0 transition-colors duration-700" />
              <Image
                src="https://static.wixstatic.com/media/904ff8_f6b14faca1744f968654e0c5057e4581~mv2.png?originWidth=1152&originHeight=768"
                alt="Strategic Positioning"
                className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                width={1200}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="relative w-full bg-primary text-primary-foreground py-24 lg:py-32">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <span className="font-paragraph text-xs font-bold tracking-[0.2em] uppercase text-primary-foreground/60">
              Soluções
            </span>
            <h2 className="font-heading text-5xl lg:text-6xl text-primary-foreground leading-tight mt-4">
              Networking Estratégico e Curadoria de Conhecimento
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 lg:p-10 rounded-lg"
            >
              <h3 className="font-heading text-2xl lg:text-3xl text-primary-foreground mb-4">Acesso a Pares</h3>
              <p className="font-paragraph text-primary-foreground/80 leading-relaxed">
                Conecte-se com conselheiros e executivos de alto nível que compartilham visão estratégica e experiência comprovada em decisões de impacto corporativo.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 lg:p-10 rounded-lg"
            >
              <h3 className="font-heading text-2xl lg:text-3xl text-primary-foreground mb-4">Curadoria de Conhecimento</h3>
              <p className="font-paragraph text-primary-foreground/80 leading-relaxed">
                Acesso a conteúdo estratégico, insights de mercado e melhores práticas selecionadas especificamente para líderes que tomam decisões de alto impacto.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 lg:p-10 rounded-lg"
            >
              <h3 className="font-heading text-2xl lg:text-3xl text-primary-foreground mb-4">Inteligência Coletiva</h3>
              <p className="font-paragraph text-primary-foreground/80 leading-relaxed">
                Beneficie-se da sabedoria coletiva de uma rede qualificada, onde experiências e perspectivas convergem para decisões mais informadas e estratégicas.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 p-8 lg:p-10 rounded-lg"
            >
              <h3 className="font-heading text-2xl lg:text-3xl text-primary-foreground mb-4">Visão de Longo Prazo</h3>
              <p className="font-paragraph text-primary-foreground/80 leading-relaxed">
                Discussões estratégicas focadas em sustentabilidade, governança e criação de valor duradouro para organizações e stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STRATEGIC COMMUNITIES SECTION */}
      <section className="relative w-full bg-background py-24 lg:py-32 border-t border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20"
          >
            <span className="font-paragraph text-xs font-bold tracking-[0.2em] uppercase text-foreground/60">
              Comunidades
            </span>
            <h2 className="font-heading text-5xl lg:text-6xl text-foreground leading-tight mt-4">
              Comunidades Estratégicas
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 leading-relaxed max-w-2xl mt-6">
              Acesso exclusivo a grupos de WhatsApp especializados para conselheiros e C-Levels, onde decisões estratégicas são discutidas entre pares qualificados.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Conselheiros Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="border-2 border-foreground/20 p-10 lg:p-12 rounded-lg hover:border-primary transition-colors duration-300"
            >
              <h3 className="font-heading text-3xl text-foreground mb-4">Grupo WhatsApp - Conselheiros</h3>
              <p className="font-paragraph text-foreground/70 leading-relaxed mb-8">
                Comunidade exclusiva de conselheiros independentes para discussões estratégicas, compartilhamento de experiências e networking qualificado.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <a 
                    href="https://chat.whatsapp.com/conselheiros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-all duration-300 font-paragraph font-medium"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a 
                    href="https://linkedin.com/groups/conselheiros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-paragraph font-medium"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="mailto:conselheiros@smartmoney.com"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-foreground/30 text-foreground px-6 py-3 rounded-lg hover:bg-foreground/5 transition-all duration-300 font-paragraph font-medium"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                  <a 
                    href="https://smartmoney.com/conselheiros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-foreground/30 text-foreground px-6 py-3 rounded-lg hover:bg-foreground/5 transition-all duration-300 font-paragraph font-medium"
                  >
                    <Globe className="w-5 h-5" />
                    Portal
                  </a>
                </div>
              </div>
            </motion.div>

            {/* C-Levels Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="border-2 border-foreground/20 p-10 lg:p-12 rounded-lg hover:border-primary transition-colors duration-300"
            >
              <h3 className="font-heading text-3xl text-foreground mb-4">Grupo WhatsApp - C-Levels</h3>
              <p className="font-paragraph text-foreground/70 leading-relaxed mb-8">
                Comunidade seletiva de C-Levels e executivos para discussões estratégicas. Entrada mediante curadoria e aprovação para garantir qualidade e alinhamento.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <a 
                    href="https://chat.whatsapp.com/clevels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-secondary transition-all duration-300 font-paragraph font-medium"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                  <a 
                    href="https://linkedin.com/groups/clevels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-paragraph font-medium"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                </div>
                <div className="flex gap-3">
                  <a 
                    href="mailto:clevels@smartmoney.com"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-foreground/30 text-foreground px-6 py-3 rounded-lg hover:bg-foreground/5 transition-all duration-300 font-paragraph font-medium"
                  >
                    <Mail className="w-5 h-5" />
                    Email
                  </a>
                  <a 
                    href="https://smartmoney.com/clevels"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 border-2 border-foreground/30 text-foreground px-6 py-3 rounded-lg hover:bg-foreground/5 transition-all duration-300 font-paragraph font-medium"
                  >
                    <Globe className="w-5 h-5" />
                    Portal
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="w-full py-24 lg:py-32 bg-background relative border-t border-foreground/10">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-20 gap-6 lg:gap-0">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-5xl lg:text-6xl text-foreground"
            >
              Valores Fundamentais
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="hidden lg:flex items-center gap-4 text-foreground/60"
            >
              <span className="font-paragraph text-sm uppercase tracking-widest">Role para Explorar</span>
              <ChevronDown className="w-4 h-4 animate-bounce" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {isLoadingValues ? (
              [1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-foreground/5 animate-pulse rounded-lg" />
              ))
            ) : (
              coreValues.map((value, index) => (
                <ValueCard key={value._id} value={value} index={index} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="w-full py-32 lg:py-40 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl lg:text-7xl mb-8">
              Junte-se a SM Board
            </h2>
            <p className="font-paragraph text-xl lg:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
              Conecte-se com uma rede de líderes estratégicos moldando decisões de alto impacto.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/institutional"
                className="min-w-[200px] bg-primary-foreground text-primary px-10 py-5 rounded-lg font-paragraph font-medium hover:bg-primary-foreground/90 transition-colors duration-300"
              >
                Explorar Posicionamento
              </Link>
              <Link 
                to="/contact"
                className="min-w-[200px] border-2 border-primary-foreground text-primary-foreground px-10 py-5 rounded-lg font-paragraph font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
              >
                Solicitar Acesso
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function ValueCard({ value, index }: { value: CoreValues; index: number }) {
  const yOffset = index % 2 === 0 ? 0 : 40;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: yOffset }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group relative bg-white border border-foreground/10 p-10 lg:p-12 h-full min-h-[350px] flex flex-col justify-between hover:border-primary transition-all duration-500 rounded-lg ${index % 2 !== 0 ? 'lg:mt-12' : ''}`}
    >
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <span className="font-heading text-6xl text-foreground/10 group-hover:text-primary/20 transition-colors">
            0{index + 1}
          </span>
          {value.icon && (
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
              <Image 
                src={value.icon} 
                alt="" 
                width={24} 
                className="w-6 h-6 object-contain brightness-0 group-hover:brightness-100 transition-all" 
              />
            </div>
          )}
        </div>
        
        <h3 className="font-heading text-2xl lg:text-3xl text-foreground mb-4 group-hover:text-primary transition-colors">
          {value.valueName}
        </h3>
        
        <div className="w-12 h-px bg-primary mb-6 group-hover:bg-primary/80 transition-colors" />
        
        <p className="font-paragraph text-foreground/70 leading-relaxed group-hover:text-foreground transition-colors">
          {value.description}
        </p>
      </div>

      {value.exampleOfApplication && (
        <div className="relative z-10 mt-8 pt-6 border-t border-foreground/5 group-hover:border-primary/10">
          <p className="font-paragraph text-sm text-foreground/50 italic group-hover:text-foreground/70">
            "{value.exampleOfApplication}"
          </p>
        </div>
      )}
    </motion.div>
  );
}
