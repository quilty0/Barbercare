 Barbearia Care

Projeto desenvolvido em Next.js 15, focado em produtos premium para cuidados masculinos (barba e cabelo).

 Funcionalidades
- Página inicial com seções de destaque, benefícios, depoimentos e newsletter
- Exibição de produtos premium para barba e cabelo
- Seção de ofertas especiais e produtos em destaque
- Chatbot para atendimento ao cliente
- Layout responsivo e moderno
- Temas claro/escuro com suporte a sistema

 Estrutura do Projeto
```
project/
├── app/
│   ├── layout.tsx         # Layout raiz (com <html> e <body>)
│   ├── page.tsx           # Página principal
│   └── globals.css        # Estilos globais (Tailwind)
├── components/
│   ├── header.tsx, footer.tsx, hero-section.tsx, ...
│   └── ui/                # Componentes reutilizáveis (botão, input, etc)
├── public/                # Imagens e arquivos estáticos
├── lib/, hooks/           # Funções utilitárias e hooks customizados
├── package.json           # Dependências e scripts
├── tailwind.config.ts     # Configuração do Tailwind CSS
├── next.config.js         # Configuração do Next.js
└── ...
```

 Principais Tecnologias
- [Next.js 15](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) (componentes)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide React](https://lucide.dev/)
- [next-themes](https://github.com/pacocoursey/next-themes) (tema dinâmico)

 Como rodar localmente
```bash
# Instale as dependências
npm install

# Rode o projeto em modo desenvolvimento
npm run dev
```
Acesse http://localhost:3000

 Deploy na Vercel
1. Faça login na [Vercel](https://vercel.com/)
2. Crie um novo projeto e conecte ao seu repositório do GitHub
3. A Vercel detecta Next.js automaticamente. Basta confirmar e aguardar o deploy

 Deploy manual (Netlify ou outros)
1. Rode `npm run build` para gerar a build
2. Faça upload da pasta `.next` e arquivos necessários conforme a plataforma

 Contato
Projeto desenvolvido por Manuel Ferreira. 