"use client";

import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

type Message = {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
};

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Olá! Sou o assistente virtual da Barbearia Care. Como posso ajudar você hoje?",
    isBot: true,
    timestamp: new Date(),
  },
];

const quickResponses = [
  "Como escolher o óleo certo para minha barba?",
  "Qual o prazo de entrega?",
  "Vocês têm produtos para peles sensíveis?",
  "Como funciona a garantia de satisfação?",
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text,
      isBot: false,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate bot thinking
    setTimeout(() => {
      let botResponse = "";
      
      // Simple pattern matching for demo purposes
      const lowerText = text.toLowerCase();
      if (lowerText.includes("óleo") || lowerText.includes("barba")) {
        botResponse = "Para escolher o óleo ideal para sua barba, considere seu tipo de pelo e pele. Temos opções para peles sensíveis e pelos grossos. Nosso bestseller é o Óleo Premium com aroma amadeirado.";
      } else if (lowerText.includes("entrega") || lowerText.includes("prazo")) {
        botResponse = "Realizamos entregas para todo o Brasil! O prazo médio é de 3 a 5 dias úteis. Para compras acima de R$199, o frete é grátis.";
      } else if (lowerText.includes("sensív") || lowerText.includes("alergi")) {
        botResponse = "Sim, temos uma linha específica para peles sensíveis, sem fragrâncias e com ingredientes hipoalergênicos. Recomendo a linha Sensitive Care.";
      } else if (lowerText.includes("garantia") || lowerText.includes("devolu")) {
        botResponse = "Oferecemos garantia de satisfação de 30 dias. Se você não ficar satisfeito com qualquer produto, devolvemos seu dinheiro integralmente, sem questionamentos.";
      } else {
        botResponse = "Obrigado pela sua mensagem! Um de nossos atendentes entrará em contato em breve para te ajudar melhor. Caso prefira, você pode nos contatar pelo WhatsApp (11) 99999-9999.";
      }

      const newBotMessage: Message = {
        id: Date.now(),
        text: botResponse,
        isBot: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg bg-accent hover:bg-accent/90 text-accent-foreground z-50"
        size="icon"
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-4 right-4 w-[90vw] sm:w-[400px] bg-background rounded-xl shadow-xl z-50 overflow-hidden transition-all duration-300 flex flex-col",
          isOpen ? "h-[500px] opacity-100" : "h-0 opacity-0 pointer-events-none"
        )}
      >
        {/* Header */}
        <div className="p-4 bg-primary text-primary-foreground flex justify-between items-center">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src="/logo.png" alt="Barbearia Care" />
              <AvatarFallback>BC</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium">Atendimento Barbearia Care</h3>
              <p className="text-xs text-primary-foreground/70">Online</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="text-primary-foreground/90 hover:text-primary-foreground hover:bg-primary-foreground/10"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-grow p-4">
          <div className="space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex",
                  msg.isBot ? "justify-start" : "justify-end"
                )}
              >
                <div
                  className={cn(
                    "max-w-[80%] rounded-xl p-3",
                    msg.isBot
                      ? "bg-secondary text-secondary-foreground rounded-tl-none"
                      : "bg-primary text-primary-foreground rounded-tr-none"
                  )}
                >
                  <p>{msg.text}</p>
                  <span className="text-xs opacity-70 mt-1 block text-right">
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-secondary text-secondary-foreground rounded-xl rounded-tl-none p-3">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce" />
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce delay-75" />
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce delay-150" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Quick responses */}
        <div className="px-4 py-2 border-t border-border">
          <ScrollArea className="whitespace-nowrap">
            <div className="flex space-x-2">
              {quickResponses.map((response, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="whitespace-nowrap text-xs"
                  onClick={() => handleSend(response)}
                >
                  {response}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center space-x-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-grow"
            />
            <Button
              type="submit"
              size="icon"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              disabled={!input.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Chatbot;