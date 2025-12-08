import { Button } from "@/components/ui/button";
import teamOperations from "@/assets/team-operations.jpg";
const WhyHorusSection = () => {
  const reasons = ["Desde 2014 no mercado de drones", "Especialistas em soluções personalizadas de monitoramento remoto", "Experts em soluções complexas de gestão de ativos em larga escala", "Desenvolvimento de softwares personalizados", "Rede nacional de pilotos certificados", "Experiência com utilities e operação crítica"];
  return <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <h2 className="heading-2 text-foreground">
              Experiência em campo somada à inteligência de dados
            </h2>

            <ul className="space-y-3">
              {reasons.map(reason => <li key={reason} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center mt-0.5">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                  </span>
                  <span className="body-regular text-foreground">{reason}</span>
                </li>)}
            </ul>

            <Button
              variant="enterprise"
              size="xl"
              onClick={() => {
                const el = document.getElementById("rd-column-jsdbj8lz");
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
            >
              Falar com um especialista Horus
            </Button>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="rounded-xl overflow-hidden border border-border shadow-lg">
              <img alt="Centro de operações Horus Smart Detections" className="w-full h-auto object-cover" src="https://cdn.jsdelivr.net/gh/freshlab-web/air-intelligence@main/dist/lovable-uploads/8d71be00-af50-4706-b691-113d13363a42.webp" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default WhyHorusSection;
