import { Code2, Globe, Smartphone, Brain } from "lucide-react";
import { Card } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Desenvolvimento de Sistemas",
      description: "Sistemas personalizados e escaláveis para automatizar e otimizar processos empresariais.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Globe,
      title: "Criação de Sites",
      description: "Sites modernos, responsivos e otimizados para SEO que convertem visitantes em clientes.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Smartphone,
      title: "Aplicativos Mobile",
      description: "Apps nativos e híbridos para iOS e Android com interface intuitiva e performance superior.",
      gradient: "from-accent to-primary",
    },
    {
      icon: Brain,
      title: "Inteligência Artificial",
      description: "Soluções de IA e Machine Learning para automatizar tarefas e gerar insights valiosos.",
      gradient: "from-primary via-secondary to-accent",
    },
  ];

  return (
    <section id="servicos" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nossos <span className="bg-gradient-primary bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Soluções tecnológicas completas para transformar o seu negócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group relative p-8 bg-card border-border hover:border-primary/50 transition-all duration-500 hover:shadow-card hover:-translate-y-2 animate-scale-in overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="text-background" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${service.gradient} group-hover:w-full transition-all duration-500`} />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
