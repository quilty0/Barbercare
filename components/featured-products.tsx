"use client";

import { useState } from 'react';
import { ArrowRight, Star, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const products = [
  {
    id: 1,
    name: 'Kit Completo Barba & Cabelo',
    description: 'Kit completo com shampoo, condicionador, óleo e balm para barba, e pomada modeladora.',
    price: 299.90,
    originalPrice: 369.90,
    rating: 4.9,
    discount: 20,
    image: 'https://images.pexels.com/photos/905186/pexels-photo-905186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    features: ['Produto Premium', 'Ingredientes Naturais', 'Sem Parabenos', 'Fragrância Exclusiva']
  }
];

const FeaturedProducts = () => {
  const [isHovered, setIsHovered] = useState(false);
  const product = products[0];

  return (
    <section id="ofertas" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ofertas Especiais</h2>
            <p className="text-muted-foreground max-w-2xl">
              Economize em nossos kits especiais e produtos em destaque. Ofertas por tempo limitado.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            Ver Todas Ofertas <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-card rounded-lg overflow-hidden shadow-lg">
          <div 
            className="relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className={cn(
                "w-full h-full object-cover transition-transform duration-700", 
                isHovered && "scale-105"
              )}
            />
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground text-lg px-3 py-1.5">
              -{product.discount}%
            </Badge>
          </div>
          
          <div className="p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">{product.name}</h3>
            
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={cn(
                      "w-5 h-5", 
                      i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-muted-foreground"
                    )} 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-muted-foreground">
                {product.rating} (256 avaliações)
              </span>
            </div>
            
            <p className="text-muted-foreground mb-6">{product.description}</p>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold">R$ {product.price.toFixed(2)}</span>
              <span className="text-xl text-muted-foreground line-through">
                R$ {product.originalPrice.toFixed(2)}
              </span>
              <Badge variant="outline" className="text-accent border-accent">
                Economize R$ {(product.originalPrice - product.price).toFixed(2)}
              </Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-accent mr-2"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar ao Carrinho
              </Button>
              <Button size="lg" variant="outline">
                Comprar Agora
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              *Oferta válida por tempo limitado. Frete grátis para todo o Brasil.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;