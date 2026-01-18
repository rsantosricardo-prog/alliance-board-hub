// HPI 1.7-V
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { BrandEssence, CoreValues } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Calendar, ChevronDown, Globe, ShieldCheck, Users } from 'lucide-react';

// --- Utility Components ---

const SectionDivider = () => (
  <div className="w-full flex justify-center py-12 opacity-20">
    <div className="h-24 w-px bg-secondary" />
  </div>
);

const Monogram = () => (
  <div className="relative w-32 h-48 border-[3px] border-primary-foreground rounded-[100%] flex flex-col items-center justify-center overflow-hidden group cursor-default transition-transform duration-700 hover:scale-105">
    <span className="font-heading text-5xl leading-none text-primary-foreground relative z-10 group-hover:-translate-y-2 transition-transform duration-500">A</span>

    <span className="font-heading text-5xl leading-none text-primary-foreground relative z-10 group-hover:translate-y-2 transition-transform duration-500">B</span>
  </div>
);

// --- Main Component ---

export default function HomePage() {
  // --- Data Fidelity Protocol: Canonical Data Sources ---
  const [brandEssence, setBrandEssence] = useState<BrandEssence | null>(null);
  const [coreValues, setCoreValues] = useState<CoreValues[]>([]);
  const [isLoadingBrand, setIsLoadingBrand] = useState(true);
  const [isLoadingValues, setIsLoadingValues] = useState(true);

  // --- Scroll Hooks for Parallax & Motion ---
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroParallax = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const scaleSpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

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

  // --- Render ---

  return (
    <div ref={containerRef} className="min-h-screen bg-background selection:bg-primary selection:text-white overflow-x-clip">
      <Header />
      {/* --- HERO SECTION: The "Ritornello" Layout --- */}
      {/* Replicating the 3-column structure: Orange Block | Image Slice | Light Content */}
      <section className="relative w-full min-h-[100vh] flex flex-col lg:grid lg:grid-cols-10 pt-20 lg:pt-0">
        
        {/* Column 1: The Anchor (Orange) - 40% */}
        <div className="lg:col-span-4 bg-primary text-primary-foreground flex flex-col justify-between p-8 lg:p-16 relative overflow-hidden order-1">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 lg:mt-24 relative z-10"
          >
            {/* Decorative Figure */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <div className="absolute inset-0 border-4 border-primary-foreground/30 rounded-full" />
                <div className="absolute inset-4 border-2 border-primary-foreground/50 rounded-full" />
                <div className="absolute inset-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-12 h-12 lg:w-16 lg:h-16 text-primary-foreground" />
                </div>
              </div>
            </motion.div>

            <div className="w-32 h-1.5 bg-primary-foreground mt-10 shadow-lg" />
            <p className="font-paragraph text-base lg:text-lg text-primary-foreground/90 mt-6 tracking-wide">
              Governança Estratégica de Excelência
            </p>
          </motion.div>

          {/* Decorative background texture for depth */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" 
               style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '40px 40px' }}>
          </div>
        </div>

        {/* Column 2: The Window (Image) - 30% */}
        <div className="lg:col-span-3 relative h-[50vh] lg:h-auto bg-foreground overflow-hidden order-2 lg:order-2 group">
          <div className="absolute inset-0 bg-black/20 z-10 group-hover:bg-black/0 transition-colors duration-700" />
          
          {/* Parallax Image Container */}
          <motion.div 
            className="w-full h-[120%] relative -top-[10%]"
            style={{ y: heroParallax }}
          >
            {isLoadingBrand ? (
              <div className="w-full h-full bg-neutral-800 animate-pulse" />
            ) : (
              <Image
                src={brandEssence?.brandImage || "https://static.wixstatic.com/media/904ff8_f6b14faca1744f968654e0c5057e4581~mv2.png?originWidth=1152&originHeight=768"}
                alt="Strategic Board Meeting"
                className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-1000 ease-out group-hover:scale-105"
                width={1200}
              />
            )}
          </motion.div>
          
          {/* Vertical Divider Line */}
          <div className="absolute right-0 top-0 bottom-0 w-px bg-white/20 z-20 hidden lg:block" />
        </div>

        {/* Column 3: The Context (Light) - 30% */}
        <div className="lg:col-span-3 bg-background flex flex-col justify-end p-8 lg:p-16 relative order-3">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-muted/5 to-transparent pointer-events-none lg:hidden" />
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-8 mb-12"
          >
            <div className="space-y-4">
              <span className="font-paragraph text-xs font-bold tracking-[0.2em] uppercase text-foreground/60">
                Próximo Capítulo
              </span>
              <h2 className="font-heading text-4xl lg:text-5xl text-foreground leading-tight">
                {brandEssence?.title || "Governança Estratégica"}
              </h2>
              <p className="font-paragraph text-foreground/70 max-w-md text-lg leading-relaxed">
                {brandEssence?.tagline || "Conectando conselheiros e organizações para decisões éticas."}
              </p>
            </div>

            <div className="pt-8 border-t border-foreground/10 flex flex-col gap-4">
              <Link 
                to="/institutional" 
                className="group flex items-center justify-between w-full bg-primary text-primary-foreground px-8 py-5 rounded-full hover:bg-secondary transition-all duration-300"
              >
                <span className="font-paragraph font-medium tracking-wide">Conheça Nossa Rede</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/events" 
                className="group flex items-center justify-between w-full bg-accent text-accent-foreground px-8 py-5 rounded-full hover:bg-accent/80 transition-all duration-300"
              >
                <span className="font-paragraph font-medium tracking-wide">Explorar Eventos</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- SECTION 2: THE ESSENCE (Cinematic Scroll) --- */}
      <section className="relative w-full bg-primary text-primary-foreground py-32 lg:py-48 overflow-hidden">
        {/* Background Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
        </div>

        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Sticky Title */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-6"
                >
                  <div className="w-12 h-1 bg-accent" />
                  <h2 className="font-heading text-5xl lg:text-7xl text-primary-foreground">
                    Nossa<br />Essência
                  </h2>
                  <p className="font-paragraph text-primary-foreground/70 text-lg max-w-xs">
                    Definindo os padrões da governança corporativa moderna através da independência e excelência.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Scrolling Content */}
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <p className="font-heading text-3xl lg:text-5xl leading-[1.4] text-primary-foreground/90 indent-12 lg:indent-24">
                  {brandEssence?.content || "Somos a ponte entre liderança visionária e execução sustentável. Em um mundo de complexidade, fornecemos a clareza necessária para que os conselhos naveguem o futuro com confiança."}
                </p>
                
                <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="border-t border-primary-foreground/20 pt-8">
                    <ShieldCheck className="w-10 h-10 text-accent mb-6" />
                    <h3 className="font-heading text-2xl mb-4 text-primary-foreground">Liderança Ética</h3>
                    <p className="font-paragraph text-primary-foreground/70">Mantendo os mais altos padrões de integridade em cada decisão e conexão que facilitamos.</p>
                  </div>
                  <div className="border-t border-primary-foreground/20 pt-8">
                    <Globe className="w-10 h-10 text-accent mb-6" />
                    <h3 className="font-heading text-2xl mb-4 text-primary-foreground">Perspectiva Global</h3>
                    <p className="font-paragraph text-primary-foreground/70">Trazendo pontos de vista diversos e melhores práticas internacionais para salas de conselho locais.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* --- SECTION 3: CORE VALUES (Staggered Grid) --- */}
      <section className="w-full py-32 bg-background relative">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 border-b border-foreground/10 pb-12">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading text-5xl lg:text-7xl text-foreground"
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {isLoadingValues ? (
              // Skeleton Loading
              ([1, 2, 3].map((i) => (
                <div key={i} className="h-96 bg-foreground/5 animate-pulse rounded-sm" />
              )))
            ) : (
              coreValues.map((value, index) => (
                <ValueCard key={value._id} value={value} index={index} />
              ))
            )}
          </div>
        </div>
      </section>
      {/* --- SECTION 4: VISUAL BREATHER (Full Bleed Image) --- */}
      <section className="w-full h-[80vh] relative overflow-hidden clip-path-slant">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.div 
          className="w-full h-full"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://static.wixstatic.com/media/904ff8_8b2ed19fab2d4bf0aac40294594cea06~mv2.png?originWidth=1920&originHeight=768"
            alt="Boardroom Atmosphere"
            className="w-full h-full object-cover"
            width={1920}
          />
        </motion.div>
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center px-6"
          >
            <p className="font-heading text-4xl lg:text-6xl text-white max-w-4xl leading-tight">
              "Governança não é apenas sobre conformidade.<br/>É sobre desempenho."
            </p>
          </motion.div>
        </div>
      </section>
      {/* --- SECTION 5: CALL TO ACTION (The Finale) --- */}
      <section className="w-full py-32 lg:py-40 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative large typography background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-10 select-none">
          <span className="font-heading text-[20vw] leading-none">ALLIANCE</span>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-5xl lg:text-7xl mb-8">
              Junte-se à Aliança
            </h2>
            <p className="font-paragraph text-xl lg:text-2xl mb-12 opacity-90 max-w-2xl mx-auto">
              Conecte-se com uma rede de conselheiros e organizações distintas moldando o futuro.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link 
                to="/institutional"
                className="min-w-[200px] bg-accent text-accent-foreground px-10 py-5 rounded-full font-paragraph font-medium hover:bg-accent/80 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Faça Parte da Rede
              </Link>
              <Link 
                to="/contact"
                className="min-w-[200px] border-2 border-primary-foreground text-primary-foreground px-10 py-5 rounded-full font-paragraph font-medium hover:bg-primary-foreground hover:text-primary transition-colors duration-300"
              >
                Entre em Contato
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
      {/* Custom Styles for specific effects */}
      <style>{`
        .clip-path-slant {
          clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
      `}</style>
    </div>
  );
}

// --- Sub-Components ---

function ValueCard({ value, index }: { value: CoreValues; index: number }) {
  // Staggered vertical offset based on index
  const yOffset = index % 2 === 0 ? 0 : 60;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: yOffset }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`group relative bg-white border border-muted/20 p-10 lg:p-12 h-full min-h-[400px] flex flex-col justify-between hover:border-accent transition-colors duration-500 ${index % 2 !== 0 ? 'lg:mt-16' : ''}`}
    >
      {/* Hover Reveal Background */}
      <div className="absolute inset-0 bg-secondary transform scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 z-0" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-8">
          <span className="font-heading text-6xl text-foreground/10 group-hover:text-secondary-foreground/20 transition-colors">
            0{index + 1}
          </span>
          {value.icon && (
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors">
              <Image 
                src={value.icon} 
                alt="" 
                width={24} 
                className="w-6 h-6 object-contain brightness-0 group-hover:brightness-200 transition-all" 
              />
            </div>
          )}
        </div>
        
        <h3 className="font-heading text-3xl text-foreground mb-4 group-hover:text-secondary-foreground transition-colors">
          {value.valueName}
        </h3>
        
        <div className="w-12 h-px bg-accent mb-6 group-hover:bg-secondary-foreground/50 transition-colors" />
        
        <p className="font-paragraph text-foreground/70 leading-relaxed group-hover:text-secondary-foreground/80 transition-colors">
          {value.description}
        </p>
      </div>

      {value.exampleOfApplication && (
        <div className="relative z-10 mt-8 pt-6 border-t border-foreground/5 group-hover:border-secondary-foreground/10">
          <p className="font-paragraph text-sm text-foreground/50 italic group-hover:text-secondary-foreground/60">
            "{value.exampleOfApplication}"
          </p>
        </div>
      )}
    </motion.div>
  );
}