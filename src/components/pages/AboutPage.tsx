import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BaseCrudService } from '@/integrations';
import { BrandEssence } from '@/entities';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Target, Users, Globe, TrendingUp, Award, Lightbulb, Linkedin } from 'lucide-react';

interface Conselheiros {
  _id: string;
  fullName?: string;
  position?: string;
  institutionalBio?: string;
  professionalPhoto?: string;
  linkedInUrl?: string;
  displayOrder?: number;
  isActive?: boolean;
}

export default function AboutPage() {
  const [brandEssence, setBrandEssence] = useState<BrandEssence | null>(null);
  const [conselheiros, setConselheiros] = useState<Conselheiros[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingConselheiros, setIsLoadingConselheiros] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const result = await BaseCrudService.getAll<BrandEssence>('brandessence');
      if (result.items.length > 0) {
        setBrandEssence(result.items[0]);
      }
      setIsLoading(false);
    };
    loadData();
  }, []);

  useEffect(() => {
    const loadConselheiros = async () => {
      const result = await BaseCrudService.getAll<Conselheiros>('conselheiros');
      const activeConselheiros = result.items
        .filter(c => c.isActive !== false)
        .sort((a, b) => (a.displayOrder || 0) - (b.displayOrder || 0));
      setConselheiros(activeConselheiros);
      setIsLoadingConselheiros(false);
    };
    loadConselheiros();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12 py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <div className="w-16 h-1 bg-accent mb-8" />
            <h1 className="font-heading text-6xl lg:text-8xl mb-8 leading-tight">
              Quem Somos
            </h1>
            <p className="font-paragraph text-2xl lg:text-3xl text-secondary-foreground/80 max-w-3xl leading-relaxed">
              {brandEssence?.summary || "Uma aliança dedicada a elevar os padrões de governança corporativa através da conexão entre conselheiros independentes e organizações visionárias."}
            </p>
          </motion.div>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <section className="w-full py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white border border-muted/20 p-12 lg:p-16"
            >
              <Target className="w-12 h-12 text-accent mb-8" />
              <h2 className="font-heading text-4xl lg:text-5xl text-primary mb-6">
                Nossa Missão
              </h2>
              <div className="w-16 h-1 bg-accent mb-8" />
              <p className="font-paragraph text-lg text-foreground/80 leading-relaxed">
                Fortalecer a governança corporativa conectando conselheiros independentes de excelência com organizações que buscam decisões estratégicas éticas, transparentes e sustentáveis. Promovemos a cultura de integridade e performance através de práticas inovadoras e alinhadas às melhores referências globais.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-primary text-primary-foreground p-12 lg:p-16"
            >
              <Lightbulb className="w-12 h-12 text-primary-foreground mb-8" />
              <h2 className="font-heading text-4xl lg:text-5xl mb-6">
                Nossa Visão
              </h2>
              <div className="w-16 h-1 bg-primary-foreground mb-8" />
              <p className="font-paragraph text-lg text-primary-foreground/90 leading-relaxed">
                Ser a principal referência em governança corporativa independente, reconhecida pela excelência na formação de conselhos estratégicos que transformam organizações e impulsionam resultados sustentáveis em escala global.
              </p>
            </motion.div>

          </div>
        </div>
      </section>
      {/* Our Story Section */}
      <section className="w-full py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="sticky top-32"
              >
                <h2 className="font-heading text-5xl lg:text-6xl text-primary mb-8">
                  Nossa História
                </h2>
                <div className="w-16 h-1 bg-accent mb-8" />
                <p className="font-paragraph text-lg text-foreground/70 leading-relaxed">
                  Nascemos da necessidade de transformar a governança corporativa em um diferencial competitivo real, conectando expertise independente com visão estratégica.
                </p>
              </motion.div>
            </div>

            <div className="lg:col-span-7 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <p className="font-paragraph text-xl text-foreground/80 leading-relaxed indent-12">
                  {brandEssence?.content || "A Alliance Board Hub foi fundada por profissionais com décadas de experiência em conselhos de administração, consultoria estratégica e governança corporativa. Identificamos uma lacuna crítica: organizações buscando conselheiros independentes qualificados e conselheiros buscando oportunidades alinhadas aos seus valores e expertise."}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="border-l-4 border-accent pl-8"
              >
                <p className="font-paragraph text-xl text-foreground/80 leading-relaxed">
                  Hoje, somos uma rede global de profissionais comprometidos com a excelência, conectando talentos diversos a organizações que valorizam governança de alto impacto. Nossa abordagem combina rigor técnico, ética inabalável e visão de futuro.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>
      {/* Differentials Section */}
      <section className="w-full py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl lg:text-6xl text-primary mb-6">
              Nossos Diferenciais
            </h2>
            <p className="font-paragraph text-lg text-foreground/70 max-w-3xl mx-auto">
              O que nos torna únicos no ecossistema de governança corporativa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                icon: Users,
                title: "Rede Qualificada",
                description: "Conselheiros certificados com experiência comprovada em diversos setores e geografias, rigorosamente selecionados."
              },
              {
                icon: Globe,
                title: "Visão Global",
                description: "Práticas internacionais adaptadas à realidade local, conectando o melhor dos dois mundos."
              },
              {
                icon: TrendingUp,
                title: "Foco em Performance",
                description: "Governança orientada a resultados sustentáveis, não apenas conformidade regulatória."
              },
              {
                icon: Award,
                title: "Independência Real",
                description: "Compromisso absoluto com a independência e ausência de conflitos de interesse."
              },
              {
                icon: Target,
                title: "Matching Estratégico",
                description: "Processo criterioso de conexão entre conselheiros e organizações baseado em fit cultural e estratégico."
              },
              {
                icon: Lightbulb,
                title: "Inovação Contínua",
                description: "Atualização constante em tendências de governança, ESG e transformação digital."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-muted/20 p-8 hover:border-accent transition-colors duration-300"
              >
                <item.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="font-heading text-2xl text-primary mb-4">
                  {item.title}
                </h3>
                <p className="font-paragraph text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>
      {/* Image Breather */}
      <section className="w-full h-[60vh] relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <Image
          src={brandEssence?.brandImage || "https://static.wixstatic.com/media/904ff8_f6b14faca1744f968654e0c5057e4581~mv2.png"}
          alt="Alliance Board Hub Team"
          className="w-full h-full object-cover"
          width={1920}
        />
      </section>
      {/* Board Members Section - Nossos Conselheiros */}
      <section className="w-full py-32 bg-background">
        <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="font-heading text-5xl lg:text-6xl text-primary mb-6">
              Nossos Conselheiros
            </h2>
            <p className="font-paragraph text-xl text-foreground/70 max-w-3xl mx-auto">
              Comprometidos com a excelência
            </p>
            <div className="w-24 h-1 bg-accent mx-auto mt-8" />
          </motion.div>

          <div className="min-h-[400px]">
            {isLoadingConselheiros ? null : conselheiros.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {conselheiros.map((conselheiro, index) => (
                  <motion.div
                    key={conselheiro._id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="bg-white border border-muted/20 overflow-hidden hover:border-accent transition-all duration-300"
                  >
                    {/* Photo */}
                    {conselheiro.professionalPhoto && (
                      <div className="aspect-[4/5] overflow-hidden bg-muted/10">
                        <Image
                          src={conselheiro.professionalPhoto}
                          alt={conselheiro.fullName || 'Conselheiro'}
                          className="w-full h-full object-cover"
                          width={400}
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-8">
                      <h3 className="font-heading text-2xl text-primary mb-2">
                        {conselheiro.fullName}
                      </h3>
                      <p className="font-paragraph text-accent font-medium mb-4">
                        {conselheiro.position}
                      </p>
                      <p className="font-paragraph text-foreground/70 leading-relaxed mb-6">
                        {conselheiro.institutionalBio}
                      </p>
                      {conselheiro.linkedInUrl && (
                        <a
                          href={conselheiro.linkedInUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-secondary hover:text-accent transition-colors"
                        >
                          <Linkedin className="w-5 h-5" />
                          <span className="font-paragraph text-sm">LinkedIn</span>
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-foreground/50 text-lg">
                  Nenhum conselheiro disponível no momento.
                </p>
              </div>
            )}
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-20"
          >
            <p className="font-paragraph text-lg text-foreground/60 italic">
              Experiência, independência e compromisso com decisões responsáveis.
            </p>
          </motion.div>

        </div>
      </section>
      <Footer />
    </div>
  );
}
