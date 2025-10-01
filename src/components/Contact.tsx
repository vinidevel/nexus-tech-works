import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contato@techcorp.com",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (11) 9999-9999",
      gradient: "from-secondary to-accent",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "São Paulo, SP - Brasil",
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section id="contato" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Entre em <span className="bg-gradient-primary bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar suas ideias em realidade? Vamos conversar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-card text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${info.gradient} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="text-background" size={24} />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground">{info.content}</p>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-2xl mx-auto p-8 bg-card border-border animate-fade-in-up">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome
                </label>
                <Input
                  type="text"
                  placeholder="Seu nome"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="seu@email.com"
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Telefone
              </label>
              <Input
                type="tel"
                placeholder="(11) 99999-9999"
                required
                className="bg-background border-border focus:border-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Mensagem
              </label>
              <Textarea
                placeholder="Conte-nos sobre seu projeto..."
                required
                rows={5}
                className="bg-background border-border focus:border-primary resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 text-lg group"
            >
              Enviar Mensagem
              <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
