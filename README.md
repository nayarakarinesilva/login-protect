# Login Protect + Quadro Kanban

Aplicação desenvolvida em React para gerenciamento de tarefas utilizando a metodologia Kanban. O sistema conta com autenticação de usuários, proteção de rotas e persistência de dados através do Local Storage.

## ✨ Funcionalidades

### 🔐 Autenticação
- Cadastro de novos usuários.
- Login com validação de credenciais.
- Persistência da sessão utilizando Local Storage.
- Logout da aplicação.
- Exibição do nome do usuário autenticado.

### 🛡️ Proteção de Rotas
- Apenas usuários autenticados podem acessar o quadro Kanban.
- Usuários não autenticados são redirecionados para a tela de login.
- Controle de acesso realizado com Context API e React Router.

### 📋 Quadro Kanban
- Criação de novas tarefas.
- Exclusão de tarefas.
- Organização das tarefas em colunas:
  - Todo
  - Doing
  - Done
- Movimentação de tarefas entre colunas através de Drag and Drop.
- Atualização automática do status das tarefas.

## 🛠️ Tecnologias Utilizadas

- React
- React Router DOM
- Context API
- Material UI
- Local Storage

## 📂 Estrutura do Projeto

```text
src/
└── assets/
|    └── kanban.png
├── components/
│   ├── CustomButton/
│   └── Input/
│   └── Title/
├── context/
│   └── Auth.jsx
├── hooks/
│   ├── useAuth.js
├── pages/
│   └── Dashboard/
│       └── components/
|             └── ColumnsCard/
│             └──  TaskCard/
│       └── hooks/
|             └── useTaskManager.js
│   ├── Home/
│   ├── Signin/
│   ├── Signup/
├── routes/
│   └── PrivateRoute.jsx
│   └── routes.jsx

```

## 💾 Persistência de Dados

A aplicação utiliza o Local Storage para armazenar:

```javascript
user_db     // Usuários cadastrados
user_token  // Usuário autenticado
```

## 🚀 Fluxo da Aplicação

1. O usuário realiza o cadastro.
2. Os dados são armazenados no Local Storage.
3. O usuário efetua login.
4. O sistema cria uma sessão local.
5. Após autenticado, o usuário pode acessar o Quadro Kanban.
6. As tarefas podem ser criadas, movidas entre colunas e removidas.

## 📚 Objetivo

Este projeto foi desenvolvido para praticar conceitos de:

- React
- Hooks customizados
- Context API
- React Router
- Proteção de rotas
- Gerenciamento de estado
- Drag and Drop
- Persistência de dados com Local Storage
- Componentização
