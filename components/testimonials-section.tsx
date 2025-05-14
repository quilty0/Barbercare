"use client";

import { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Rafael Silva',
    avatar: 'RS',
    avatarUrl: 'https://i.pinimg.com/736x/e6/a9/8a/e6a98a257565d829009a1c1735ee1589.jpg',
    role: 'Designer Gráfico',
    content: 'Os produtos da Barbearia Care transformaram minha rotina de cuidados pessoais. O óleo para barba é simplesmente incrível, deixando minha barba macia e com um aroma incrível que dura o dia todo.',
    rating: 5
  },
  {
    name: 'André Costa',
    avatar: 'AC',
    avatarUrl: 'https://i.pinimg.com/736x/88/e6/ce/88e6cec081f9ee09e7906ce93215387b.jpg',
    role: 'Desenvolvedor Web',
    content: 'A pomada modeladora é o melhor produto que já usei. Tenho cabelos difíceis de controlar, mas com esse produto consigo manter o estilo o dia todo sem ficar com aspecto oleoso. Super recomendo!',
    rating: 5
  },
  {
    name: 'Marcos Oliveira',
    avatar: 'MO',
    avatarUrl: 'https://i.pinimg.com/736x/83/b6/a1/83b6a1b6409acfa37c84ad5a319fd5c3.jpg',
    role: 'Empresário',
    content: 'Como executivo, preciso estar sempre apresentável. O kit completo da Barbearia Care me ajuda a manter a aparência profissional que preciso. A qualidade é excepcional e vale cada centavo investido.',
    rating: 4
  },
  {
    name: 'Lucas Mendes',
    avatar: 'LM',
    avatarUrl: 'https://i.pinimg.com/736x/03/1a/97/031a97f8e0865e98ef208cd56a5c8d43.jpg',
    role: 'Fotógrafo',
    content: 'Depois de usar o balm para barba, nunca mais tive problemas com ressecamento. Os produtos têm um cheiro incrível e a entrega foi super rápida. Já estou na minha segunda compra.',
    rating: 5
  },
  {
    name: 'Gabriel Santos',
    avatar: 'GS',
    avatarUrl: 'https://i.pinimg.com/736x/5c/71/24/5c71248b8a38abd3210f2a656f0a0bbe.jpg',
    role: 'Advogado',
    content: 'A qualidade dos produtos é impressionante. Já tentei várias marcas, mas os produtos da Barbearia Care estão em outro nível. O atendimento ao cliente também é excelente.',
    rating: 5
  }
];

const TestimonialsSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-muted-foreground">
            Mais de 10.000 homens já transformaram sua rotina de cuidados pessoais
            com os produtos exclusivos da Barbearia Care.
          </p>
        </div>

        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-6 py-4 hide-scrollbar snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="min-w-[300px] sm:min-w-[350px] snap-center border shadow-md"
              >
                <CardHeader className="pb-0">
                  <div className="flex justify-between items-center">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "w-4 h-4", 
                            i < testimonial.rating ? "text-accent fill-accent" : "text-muted"
                          )} 
                        />
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollLeft}
              className="h-8 w-8 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={scrollRight}
              className="h-8 w-8 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-4xl font-bold text-accent mb-2">98%</h3>
            <p className="text-muted-foreground">Clientes Satisfeitos</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-4xl font-bold text-accent mb-2">10k+</h3>
            <p className="text-muted-foreground">Clientes Ativos</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-4xl font-bold text-accent mb-2">50k+</h3>
            <p className="text-muted-foreground">Produtos Vendidos</p>
          </div>
          <div className="p-6 bg-secondary rounded-lg">
            <h3 className="text-4xl font-bold text-accent mb-2">30+</h3>
            <p className="text-muted-foreground">Prêmios de Qualidade</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;