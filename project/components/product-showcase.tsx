"use client";

import { useState } from 'react';
import { ChevronRight, Star, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

// Product data
const products = {
  hair: [
    {
      id: 1,
      name: 'Shampoo Premium para Cabelo',
      description: 'Fórmula enriquecida com extratos naturais para uma limpeza profunda.',
      price: 79.90,
      rating: 4.8,
      image: 'https://www.thebarbershop.com.br/image/cache/catalog/qod/shampoo/new/beer/shampoo-barba-cabelo-qod-beer-thebarbershop-3-2000x2000.webp',
      category: 'cabelo',
      isNew: true,
      isBestSeller: false
    },
    {
      id: 2,
      name: 'Pomada Modeladora Fixação Forte',
      description: 'Fixação extra forte para estilos duradouros sem resíduos.',
      price: 89.90,
      rating: 4.9,
      image: 'https://www.thebarbershop.com.br/image/cache/catalog/muchacho/pomada/pomada-modeladora-muchacho-efeito-matte-the-barber-shop-2000x2000.webp',
      category: 'cabelo',
      isNew: false,
      isBestSeller: true
    },
    {
      id: 3,
      name: 'Condicionador Hidratante',
      description: 'Hidratação intensa para cabelos danificados por tintura ou química.',
      price: 75.90,
      rating: 4.7,
      image: 'https://radarcasa.com.br/wp-content/uploads/2024/07/31w8QJJyN-L._SL500_.jpg',
      category: 'cabelo',
      isNew: false,
      isBestSeller: false
    },
    {
      id: 4,
      name: 'Kit Modelador Completo',
      description: 'Conjunto completo com shampoo, condicionador e pomada.',
      price: 199.90,
      rating: 4.9,
      image: 'https://www.thebarbershop.com.br/image/cache/catalog/sobre-barba/kit/kit-completo-sobrebarba-jungle-boogie-shampoo-balm-condicionador-oleo-modelador-thebarbershop-1-2000x2000.webp',
      category: 'cabelo',
      isNew: true,
      isBestSeller: true
    },
  ],
  beard: [
    {
      id: 5,
      name: 'Óleo para Barba Premium',
      description: 'Óleo nutritivo que amacia a barba e hidrata a pele.',
      price: 69.90,
      rating: 4.9,
      image: 'https://barbaderespeito.com.br/cdn/shop/files/68_9ea3c12c-2500-47da-95ad-ea3432aed77e.png?v=1744993913&width=720',
      category: 'barba',
      isNew: false,
      isBestSeller: true
    },
    {
      id: 6,
      name: 'Balm para Barba',
      description: 'Balm hidratante para barba com fragrância amadeirada exclusiva.',
      price: 59.90,
      rating: 4.7,
      image: 'https://barbaderespeito.com.br/cdn/shop/files/34_561cfe85-4712-4321-bc59-bbfc6d14aa32.png?v=1744980564&width=720',
      category: 'barba',
      isNew: true,
      isBestSeller: false
    },
    {
      id: 7,
      name: 'Pente para Barba Premium',
      description: 'Pente de madeira antestática para modelar e desembaraçar a barba.',
      price: 49.90,
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1319459/pexels-photo-1319459.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'barba',
      isNew: false,
      isBestSeller: false
    },
    {
      id: 8,
      name: 'Kit Barba Perfeita',
      description: 'Kit completo com óleo, balm, shampoo e pente para barba.',
      price: 189.90,
      rating: 4.9,
      image: 'https://www.thebarbershop.com.br/image/cache/catalog/viking/kit/novos/exclusivos/kit-para-barba-viking-premium-shampoo-balm-oleo-condicionador-modelador-terra-pente-madeira-thebarbershop-lojadabarba-500x500.webp',
      category: 'barba',
      isNew: true,
      isBestSeller: true
    },
  ]
};

const ProductCard = ({ product }: { product: typeof products.hair[0] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<typeof products.hair[0] | null>(null);
  
  return (
    <>
      <div 
        className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className={cn(
              "w-full h-64 object-cover transition-transform duration-500", 
              isHovered && "scale-105"
            )}
          />
          <div className={cn(
            "absolute top-0 right-0 left-0 bottom-0 bg-foreground/60 flex items-center justify-center gap-2 transition-opacity duration-300", 
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          )}>
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="secondary" 
                  size="icon" 
                  onClick={() => setSelectedProduct(product)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle>Visualização Rápida</DialogTitle>
                </DialogHeader>
                {selectedProduct && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={selectedProduct.image} 
                        alt={selectedProduct.name} 
                        className="w-full h-full object-cover rounded-md"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        {selectedProduct.isNew && (
                          <Badge variant="secondary">Novo</Badge>
                        )}
                        {selectedProduct.isBestSeller && (
                          <Badge variant="secondary" className="bg-accent text-accent-foreground">Mais Vendido</Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{selectedProduct.name}</h3>
                      <div className="flex items-center mb-4">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={cn(
                                "w-4 h-4", 
                                i < Math.floor(selectedProduct.rating) 
                                  ? "text-accent fill-accent" 
                                  : "text-muted-foreground"
                              )} 
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-muted-foreground">
                          {selectedProduct.rating} (120 avaliações)
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4">{selectedProduct.description}</p>
                      <p className="text-2xl font-semibold mb-6">R$ {selectedProduct.price.toFixed(2)}</p>
                      <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                        <ShoppingCart className="mr-2 h-4 w-4" /> Adicionar ao Carrinho
                      </Button>
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>
            <Button variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
          {product.isNew && (
            <Badge className="absolute top-2 left-2">Novo</Badge>
          )}
          {product.isBestSeller && (
            <Badge className="absolute top-2 right-2 bg-accent text-accent-foreground">Mais Vendido</Badge>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-semibold truncate">{product.name}</h3>
          <div className="flex items-center mt-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "w-4 h-4", 
                    i < Math.floor(product.rating) ? "text-accent fill-accent" : "text-muted-foreground"
                  )} 
                />
              ))}
            </div>
            <span className="ml-2 text-xs text-muted-foreground">{product.rating}</span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-bold">R$ {product.price.toFixed(2)}</span>
            <Button variant="ghost" size="sm" className="text-accent">
              <ShoppingCart className="h-4 w-4 mr-1" /> Comprar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

const ProductShowcase = () => {
  return (
    <section id="produtos" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Produtos em Destaque</h2>
            <p className="text-muted-foreground max-w-2xl">
              Selecionamos os melhores produtos para o seu cuidado pessoal, feitos com ingredientes de alta qualidade.
            </p>
          </div>
          <Button variant="outline" className="mt-4 md:mt-0">
            Ver Todos <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </div>

        <Tabs defaultValue="hair">
          <TabsList className="mb-8">
            <TabsTrigger value="hair">Cuidados com Cabelo</TabsTrigger>
            <TabsTrigger value="beard">Cuidados com Barba</TabsTrigger>
          </TabsList>
          
          <TabsContent value="hair" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.hair.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="beard" className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.beard.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ProductShowcase;