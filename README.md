# Instituto Comunidade Viva - Plataforma Móvel

Plataforma móvel (iOS/Android) para gerenciar projetos, atividades e comunicação entre voluntários e beneficiários do Instituto Comunidade Viva.

## 📋 Visão Geral

Este projeto é uma aplicação mobile desenvolvida com **React Native** e um **Backend Node.js** para:
- ✅ Gerenciar cadastro e autenticação de usuários (voluntários e beneficiários)
- ✅ Visualizar projetos e atividades disponíveis
- ✅ Agendar participação em atividades
- ✅ Comunicação entre usuários (chat)
- ✅ Gerar relatórios de atividades

## 🏗️ Estrutura do Projeto

```
instituto-comunidade-viva/
├── mobile/              # Aplicativo React Native (iOS/Android)
├── backend/             # API Backend (Node.js + Express)
├── docs/                # Documentação do projeto
└── README.md            # Este arquivo
```

## 🚀 Tecnologias

### Mobile
- **React Native** - Framework multiplataforma
- **TypeScript** - Tipagem estática
- **React Navigation** - Navegação entre telas
- **Axios** - Cliente HTTP

### Backend
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **TypeScript** - Tipagem estática
- **MongoDB** - Banco de dados
- **JWT** - Autenticação
- **Bcrypt** - Criptografia de senhas

## 📱 Funcionalidades por Fase

### Fase 1 (Atual) ✅
- [x] Sistema de cadastro/autenticação
- [x] Página informativa

### Fase 2
- [ ] Agendamento de atividades
- [ ] Gestão de projetos

### Fase 3
- [ ] Chat/comunicação
- [ ] Relatórios

## 🛠️ Setup Inicial

### Prerequisites
- Node.js v16+ instalado
- npm ou yarn
- Git

### Backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### Mobile
```bash
cd mobile
npm install
npm start
```

## 📚 Documentação

Veja a pasta `docs/` para documentação detalhada:
- `ARQUITETURA.md` - Arquitetura do projeto
- `SETUP.md` - Guia de setup completo
- `API_ENDPOINTS.md` - Endpoints da API

## 👥 Contribuindo

Este é um projeto educativo onde você aprenderá desenvolvimento mobile e backend do zero!

## 📄 Licença

MIT

---

**Criado com ❤️ para o Instituto Comunidade Viva**
