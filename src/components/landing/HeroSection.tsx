import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import heroDashboard from "@/assets/hero-dashboard.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
const heroContent = [{
  badge: "Arquitetura integrada Monitora Technology™",
  title: "Operação remota inteligente para ativos distribuídos",
  subtitle: "DJI Dock, IA e Monitora Technology™ aplicados a inspeções críticas em escala nacional.",
  pills: ["Operação remota", "Missões automatizadas", "IA multilayer", "Dados estruturados"]
}, {
  badge: "Monitoramento em larga escala",
  title: "Monitoramento remoto de ativos em larga escala",
  subtitle: "Soluções personalizadas envolvendo drones, softwares e relatórios automatizados.",
  pills: ["Visão 360°", "Relatórios automáticos", "Cobertura nacional", "Análise preditiva"]
}, {
  badge: "Automação de inspeções",
  title: "Sistemas automatizados para inspeção de ativos",
  subtitle: "Monitoramento remoto com uso de drones, IA e softwares personalizados.",
  pills: ["Inspeção autônoma", "IA integrada", "Software dedicado", "Suporte 24/7"]
}];
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev + 1) % heroContent.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(prev => (prev - 1 + heroContent.length) % heroContent.length);
    setTimeout(() => setIsAnimating(false), 500);
  };
  const current = heroContent[currentSlide];
  return <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-hero relative overflow-hidden">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 md:space-y-8">
            <div key={`badge-${currentSlide}`} className="badge-tech animate-fade-up" style={{
            animationDelay: "0.1s"
          }}>
              {current.badge}
            </div>

            <h1 key={`title-${currentSlide}`} className="heading-1 text-foreground animate-fade-up" style={{
            animationDelay: "0.2s"
          }}>
              {current.title}
            </h1>

            <p key={`subtitle-${currentSlide}`} className="body-large max-w-xl animate-fade-up" style={{
            animationDelay: "0.3s"
          }}>
              {current.subtitle}
            </p>

            <div key={`pills-${currentSlide}`} className="flex-wrap gap-[8px] flex items-start justify-start mx-0 px-0 animate-fade-up" style={{
            animationDelay: "0.4s"
          }}>
              {current.pills.map(pill => <span key={pill} className="pill-tag transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  {pill}
                </span>)}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-fade-up" style={{
            animationDelay: "0.5s"
          }}>
              <Button variant="hero-primary" size="xl">
                Agendar reunião técnica
              </Button>
              <Button variant="hero-secondary" size="xl">
                Ver arquitetura
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="flex items-center gap-4 pt-4">
              <button onClick={prevSlide} className="p-2 rounded-full border border-border hover:bg-secondary transition-colors" aria-label="Slide anterior">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {heroContent.map((_, index) => <button key={index} onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }} className={`h-2 rounded-full transition-all duration-300 ${index === currentSlide ? "w-8 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"}`} aria-label={`Ir para slide ${index + 1}`} />)}
              </div>
              <button onClick={nextSlide} className="p-2 rounded-full border border-border hover:bg-secondary transition-colors" aria-label="Próximo slide">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-slide-in-right" style={{
          animationDelay: "0.3s"
        }}>
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-border hover-lift">
              <img alt="Dashboard de monitoramento com drone e dados analíticos" className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105" src="/lovable-uploads/388283a7-82de-44b3-8fbb-a98407ad4857.jpg" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;