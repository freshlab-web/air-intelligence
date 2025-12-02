import { Button } from "@/components/ui/button";
const horusLogo = "https://cdn.jsdelivr.net/gh/freshlab-web/air-intelligence@main/dist/assets/horus-logo-C2rrXbpb.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img src={horusLogo} alt="Horus Smart Detections" className="h-8 md:h-10 w-auto" />
          </a>
          <Button variant="enterprise" size="default">
            Agendar reunião
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
