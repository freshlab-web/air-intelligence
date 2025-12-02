import { DollarSign, Users, Database, Clock, AlertTriangle, TrendingUp } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    [
      { text: "Deslocamento caro e recorrente", icon: DollarSign },
      { text: "Baixa padronização entre equipes", icon: Users },
      { text: "Dados dispersos em múltiplos sistemas", icon: Database },
    ],
    [
      { text: "Demora para tomada de decisões", icon: Clock },
      { text: "Falhas detectadas tarde demais", icon: AlertTriangle },
      { text: "Custos crescentes com escala", icon: TrendingUp },
    ],
  ];

  return (
    <section className="section-padding bg-surface-elevated">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="heading-2 text-foreground animate-fade-up">
            As inspeções tradicionais não escalam com o tamanho da operação
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {problems.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-4">
              {column.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <li
                    key={problem.text}
                    className="flex items-start gap-4 p-4 rounded-lg bg-background border border-border hover-lift group animate-fade-up"
                    style={{ animationDelay: `${(colIndex * 3 + index) * 0.1}s` }}
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center group-hover:bg-destructive/20 transition-colors duration-300">
                      <Icon className="w-5 h-5 text-destructive transition-transform duration-300 group-hover:scale-110" />
                    </span>
                    <span className="body-regular text-foreground pt-2">{problem.text}</span>
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;