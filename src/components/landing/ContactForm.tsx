import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    segment: "",
    scale: "",
    interest: "",
    description: "",
    lgpd: false,
  });

  const segments = [
    "Energia Solar (O&M)",
    "Telecom",
    "Utilities / Distribuição",
    "Smart Cities",
    "Segurança Patrimonial",
    "Indústria & Portos",
    "Infraestrutura",
    "Outro",
  ];

  const scales = [
    "Até 100 ativos",
    "100 a 500 ativos",
    "500 a 1.000 ativos",
    "Mais de 1.000 ativos",
  ];

  const interests = [
    "DJI Dock para operação remota",
    "IA para detecção de anomalias",
    "Plataforma Multilayer",
    "Rede de pilotos",
    "Solução completa",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.lgpd) {
      toast({
        title: "Atenção",
        description: "Por favor, aceite a política de privacidade para continuar.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Mensagem enviada!",
      description: "Nossa equipe entrará em contato em breve.",
    });
  };

  return (
    <section className="section-padding bg-gradient-dark">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-primary-foreground mb-4">
              Fale com nossos especialistas
            </h2>
            <p className="text-primary-foreground/70">
              Preencha o formulário e nossa equipe técnica entrará em contato.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-foreground/80">Nome</label>
                <Input
                  placeholder="Seu nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-dark-surface border-border text-primary-foreground placeholder:text-primary-foreground/40"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-foreground/80">E-mail corporativo</label>
                <Input
                  type="email"
                  placeholder="email@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-dark-surface border-border text-primary-foreground placeholder:text-primary-foreground/40"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-foreground/80">Empresa</label>
                <Input
                  placeholder="Nome da empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-dark-surface border-border text-primary-foreground placeholder:text-primary-foreground/40"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-foreground/80">Cargo</label>
                <Input
                  placeholder="Seu cargo"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="bg-dark-surface border-border text-primary-foreground placeholder:text-primary-foreground/40"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-foreground/80">Segmento</label>
                <Select onValueChange={(value) => setFormData({ ...formData, segment: value })}>
                  <SelectTrigger className="bg-dark-surface border-border text-primary-foreground">
                    <SelectValue placeholder="Selecione o segmento" />
                  </SelectTrigger>
                  <SelectContent>
                    {segments.map((segment) => (
                      <SelectItem key={segment} value={segment}>{segment}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-primary-foreground/80">Escala da operação</label>
                <Select onValueChange={(value) => setFormData({ ...formData, scale: value })}>
                  <SelectTrigger className="bg-dark-surface border-border text-primary-foreground">
                    <SelectValue placeholder="Selecione a escala" />
                  </SelectTrigger>
                  <SelectContent>
                    {scales.map((scale) => (
                      <SelectItem key={scale} value={scale}>{scale}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-primary-foreground/80">Interesse principal</label>
              <Select onValueChange={(value) => setFormData({ ...formData, interest: value })}>
                <SelectTrigger className="bg-dark-surface border-border text-primary-foreground">
                  <SelectValue placeholder="Selecione seu interesse" />
                </SelectTrigger>
                <SelectContent>
                  {interests.map((interest) => (
                    <SelectItem key={interest} value={interest}>{interest}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-primary-foreground/80">Descrição da operação</label>
              <Textarea
                placeholder="Descreva brevemente sua operação e desafios atuais..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-dark-surface border-border text-primary-foreground placeholder:text-primary-foreground/40 min-h-[120px]"
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox
                id="lgpd"
                checked={formData.lgpd}
                onCheckedChange={(checked) => setFormData({ ...formData, lgpd: checked as boolean })}
                className="mt-1 border-primary-foreground/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
              />
              <label htmlFor="lgpd" className="text-sm text-primary-foreground/70 cursor-pointer">
                Concordo com a coleta e tratamento dos meus dados conforme a Política de Privacidade da Horus Smart Detections, em conformidade com a LGPD.
              </label>
            </div>

            <Button variant="on-dark" size="xl" className="w-full">
              Enviar e agendar análise técnica
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
