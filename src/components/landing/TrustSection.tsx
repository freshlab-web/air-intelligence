import { Calendar, Building2, Database } from "lucide-react";

const TrustSection = () => {
  const cards = [
    {
      icon: Calendar,
      title: "Desde 2014",
      description: "em operações com drones",
    },
    {
      icon: Building2,
      title: "Ativos críticos",
      description: "em grande escala",
    },
    {
      icon: Database,
      title: "Dados estruturados",
      description: "para decisão",
    },
  ];

  return (
    <section className="section-padding-sm bg-background">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              className="card-enterprise flex items-start gap-4 hover:border-primary/20 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                <card.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
