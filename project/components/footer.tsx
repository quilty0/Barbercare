import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              BARBEARIA<span className="text-accent">CARE</span>
            </h3>
            <p className="text-muted-foreground mb-4">
              Produtos premium para o cuidado masculino. Qualidade excepcional para barba e cabelo.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-accent">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">Início</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">Produtos</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">Sobre Nós</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-accent transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-accent" />
                <span className="text-muted-foreground">Av. Paulista, 1000, São Paulo</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-accent" />
                <span className="text-muted-foreground">(11) 9999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-accent" />
                <span className="text-muted-foreground">contato@barbeariacare.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Newsletter</h4>
            <p className="text-muted-foreground mb-4">
              Receba ofertas exclusivas e dicas de cuidados masculinos.
            </p>
            <div className="flex flex-col space-y-2">
              <Input 
                type="email" 
                placeholder="Seu e-mail" 
                className="bg-primary-foreground text-foreground"
              />
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Inscrever-se
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Barbearia Care. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Termos de Uso
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                Política de Privacidade
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;