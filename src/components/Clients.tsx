import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Clients = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Tech Solutions",
      text: "A TechCorp transformou completamente nossos processos. O sistema desenvolvido superou todas as expectativas!",
      rating: 5,
    },
    {
      name: "Marina Santos",
      company: "Digital Commerce",
      text: "Profissionais extremamente competentes. Nosso app mobile teve mais de 50 mil downloads no primeiro mês!",
      rating: 5,
    },
    {
      name: "Roberto Oliveira",
      company: "Innovation Labs",
      text: "A solução de IA que implementaram economizou 60% do tempo da nossa equipe. Simplesmente incrível!",
      rating: 5,
    },
  ];

  return (
    <section id="clientes" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            O Que Dizem Nossos <span className="bg-gradient-accent bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Confiança e resultados que falam por si
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="relative p-8 bg-card border-border hover:border-accent/50 transition-all duration-500 hover:shadow-card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <Quote className="absolute top-6 right-6 text-primary/20" size={48} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="fill-accent text-accent" size={20} />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            {["Empresa A", "Empresa B", "Empresa C", "Empresa D", "Empresa E"].map((client, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-muted-foreground/30 hover:text-foreground/50 transition-colors duration-300"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
