# Praticando Consumo de API

Atividade prática de consumo de APIs REST com React, desenvolvida como exercício acadêmico.

## 📚 Tecnologias utilizadas

- React
- Vite
- Axios
- useState
- useEffect

## 📋 Sobre a atividade

### Atividade 1 — Lista de Usuários

Consome a API pública [JSONPlaceholder](https://jsonplaceholder.typicode.com/users) e exibe:

- Lista com os nomes de todos os usuários
- Ao clicar em um nome, exibe os detalhes completos do usuário (email, telefone, site, cidade e empresa)

**Componentes criados:**
- `Card.jsx` — exibe o nome do usuário
- `CardDetalhes.jsx` — exibe todas as informações do usuário selecionado
- `Usuarios.jsx` — página principal com a listagem

### Atividade 2 — Galeria de Fotos

Consome a API [JSONPlaceholder Photos](https://jsonplaceholder.typicode.com/photos?_limit=10) e exibe:

- 10 fotos em formato de grid
- Título de cada foto
- Tratamento de estado de carregamento
- Tratamento de estado de erro

**Componente criado:**
- `GaleriaFotos.jsx`

## ▶️ Como rodar o projeto

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

## 🔗 APIs utilizadas

- Usuários: https://jsonplaceholder.typicode.com/users
- Fotos: https://jsonplaceholder.typicode.com/photos?_limit=10