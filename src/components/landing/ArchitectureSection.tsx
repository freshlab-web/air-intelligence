import { Button } from "@/components/ui/button";
import { Plane, Clock, Brain, FileText } from "lucide-react";

const ArchitectureSection = () => {
  const steps = [
    {
      icon: Plane,
      step: "Passo 1",
      title: "Captura e coleta",
      description: "Drones, DJI Dock ou rede pilotos",
    },
    {
      icon: Clock,
      step: "Passo 2",
      title: "Voo automático",
      description: "Missões recorrentes programadas",
    },
    {
      icon: Brain,
      step: "Passo 3",
      title: "IA & Multilayer (Software personalizado)",
      description: "Detecção e classificação das anomalias. Solução cloud com IA & Multilayer para centralização dos dados",
    },
    {
      icon: FileText,
      step: "Passo 4",
      title: "Relatórios e integração",
      description: "Informação pronta para tomada de decisão integrada ao sistema operacional",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Timeline */}
          <div>
            <h2 className="heading-2 text-foreground mb-10">
              Fluxo da Arquitetura
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-8 bottom-8 w-px bg-border" />
              
              <div className="space-y-8">
                {steps.map((step, index) => (
                  <div key={step.step} className="relative flex gap-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent border-2 border-primary/20 flex items-center justify-center z-10">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="pt-2">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {step.step}
                      </span>
                      <h3 className="font-semibold text-foreground mt-1">{step.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Card */}
          <div className="flex items-center">
            <div className="card-enterprise bg-surface-elevated w-full">
              <h3 className="heading-3 text-foreground mb-4">
                O mesmo dado suportando diferentes áreas da empresa
              </h3>
              <p className="body-regular mb-6">
                Uma única fonte de dados estruturados alimentando decisões operacionais, técnicas e executivas em toda a organização.
              </p>
              
              <div className="aspect-video bg-muted rounded-lg mb-6 flex items-center justify-center border border-border overflow-hidden">
                <div className="text-center p-8">
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {["Operação", "Engenharia", "Diretoria"].map((area) => (
                      <div key={area} className="bg-background rounded-lg p-3 border border-border">
                        <span className="text-xs font-medium text-muted-foreground">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="w-px h-8 bg-primary mx-auto" />
                  <div className="bg-accent rounded-lg p-3 border border-primary/20 mt-2">
                    <span className="text-xs font-medium text-primary">Monitora Technology™</span>
                  </div>
                </div>
              </div>

              <Button variant="enterprise" className="w-full">
                Agendar reunião técnica
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
