# Guia de Setup Completo

## 📋 Pré-requisitos

Antes de começar, instale:

1. **Node.js** (v16 ou superior)
   - Download: https://nodejs.org/
   - Verifique: `node -v` e `npm -v`

2. **Git**
   - Download: https://git-scm.com/

3. **Visual Studio Code** (recomendado)
   - Download: https://code.visualstudio.com/

## 🛠️ Setup do Backend

### Passo 1: Clonar o repositório
```bash
git clone https://github.com/Instcomunidaviva/instituto-comunidade-viva.git
cd instituto-comunidade-viva
```

### Passo 2: Instalar dependências do backend
```bash
cd backend
npm install
```

### Passo 3: Configurar variáveis de ambiente
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:
```
NODE_ENV=development
PORT=3000
MONGODB_URI=mongodb://localhost:27017/instituto-comunidade-viva
JWT_SECRET=sua_chave_secreta_super_segura
```

### Passo 4: Instalar MongoDB

**Opção A: MongoDB Atlas (Recomendado para iniciantes)**
1. Acesse: https://www.mongodb.com/cloud/atlas
2. Crie uma conta gratuita
3. Crie um cluster
4. Copie a URL de conexão
5. Atualize `MONGODB_URI` no `.env`

**Opção B: MongoDB Local**
1. Download: https://www.mongodb.com/try/download/community
2. Instale seguindo as instruções
3. Inicie o serviço MongoDB

### Passo 5: Iniciar o servidor backend
```bash
npm run dev
```

Você verá algo como:
```
Server running on port 3000
Database connected
```

## 📱 Setup do Mobile

### Passo 1: Instalar React Native CLI
```bash
npm install -g react-native-cli
```

### Passo 2: Instalar dependências do mobile
```bash
cd ../mobile
npm install
```

### Passo 3: Configurar variáveis de ambiente
```bash
cp .env.example .env
```

Edite o arquivo `.env`:
```
API_BASE_URL=http://localhost:3000/api
```

### Passo 4: Para iOS (macOS apenas)
```bash
cd ios
pod install
cd ..
```

### Passo 5: Iniciar o app

**Para Android:**
```bash
npm run android
```

**Para iOS:**
```bash
npm run ios
```

## ✅ Verificar se está tudo funcionando

### Backend
1. Acesse: http://localhost:3000/api/health
2. Você verá: `{ "status": "OK" }`

### Mobile
1. Você verá a tela de Welcome do app
2. Tente fazer login

## 🐛 Troubleshooting

### "Cannot find module 'express'"
```bash
cd backend
rm -rf node_modules package-lock.json
npm install
```

### "Metro bundler error"
```bash
cd mobile
npm start -- --reset-cache
```

### "MongoDB connection refused"
- Verifique se MongoDB está rodando
- Verifique a URL em `.env`

### "Port 3000 already in use"
```bash
# Encontre qual processo está usando a porta
lsof -i :3000
# Ou mude a PORT em .env
```

## 📚 Próximos Passos

1. Leia `API_ENDPOINTS.md` para entender os endpoints
2. Explore o código em `backend/src/routes/auth.routes.ts`
3. Explore a tela de login em `mobile/src/screens/AuthStack/LoginScreen.tsx`

---

**Dúvidas? Abra uma issue no GitHub!**
