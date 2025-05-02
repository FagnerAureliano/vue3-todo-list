# 📝 Todo List Vue 3

[![Vue 3](https://img.shields.io/badge/vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-3.x-blue.svg)](https://tailwindcss.com/)
[![json-server](https://img.shields.io/badge/json--server-0.17.0-yellow.svg)](https://github.com/typicode/json-server)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

Projeto de lista de tarefas simples feito com **Vue 3**, **Vuex**, **TailwindCSS**, **Axios** e **json-server** para simular uma API REST fake.

---

## 🚀 Tecnologias

- [Vue 3](https://vuejs.org/)
- [Vuex](https://vuex.vuejs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [json-server](https://github.com/typicode/json-server)

---

## 📦 Instalação

1. **Clone o repositório:**

```bash
git clone https://github.com/fagneraureliano/todo-list-vue3.git
cd todo-list-vue3
```

2. **Instale as dependências do projeto:**

```bash
npm install
```

3. **(Opcional) Instale globalmente o json-server::**

```bash
npm install -g json-server
```

## 🔌Iniciando a API fake (json-server)

1. **Entre na pasta da API:**

```bash
cd api
```

2. **Inicie o servidor fake:**

```bash
npx json-server db.json --port 3001
```

📡 **A API estará disponível em: http://localhost:3001**

## 🖥️ Rodando o projeto Vue em modo desenvolvimento

1. **No diretório raiz do projeto:**

```bash
npm run serve
```

## 🛠️ Scripts disponíveis

| Comando         | Descrição                                |
| --------------- | ---------------------------------------- |
| `npm run serve` | Inicia o servidor de desenvolvimento     |
| `npm run build` | Compila o projeto para produção          |
| `npm run lint`  | Analisa e corrige os arquivos com ESLint |

## ⚙️ Configuração adicional

Para personalizar configurações, veja a documentação do Vue CLI.

```bash
todo-list-vue3/
├── api/               # API fake com json-server
│   └── db.json
├── src/
│   ├── assets/
│   ├── components/
│   ├── store/
│   └── views/
├── public/
├── package.json
└── README.md

```

## ✅ Requisitos

- **Node.js 14 ou superior**

- **NPM 7 ou superior**

- **Navegador moderno (Chrome, Firefox, Edge...)**

---

✨ Autor
Feito com 💚 por Fagner Aureliano
