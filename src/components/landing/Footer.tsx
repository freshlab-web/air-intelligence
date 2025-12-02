import horusLogo from "@/assets/horus-logo.png";
import { MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and tagline */}
          <div className="lg:col-span-2">
            <img src={horusLogo} alt="Horus Smart Detections" className="h-10 w-auto mb-4" />
            <p className="body-regular max-w-md">
              Automação aérea, IA e operação remota aplicadas a ativos distribuídos.
            </p>
          </div>

          {/* Brazil Office */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-foreground">BRA</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                Rodovia SC 401, 600 – sala 313<br />
                Parque Tecnológico ALFA<br />
                Florianópolis / SC / BRASIL
              </p>
            </div>
          </div>

          {/* Australia Office */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm font-semibold text-foreground">AUS</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                Level 3, 22 Market Street<br />
                Sydney / NSW / AUSTRALIA
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 HORUS SMART DETECTIONS
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                POLÍTICA DE PRIVACIDADE
              </a>
              <span className="text-muted-foreground">
                CNPJ: 19.664.563/0001-02
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
