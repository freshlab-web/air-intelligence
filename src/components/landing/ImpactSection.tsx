import { Sun, Radio, Zap, Building2, Shield, Factory, Construction } from "lucide-react";

const ImpactSection = () => {
  const sectors = [
    { name: "Energia Solar (O&M e vigilância patrimonial)", icon: Sun },
    { name: "Telecom", icon: Radio },
    { name: "Utilities / Distribuição", icon: Zap },
    { name: "Smart Cities", icon: Building2 },
    { name: "Segurança Patrimonial", icon: Shield },
    { name: "Indústria & Portos", icon: Factory },
    { name: "Infraestrutura", icon: Construction },
  ];

  return (
    <section className="section-padding-sm bg-surface-elevated overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="heading-2 text-foreground animate-fade-up">
            Uma mesma arquitetura personalizada para diferentes cenários
          </h2>
        </div>

        <div className="flex flex-col items-center gap-4">
          {/* First row - 3 items */}
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.slice(0, 3).map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.name}
                  className="group relative px-5 py-3 rounded-full bg-background border border-border hover:border-primary hover:bg-primary hover:shadow-lg transition-all duration-300 cursor-default animate-fade-up flex items-center gap-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative">
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:animate-bounce" />
                  </span>
                  <span className="text-sm font-medium text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300">
                    {sector.name}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                </div>
              );
            })}
          </div>
          {/* Second row - 4 items */}
          <div className="flex flex-wrap justify-center gap-4">
            {sectors.slice(3).map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.name}
                  className="group relative px-5 py-3 rounded-full bg-background border border-border hover:border-primary hover:bg-primary hover:shadow-lg transition-all duration-300 cursor-default animate-fade-up flex items-center gap-2"
                  style={{ animationDelay: `${(index + 3) * 0.1}s` }}
                >
                  <span className="relative">
                    <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:animate-bounce" />
                  </span>
                  <span className="text-sm font-medium text-secondary-foreground group-hover:text-primary-foreground transition-colors duration-300">
                    {sector.name}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
