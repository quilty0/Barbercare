"use client";

import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um endereço de email válido.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    // Simulando envio para o servidor
    setTimeout(() => {
      toast({
        title: "Inscrição realizada com sucesso!",
        description: "Você receberá nossas ofertas exclusivas no email cadastrado.",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-16 bg-primary text-primary-foreground hero-pattern">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block p-3 bg-accent/20 rounded-full">
            <Mail className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Receba Ofertas Exclusivas
          </h2>
          <p className="text-primary-foreground/80 mb-8">
            Inscreva-se em nossa newsletter e ganhe 15% de desconto em sua primeira compra,
            além de receber ofertas exclusivas e conteúdo especial sobre cuidados masculinos.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Seu melhor email"
              className="bg-primary-foreground text-foreground h-12"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground h-12 px-8"
              disabled={isLoading}
            >
              {isLoading ? "Inscrevendo..." : "Inscrever-se"}
            </Button>
          </form>
          <p className="text-primary-foreground/60 text-sm mt-4">
            Respeitamos sua privacidade. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;