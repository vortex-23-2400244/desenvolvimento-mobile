# 🚚 Urban Express - Aplicação Mobile

Uma aplicação de entrega rápida de alimentos desenvolvida com React Native e Expo.

## ✨ Características

- ✅ Autenticação de usuários (Login/Signup)
- ✅ Interface moderna com design responsivo
- ✅ Sistema de navegação com abas
- ✅ Integração com TRPC para comunicação com backend
- ✅ Gerenciamento de estado com React Query
- ✅ Suporte para Web e Mobile
- ✅ Tema customizável (Light/Dark)

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma de desenvolvimento
- **Expo Router** - Roteamento e navegação
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Estilização com NativeWind
- **TRPC** - RPC seguro com tipos
- **React Query** - Gerenciamento de dados
- **React Native Gesture Handler** - Gestos customizados
- **React Native Reanimated** - Animações fluidas

## 📋 Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn como gerenciador de pacotes
- Expo CLI instalado: `npm install -g expo-cli`

## 🚀 Como Iniciar

### 1. Clone o repositório
\`\`\`bash
git clone https://github.com/vortex-23-2400244/desenvolvimento-mobile.git
cd desenvolvimento-mobile
\`\`\`

### 2. Instale as dependências
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

### 3. Execute o projeto
\`\`\`bash
npm start
# ou
yarn start
\`\`\`

### 4. Escolha a plataforma
- **iOS**: Pressione \`i\`
- **Android**: Pressione \`a\`
- **Web**: Pressione \`w\`

## 📁 Estrutura do Projeto

\`\`\`
desenvolvimento-mobile/
├── app/
│   ├── (tabs)/              # Telas principais com navegação em abas
│   ├── login.tsx            # Tela de login
│   ├── signup.tsx           # Tela de cadastro
│   ├── about.tsx            # Tela sobre
│   ├── _layout.tsx          # Layout raiz
│   └── oauth/
│       └── callback.tsx      # Callback de autenticação
├── components/              # Componentes reutilizáveis
│   ├── screen-container.tsx
│   ├── themed-text.tsx
│   └── themed-view.tsx
├── lib/
│   ├── theme-provider.tsx   # Provedor de tema
│   ├── trpc.ts              # Cliente TRPC
│   └── _core/               # Arquivos core
├── global.css               # Estilos globais
└── package.json
\`\`\`

## 🎨 Temas e Customização

O projeto suporta temas claro e escuro. A customização ocorre através do \`ThemeProvider\` em \`lib/theme-provider.tsx\`.

### Cores Principais
- **Primary**: Cor principal da marca
- **Background**: Cor de fundo
- **Foreground**: Cor do texto principal
- **Surface**: Cor de superfícies (cards, inputs)
- **Border**: Cor de bordas
- **Muted**: Cor de texto secundário

## 🔐 Autenticação

O sistema de autenticação atualmente é simulado. Para integrar com um backend real:

1. Atualize as funções em \`app/login.tsx\` e \`app/signup.tsx\`
2. Implemente chamadas TRPC para validar credenciais
3. Armazene tokens de autenticação de forma segura

## 📦 Componentes Disponíveis

### ScreenContainer
Wrapper para telas com suporte a safe area:
\`\`\`tsx
<ScreenContainer className="bg-background" edges={['top', 'left', 'right', 'bottom']}>
  {/* Conteúdo */}
</ScreenContainer>
\`\`\`

### ThemedText
Texto com suporte a múltiplos tipos:
\`\`\`tsx
<ThemedText type="title">Título</ThemedText>
<ThemedText type="subtitle">Subtítulo</ThemedText>
<ThemedText type="default">Texto padrão</ThemedText>
<ThemedText type="link">Link</ThemedText>
\`\`\`

### ThemedView
View com tema automático:
\`\`\`tsx
<ThemedView>
  {/* Conteúdo */}
</ThemedView>
\`\`\`

## 🔄 Gerenciamento de Estado

O projeto utiliza **React Query** para cache e sincronização de dados:

\`\`\`tsx
import { trpc } from '@/lib/trpc';

// Hook customizado
const { data, isLoading, error } = trpc.example.useQuery();
\`\`\`

## 🌐 API Backend

O projeto é configurado para se conectar a um backend TRPC. Configure a URL base em \`lib/trpc.ts\`.

## 📝 Scripts Disponíveis

\`\`\`bash
npm start       # Inicia o servidor de desenvolvimento
npm run build   # Build para produção
npm test        # Executa testes
npm run eject   # Ejetar do Expo (não recomendado)
\`\`\`

## 🐛 Troubleshooting

### Erro: "Cannot find module"
\`\`\`bash
npm install
npm start --clear
\`\`\`

### Erro de segurança no iOS
Limpe o cache do Expo:
\`\`\`bash
expo start --clear
\`\`\`

### Problema com Theme
Certifique-se de que o \`ThemeProvider\` envolve toda a aplicação em \`_layout.tsx\`.

## 📞 Contato

**Email**: contato@urbanexpress.com  
**Telefone**: (11) 9999-9999  
**Localização**: São Paulo, SP - Brasil

## 📄 Licença

Este projeto está sob a licença MIT. Veja [LICENSE](LICENSE) para mais detalhes.

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

Veja [CONTRIBUTING.md](CONTRIBUTING.md) para mais detalhes.

## 📚 Recursos Úteis

- [Documentação do Expo](https://docs.expo.dev)
- [Documentação do React Native](https://reactnative.dev)
- [Documentação do NativeWind](https://www.nativewind.dev)
- [Documentação do TRPC](https://trpc.io)

---

**Desenvolvido com ❤️ por Urban Express Team**  
© 2026 Urban Express. Todos os direitos reservados.
