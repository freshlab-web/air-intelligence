const BenefitsSection = () => {
  const benefits = [
    ["Redução de custos com visitas em campo", "Padronização nacional de processos", "Histórico temporal consolidado", "Detecção precoce de anomalias"],
    ["Relatórios para diretoria e operação", "Dados para planejamento e investimento", "Suporte ao compliance e ESG", "Base sólida para expansão"],
  ];

  return (
    <section className="section-padding bg-gradient-blue">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="heading-2 text-primary-foreground">
            Menos deslocamento, mais precisão e decisões em outro nível
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
          {benefits.map((column, colIndex) => (
            <ul key={colIndex} className="space-y-4">
              {column.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-foreground/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-primary-foreground/90">{benefit}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
