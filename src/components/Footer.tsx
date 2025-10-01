import { Facebook, Twitter, Linkedin, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Github, href: "#" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-background font-bold text-xl">T</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              TechCorp
            </span>
          </div>

          <p className="text-muted-foreground text-center max-w-md">
            Transformando ideias em realidade através da tecnologia e inovação
          </p>

          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted hover:bg-primary/20 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="text-muted-foreground group-hover:text-primary transition-colors" size={20} />
                </a>
              );
            })}
          </div>

          <div className="w-full h-px bg-gradient-primary opacity-20" />

          <div className="text-center text-sm text-muted-foreground">
            <p>© {currentYear} TechCorp. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
