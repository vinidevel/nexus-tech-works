import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-glow opacity-50" />
      
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Tecnologia e Inovação"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-glow-pulse">
            <Sparkles className="text-primary" size={20} />
            <span className="text-sm font-medium text-foreground">Inovação em Tecnologia</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transformamos
            <span className="block bg-gradient-primary bg-clip-text text-transparent animate-float">
              Ideias em Realidade
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
            Desenvolvimento de sistemas, sites, aplicativos e soluções em inteligência artificial
            para impulsionar o seu negócio no mundo digital
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("servicos")}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg px-8 group"
            >
              Conheça Nossos Serviços
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contato")}
              className="border-primary/30 hover:bg-primary/10 transition-all duration-300 text-lg px-8"
            >
              Fale Conosco
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Projetos" },
              { number: "200+", label: "Clientes" },
              { number: "10+", label: "Anos" },
              { number: "98%", label: "Satisfação" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
