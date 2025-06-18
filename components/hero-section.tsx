"use client";

import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="hero-pattern min-h-[90vh] flex items-center pt-16">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-primary-foreground order-2 lg:order-1">
            <div className={cn(
              "opacity-0",
              isVisible && "animate-fade-in"
            )}>
              <div className="inline-block rounded-full bg-accent/20 text-accent px-4 py-1 text-sm font-medium mb-6">
                Qualidade Premium
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6">
                Eleve seu <span className="text-accent">estilo</span> e cuidados pessoais
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
                Produtos de alta qualidade para barba e cabelo, feitos com ingredientes naturais
                que garantem resultados excepcionais para homens que valorizam estilo e cuidado.
              </p>
            </div>
            
            <div className={cn(
              "flex flex-col sm:flex-row gap-4 mb-12 opacity-0",
              isVisible && "animate-fade-in animate-delay-200"
            )}>
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground whitespace-nowrap"
              >
                Explorar Produtos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 whitespace-nowrap"
              >
                Sobre Nossa Marca
              </Button>
            </div>
            
            <div className={cn(
              "grid grid-cols-3 gap-4 opacity-0",
              isVisible && "animate-fade-in animate-delay-300"
            )}>
              <div className="border border-primary-foreground/20 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-accent">500+</p>
                <p className="text-sm text-primary-foreground/70">Produtos Premium</p>
              </div>
              <div className="border border-primary-foreground/20 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-accent">10k+</p>
                <p className="text-sm text-primary-foreground/70">Clientes Satisfeitos</p>
              </div>
              <div className="border border-primary-foreground/20 rounded-lg p-4 text-center">
                <p className="text-2xl font-bold text-accent">98%</p>
                <p className="text-sm text-primary-foreground/70">Avaliações Positivas</p>
              </div>
            </div>
          </div>
          
          <div className={cn(
            "order-1 lg:order-2 opacity-0",
            isVisible && "animate-fade-in animate-delay-100"
          )}>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Homem com barba bem cuidada" 
                className="rounded-lg shadow-xl max-h-[600px] w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-4 rounded-lg shadow-lg max-w-[200px]">
                <div className="flex items-center mb-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                  <span className="ml-1 text-sm font-medium">4.9/5</span>
                </div>
                <p className="text-sm font-medium">Mais de 300 avaliações em produtos para barba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;