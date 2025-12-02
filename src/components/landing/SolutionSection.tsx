import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import dashboardMultilayer from "@/assets/dashboard-multilayer.jpg";
const SolutionSection = () => {
  const features = ["Drones + rede de pilotos por todo território nacional", "DJI Dock, para operações remotas", "Sensores RGB, Termográficos em fotografias ou vídeo", "Inteligência artificial para detectar e automatizar inspeções", "Software personalizado para centralização dos relatórios e dados gerados", "Histórico temporal em mapas interativos e dashboards", "Informações técnicas e executivas para melhor tomada de decisão"];
  return <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="heading-2 text-foreground">
              Uma arquitetura contínua que conecta captura, automação e inteligência
            </h2>

            <ul className="space-y-3">
              {features.map(feature => <li key={feature} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <span className="body-regular text-foreground">{feature}</span>
                </li>)}
            </ul>

            <Button variant="enterprise-outline" className="group">
              Ver fluxo da operação
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden border border-border shadow-lg">
              <img alt="Dashboard multilayer com visualização de dados geográficos" className="w-full h-auto object-cover" src="/lovable-uploads/650958c5-99be-4a18-8878-26dbd3e60617.webp" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;