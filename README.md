# SIMPLE CRUD APP

Aplicação simples para gerenciamento de produtos, desenvolvida com **Node.js**, **Express** e **MongoDB**.  

O projeto implementa as operações **CRUD** (_Create, Read, Update, Delete_) para um modelo de produtos.  


> _É lindo de ver como cada parte se conecta e forma algo funcional!_ 



## Tecnologias Utilizadas
- **Node.js**
- **Express**
- **MongoDB** (Mongoose)
- **dotenv** para variáveis de ambiente

---

## Funcionalidades
- Criar produto
- Listar todos os produtos
- Obter produto por ID
- Atualizar produto
- Excluir produto

---

## Endpoints da API

| Método | Endpoint              | Descrição                       | Exemplo de Uso |
|--------|----------------------|----------------------------------|----------------|
| GET    | `/api/products`      | Lista todos os produtos         | `GET /api/products` |
| GET    | `/api/products/:id`  | Busca um produto pelo ID        | `GET /api/products/64f3a123abc456` |
| POST   | `/api/products`      | Cria um novo produto            | `POST /api/products` |
| PUT    | `/api/products/:id`  | Atualiza um produto existente   | `PUT /api/products/64f3a123abc456` |
| DELETE | `/api/products/:id`  | Remove um produto               | `DELETE /api/products/64f3a123abc456` |

---

## Como Rodar o Projeto

### 1. Clone o repositório
```
git clone https://github.com/eduardotashiro/simple-crud-app.git

```
 ### 2. Instale a dependência
```
npm install
```

### 3. Crie um arquivo .env na raiz do projeto
```
DB_URI=seu_link_de_conexao_com_mongodb
```
