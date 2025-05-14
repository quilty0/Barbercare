import { Award, Truck, Gift, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const benefits = [
  {
    icon: <Award className="h-10 w-10 text-accent" />,
    title: 'Qualidade Premium',
    description: 'Produtos feitos com ingredientes naturais de alta qualidade para garantir os melhores resultados.'
  },
  {
    icon: <Truck className="h-10 w-10 text-accent" />,
    title: 'Entrega Rápida',
    description: 'Envio expresso para todo o Brasil. Receba seus produtos em até 3 dias úteis.'
  },
  {
    icon: <Shield className="h-10 w-10 text-accent" />,
    title: 'Garantia de Satisfação',
    description: 'Não ficou satisfeito? Devolvemos seu dinheiro em até 30 dias, sem questionamentos.'
  },
  {
    icon: <Gift className="h-10 w-10 text-accent" />,
    title: 'Programa de Fidelidade',
    description: 'Acumule pontos em cada compra e troque por produtos ou descontos exclusivos.'
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Por que escolher a Barbearia Care?
          </h2>
          <p className="text-muted-foreground">
            Na Barbearia Care, comprometemo-nos a oferecer produtos de alta qualidade
            para garantir que você tenha a melhor experiência de cuidado pessoal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="mb-4">{benefit.icon}</div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-accent/10 rounded-lg p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                Compromisso com a Qualidade
              </h3>
              <p className="text-muted-foreground mb-6">
                Todos os nossos produtos são formulados com ingredientes naturais de alta qualidade,
                sem parabenos, sulfatos ou corantes artificiais. Nosso compromisso é oferecer
                produtos que realmente funcionam, respeitando sua pele e o meio ambiente.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-accent mr-3"></div>
                  <span>Ingredientes naturais e sustentáveis</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-accent mr-3"></div>
                  <span>Sem testes em animais</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-accent mr-3"></div>
                  <span>Embalagens recicláveis</span>
                </div>
                <div className="flex items-center">
                  <div className="h-4 w-4 rounded-full bg-accent mr-3"></div>
                  <span>Fragrâncias exclusivas desenvolvidas na França</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1557934866-ac7ee37e1453?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Produtos de qualidade" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;