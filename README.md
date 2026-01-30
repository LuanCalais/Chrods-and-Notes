# 🎸 Chords and Notes

<div align="center">

![Chords and Notes Banner](./frontend/src/assets/img/logo.svg)

**Sistema completo de gerenciamento de aulas de música construído com a Stack MERN**

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)]()
[![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)]()
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)]()
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)]()
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)]()

[Demo](#-demo) • [Características](#-características-principais) • [Instalação](#-instalação) • [Tecnologias](#-tecnologias) • [Estrutura](#-estrutura-do-projeto)

</div>

---

## 📖 Sobre o Projeto

**Chords and Notes** é uma aplicação web full-stack desenvolvida para facilitar o gerenciamento de aulas de música, permitindo que professores e estudantes organizem bandas, músicas, repertórios e acompanhem seu progresso através de visualizações interativas.

O sistema oferece uma experiência completa com:
- 📊 **Dashboard interativo** com gráficos Doughnut e Bar utilizando Chart.js
- 🎨 **Personalização visual** com color picker para categorização de conteúdo
- 🎵 **Gestão completa** de bandas, músicas e artistas
- 🤖 **Integração com OpenAI** para geração automática de resumos
- 🔐 **Sistema de autenticação** seguro com bcrypt
- 📱 **Interface responsiva** e moderna

---

## ✨ Características Principais

### 🎯 Gerenciamento Completo
- **Bandas**: Cadastro com nome, gênero musical, ano de formação e cor personalizada
- **Músicas**: Vinculação com artistas/bandas, resumos e categorização por cores
- **Usuários**: Sistema completo de registro, login e perfis personalizáveis

### 📊 Dashboard Analítico
- **Gráfico Doughnut**: Visualização da distribuição de artistas por gênero musical
- **Gráfico de Barras**: Quantidade de músicas por artista
- **Estatísticas em tempo real**: Acompanhamento do progresso e evolução

### 🎨 Personalização Visual
- **Color Picker avançado** (@uiw/react-color) para categorização
- **Temas de cores** customizáveis por banda/música
- **Avatares personalizados** (Dog, Cat, Monkey, etc.)

---

## 🚀 Tecnologias

### Frontend
```json
{
  "core": ["React 18.2.0", "React Router DOM 6.11.1"],
  "state": ["Context API", "React Hooks"],
  "ui": [
    "React Bootstrap 2.8.0",
    "Bootstrap 5.3.0",
    "React Toastify 9.1.3",
    "@uiw/react-color 2.0.8"
  ],
  "charts": ["Chart.js 4.4.0", "react-chartjs-2 5.2.0"],
  "http": ["Axios 1.4.0"],
  "ai": ["OpenAI 4.61.0"],
  "extras": [
    "React Dropzone 14.2.3",
    "React Select 5.8.0",
    "React Multi Carousel 2.8.5"
  ]
}
```

### Backend
```json
{
  "runtime": "Node.js",
  "framework": "Express 4.18.2",
  "database": ["MongoDB", "Mongoose 7.3.2"],
  "auth": "bcrypt 5.1.0",
  "upload": "Multer 1.4.5-lts.1",
  "ai": "OpenAI 4.63.0",
  "utils": [
    "CORS 2.8.5",
    "dotenv 16.4.5",
    "moment-timezone 0.5.45"
  ],
  "dev": "Nodemon 2.0.22"
}
```

---

## 📦 Estrutura do Projeto

```
Chrods-and-Notes/
│
├── frontend/                      # Aplicação React
│   ├── public/
│   │   └── assets/
│   │       └── img/              # Imagens e assets estáticos
│   │
│   └── src/
│       ├── Components/           # Componentes reutilizáveis
│       │   ├── Common/
│       │   │   ├── BarChart/     # Componente de gráfico de barras
│       │   │   ├── DoughnutChart/ # Componente de gráfico Doughnut
│       │   │   ├── Button/       # Botão customizado
│       │   │   ├── CommonInput/  # Input reutilizável
│       │   │   ├── CommonModal/  # Modal reutilizável
│       │   │   ├── SideMenu/     # Menu lateral de navegação
│       │   │   └── Avatar/       # Componente de avatar
│       │   │
│       │   ├── Button/           # Botões específicos
│       │   ├── Card/             # Card de conteúdo
│       │   ├── CenterContent/    # Container central
│       │   ├── EmptyComponent/   # Estado vazio
│       │   ├── Search/           # Barra de busca
│       │   ├── Select/           # Select customizado
│       │   └── TextArea/         # TextArea customizado
│       │
│       ├── Contexts/             # Context API
│       │   └── UserContext.js    # Gerenciamento de estado do usuário
│       │
│       ├── Model/                # Modelos de dados frontend
│       │   ├── UserModel.js
│       │   ├── BandModel.js
│       │   └── MusicModel.js
│       │
│       ├── Pages/                # Páginas da aplicação
│       │   ├── Home/             # Dashboard principal
│       │   ├── Bands/            # Gerenciamento de bandas
│       │   ├── Musics/           # Gerenciamento de músicas
│       │   └── LoggedPage/       # Layout autenticado
│       │
│       ├── Services/             # Serviços de API
│       │   ├── api.js            # Configuração Axios
│       │   ├── BandService.js
│       │   ├── MusicService.js
│       │   ├── UserService.js
│       │   └── GeminiService.js
│       │
│       ├── utils/                # Utilitários
│       │   ├── Mocks.js          # Dados mock para gráficos
│       │   └── index.js          # Funções auxiliares
│       │
│       ├── constants/            # Constantes da aplicação
│       ├── routes.js             # Configuração de rotas
│       └── App.js                # Componente raiz
│
├── backend/                      # Servidor Express
│   └── src/
│       ├── controllers/          # Lógica de negócio
│       │   ├── UserController.js
│       │   ├── BandController.js
│       │   ├── MusicController.js
│       │   └── OpenAiController.js
│       │
│       ├── models/               # Schemas MongoDB
│       │   ├── UserModel.js
│       │   ├── BandModel.js
│       │   ├── MusicModel.js
│       │   └── AlbumModel.js
│       │
│       ├── routes/               # Rotas da API
│       │   ├── Router.js         # Arquivo principal de rotas
│       │   ├── userRoute.js
│       │   ├── bandsRoute.js
│       │   ├── musicRoute.js
│       │   └── openAiRoute.js
│       │
│       ├── scripts/              # Scripts de migração
│       │   └── updateMusicsSchemaAddColumnResume.js
│       │
│       ├── utils/                # Funções auxiliares
│       ├── constants/            # Constantes do backend
│       └── index.js              # Entry point do servidor
│
├── package.json                  # Dependências raiz
└── README.md                     # Este arquivo
```

---

## 🛠️ Instalação

### Pré-requisitos

Certifique-se de ter instalado:
- **Node.js** (v16 ou superior)
- **npm** ou **yarn**
- **MongoDB** (local ou Atlas)

### Passo a Passo

#### 1. Clone o repositório
```bash
git clone https://github.com/LuanCalais/Chrods-and-Notes.git
cd Chrods-and-Notes
```

#### 2. Configure o Backend

```bash
# Navegue até a pasta do backend
cd backend

# Instale as dependências
npm install

# Configure as variáveis de ambiente
# Crie um arquivo .env na raiz do backend:
touch .env
```

**Exemplo de arquivo `.env`:**
```env
MONGO_DB=mongodb+srv://seu-usuario:senha@cluster.mongodb.net/ChordsAndNotes
GEMINI_API_KEY=sua-chave-api-gemini
PORT=3001
```

```bash
# Inicie o servidor
npm start
```

O backend estará rodando em `http://localhost:3001`

#### 3. Configure o Frontend

```bash
# Em outro terminal, navegue até a pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie a aplicação React
npm start
```

A aplicação estará disponível em `http://localhost:3000`

---

## 📊 Endpoints da API

### 🔐 Autenticação
```http
POST   /users          # Criar novo usuário
POST   /users/login    # Fazer login
GET    /users/:id      # Obter usuário por ID
PUT    /users/:id      # Atualizar usuário
DELETE /users/:id      # Deletar usuário
```

### 🎸 Bandas
```http
GET    /bands              # Listar todas as bandas
GET    /bands/:id          # Obter banda por ID
GET    /bands/user/:id     # Obter bandas do usuário
POST   /bands              # Criar nova banda
PUT    /bands/:id          # Atualizar banda
DELETE /bands/:id          # Deletar banda
```

### 🎵 Músicas
```http
GET    /musics                  # Listar todas as músicas
GET    /musics/:id              # Obter música por ID
GET    /musics/composer/:name   # Obter músicas por artista
POST   /musics                  # Criar nova música
PUT    /musics/:id              # Atualizar música
DELETE /musics/:id              # Deletar música
```

---

## 🎨 Funcionalidades Detalhadas

### Dashboard Interativo

O dashboard principal exibe estatísticas visuais através de gráficos:

```javascript
const doughnutChartData = {
  labels: DoughnutMock.map((data) => data.label),
  datasets: [{
    label: "Percent",
    data: DoughnutMock.map((data) => data.percent),
    backgroundColor: ["#003B36", "#668F80", "#A0AF84"],
    borderColor: "none",
    borderWidth: 2,
  }],
};
```

### Gerenciamento de State com Context API

```javascript
export const UserContext = createContext();

export function UserProvider({ children }) {
  const [contextUser, setContextUser] = useState(new UserModel());
  
  const validateLogin = () => {
    const storageUserState = localStorage.getItem("userState");
    // Lógica de validação...
  };

  return (
    <UserContext.Provider value={{ contextUser, setContextUser, validateLogin }}>
      {children}
    </UserContext.Provider>
  );
}
```

### Sistema de Color Picker

Cada banda/música pode ter uma cor personalizada usando o componente `@uiw/react-color`:

```javascript
import { Colorful, hsvaToHex } from "@uiw/react-color";

music.color = String(hsvaToHex(hsva));
```

---

## 🔒 Segurança

- **Senhas criptografadas** com bcrypt (salt rounds: 10)
- **Validação de dados** em todos os endpoints
- **CORS configurado** para controle de acesso
- **Validação de sessão** através de localStorage com verificação de expiração

---

## 🌐 Rotas Frontend

```javascript
/                    # Landing page / Login
/app                 # Dashboard principal (protegido)
/app/bands           # Gerenciamento de bandas (protegido)
/app/musics          # Gerenciamento de músicas (protegido)
```

**Sistema de Proteção de Rotas:**
```javascript
<Route path="/" element={<ProtectedRoute element={App} />} />
```

---

<div align="center">

**Desenvolvido com muito ☕ por Luan Calais**

</div>