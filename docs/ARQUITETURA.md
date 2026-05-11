# Arquitetura do Projeto

## 📐 Visão Geral da Arquitetura

```
┌─────────────────────────────────────────────────────────────┐
│                    Usuários (iOS/Android)                   │
└────────────────────────────────────────────────────────────┬┘
                           │
                           │ HTTP/HTTPS
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    React Native App                          │
│  ├── Screens (Login, Register, Home)                       │
│  ├── Components (Forms, Cards, etc)                        │
│  ├── Services (API calls)                                  │
│  └── Navigation (React Navigation)                         │
└────────────────────────────────────────────────────────────┬┘
                           │
                           │ API Calls (axios)
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    Node.js/Express Backend                   │
│  ├── Routes (auth, projects, activities, chat)             │
│  ├── Controllers (Business Logic)                          │
│  ├── Models (User, Project, Activity, Chat)                │
│  ├── Middleware (Auth, Validation)                         │
│  └── Services (Database operations)                        │
└────────────────────────────────────────────────────────────┬┘
                           │
                           │ Queries/Commands
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                      MongoDB Database                        │
│  ├── Users Collection                                      │
│  ├── Projects Collection                                   │
│  ├── Activities Collection                                 │
│  └── Messages Collection                                   │
└─────────────────────────────────────────────────────────────┘
```

## 🔐 Fluxo de Autenticação (Fase 1)

```
1. Usuário insere credenciais no app
   ↓
2. App envia POST /api/auth/login para o backend
   ↓
3. Backend verifica credenciais no MongoDB
   ↓
4. Se válido, gera JWT token
   ↓
5. App armazena token localmente
   ↓
6. Futuras requisições usam o token no header Authorization
   ↓
7. Middleware valida token e retorna dados do usuário
```

## 📦 Estrutura de Pastas

### Backend
```
backend/
├── src/
│   ├── routes/              # Definição de rotas
│   │   └── auth.routes.ts
│   ├── controllers/         # Lógica de negócio
│   │   └── authController.ts
│   ├── models/              # Schemas do MongoDB
│   │   └── User.ts
│   ├── middleware/          # Middlewares
│   │   └── auth.middleware.ts
│   ├── services/            # Serviços auxiliares
│   ├── config/              # Configurações
│   └── server.ts            # Arquivo principal
├── package.json
├── tsconfig.json
└── .env.example
```

### Mobile
```
mobile/
├── src/
│   ├── screens/             # Telas do app
│   │   ├── AuthStack/
│   │   │   ├── LoginScreen.tsx
│   │   │   ├── RegisterScreen.tsx
│   │   │   └── WelcomeScreen.tsx
│   │   └── HomeStack/
│   │       └── HomeScreen.tsx
│   ├── components/          # Componentes reutilizáveis
│   ├── services/            # Serviços (API calls)
│   │   └── api.ts
│   ├── navigation/          # Navegação
│   │   └── RootNavigator.tsx
│   ├── types/               # Tipos TypeScript
│   └── App.tsx              # Componente raiz
├── package.json
├── tsconfig.json
└── .env.example
```

## 🔑 Decisões Arquiteturais

1. **React Native**: Permite escrever uma única codebase para iOS e Android
2. **TypeScript**: Aumenta a confiabilidade do código com tipagem estática
3. **Node.js + Express**: Backend simples, rápido e escalável
4. **MongoDB**: Banco NoSQL flexível para começar
5. **JWT**: Autenticação stateless, ideal para APIs mobile
6. **React Navigation**: Padrão de facto para navegação em React Native

## 🔄 Fluxo de Dados

```
User Input (Form) → State Management → API Call → Backend Processing → Database → Response → UI Update
```

## 🚀 Próximas Fases

- **Fase 2**: Adicionar models de Projects, Activities
- **Fase 3**: Implementar WebSocket para chat em tempo real
- **Fase 4**: Sistema de notificações push

---

**Nota**: Esta arquitetura é escalável e pode crescer conforme as necessidades!
