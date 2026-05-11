# Endpoints da API

## 📍 Base URL
```
http://localhost:3000/api
```

## 🔐 Autenticação (Fase 1)

### 1. Registrar novo usuário
```
POST /auth/register
Content-Type: application/json

Body:
{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123",
  "userType": "volunteer" | "beneficiary"
}

Response (201):
{
  "id": "507f1f77bcf86cd799439011",
  "name": "João Silva",
  "email": "joao@example.com",
  "userType": "volunteer",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 2. Fazer login
```
POST /auth/login
Content-Type: application/json

Body:
{
  "email": "joao@example.com",
  "password": "senha123"
}

Response (200):
{
  "id": "507f1f77bcf86cd799439011",
  "name": "João Silva",
  "email": "joao@example.com",
  "userType": "volunteer",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### 3. Validar token
```
GET /auth/me
Headers:
  Authorization: Bearer <seu_token>

Response (200):
{
  "id": "507f1f77bcf86cd799439011",
  "name": "João Silva",
  "email": "joao@example.com",
  "userType": "volunteer"
}
```

### 4. Fazer logout
```
POST /auth/logout
Headers:
  Authorization: Bearer <seu_token>

Response (200):
{
  "message": "Logout successful"
}
```

## 📊 Projetados para Fase 2

### Projetos
```
GET    /projects              # Listar todos os projetos
GET    /projects/:id          # Obter detalhes de um projeto
POST   /projects              # Criar novo projeto (admin)
PUT    /projects/:id          # Atualizar projeto (admin)
DELETE /projects/:id          # Deletar projeto (admin)
```

### Atividades
```
GET    /activities            # Listar atividades
GET    /activities/:id        # Obter detalhes de atividade
POST   /activities/:id/join   # Agendar participação
DELETE /activities/:id/leave  # Cancelar participação
```

## 📤 Usando com Axios (Frontend)

```typescript
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

// Criar instância do axios
const api = axios.create({
  baseURL: API_BASE_URL,
});

// Adicionar token a todas as requisições
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Exemplo de uso
const register = async (name, email, password, userType) => {
  try {
    const response = await api.post('/auth/register', {
      name,
      email,
      password,
      userType,
    });
    return response.data;
  } catch (error) {
    console.error('Erro ao registrar:', error);
  }
};
```

## 🔄 Códigos de Status HTTP

| Código | Significado |
|--------|-------------|
| 200 | OK - Requisição bem-sucedida |
| 201 | Created - Recurso criado |
| 400 | Bad Request - Dados inválidos |
| 401 | Unauthorized - Token inválido/ausente |
| 404 | Not Found - Recurso não encontrado |
| 500 | Internal Server Error - Erro do servidor |

## 🧪 Testar Endpoints

### Com cURL
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"joao@example.com","password":"senha123"}'
```

### Com Postman
1. Download: https://www.postman.com/
2. Importe a coleção (em breve)
3. Configure variáveis de ambiente
4. Teste os endpoints

---

**Endpoints da Fase 2 e 3 serão adicionados gradualmente!**
