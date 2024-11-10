# CRUD Básico com NestJS

Este repositório apresenta um exemplo básico de um sistema CRUD (Create, Read, Update, Delete) usando o framework NestJS, desenvolvido para a disciplina de **Programação para Internet II** do curso de **Análise e Desenvolvimento de Sistemas** no Instituto Federal do Piauí (IFPI).

### Informações do Projeto
- **Aluno:** Matheus da Silva
- **Professor:** Jesiel Viana
- **Módulo:** IV
- **Disciplina:** Programação para Internet II

## Objetivo
Este projeto foi desenvolvido como introdução à disciplina, na qual foi solicitado que cada aluno implementasse uma aplicação prática usando uma linguagem ou framework de sua escolha.

---

## Sobre o NestJS
[NestJS](https://nestjs.com/) é um framework poderoso e escalável para desenvolvimento de aplicações server-side em **Node.js**, baseado em **TypeScript** (com suporte a JavaScript). O NestJS oferece uma arquitetura modular que combina práticas de:
- **Programação Orientada a Objetos (OOP)**
- **Programação Funcional (FP)**
- **Programação Funcional Reativa (FRP)**

Isso facilita a construção de sistemas escaláveis e mantém a modularidade, sendo ideal para desenvolvimento de APIs.

## Entidade de Exemplo: `Produto`
Para ilustrar o CRUD, foi utilizada uma entidade chamada `Produto`, definida como uma `interface` com os seguintes atributos:

```typescript
export interface Produto {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
}
```

### Operações CRUD Implementadas:
1. **Criação** de novos produtos.
2. **Leitura** de produtos existentes.
3. **Atualização** de produtos.
4. **Exclusão** de produtos.

---

## Estrutura do Projeto

O projeto segue a estrutura padrão do NestJS, dividida em três componentes principais:

- **Controllers:** Gerenciam as requisições recebidas e enviam as respostas ao cliente. Em NestJS, os controllers definem as rotas e vinculam cada rota a uma função específica.
  
- **Modules:** Cada aplicação possui pelo menos um módulo raiz, que serve como ponto de entrada para o sistema de injeção de dependências do NestJS. Módulos organizam e agrupam funcionalidades relacionadas.
  
- **Service:** Contém a lógica de negócios e é responsável por acessar e manipular os dados. O Service age como uma camada de abstração para a manipulação de dados, isolando a lógica dos controllers.

### Injeção de Dependência
NestJS utiliza o padrão de projeto **Injeção de Dependência** para gerenciar as dependências entre as classes. Veja o exemplo abaixo em um controller de produtos:

```typescript
constructor(private produtoService: ProdutosService) {}
```

---

## Configuração e Execução

### Requisitos
- Node.js e NPM instalados
- Editor de código (recomendado: VS Code)

### Passos para Rodar o Projeto Localmente

1. **Clone o Repositório**

2. **Instale as Dependências**

    ```bash
    npm install
    ```

3. **Execute a Aplicação**

    ```bash
    npm run start
    ```

4. **Acesse a API**

    A API estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## Testes de Requisições

Abaixo estão alguns exemplos de requisições para testar as operações CRUD da entidade `Produto`. Use ferramentas como [Postman](https://www.postman.com/) para realizar as requisições.

### Endpoints Disponíveis

#### 1. **Listar todos os produtos**

- **Método:** GET
- **Endpoint:** `/produtos`
- **Descrição:** Recupera a lista de todos os produtos cadastrados.

```http
GET http://localhost:3000/produtos
```

#### 2. **Criar um novo produto**

- **Método:** POST
- **Endpoint:** `/produtos`
- **Descrição:** Cria um novo produto com os dados fornecidos no corpo da requisição.
- **Corpo da Requisição:**

    ```json
    {
        "nome": "Produto Exemplo",
        "preco": 100,
        "quantidade": 20
    }
    ```

#### 3. **Atualizar um produto existente**

- **Método:** PATCH
- **Endpoint:** `/produtos/{id}`
- **Descrição:** Atualiza as informações de um produto existente com o ID especificado. O método PATCH permite modificações parciais de um recurso.
- **Corpo da Requisição:**

    ```json
    {
        "nome": "Produto Atualizado",
        "preco": 90,
        "quantidade": 10
    }
    ```

#### 4. **Deletar um produto**

- **Método:** DELETE
- **Endpoint:** `/produtos/{id}`
- **Descrição:** Remove o produto com o ID especificado.

```http
DELETE http://localhost:3000/produtos/1
```

---

## Considerações Finais

Este projeto foi criado com fins didáticos, servindo como introdução à criação de CRUDs usando o NestJS. Em um ambiente de produção, recomenda-se seguir práticas adicionais, como:

- Validações de dados
- Tratamento adequado de erros
- Testes unitários e de integração

## Licença

Este projeto segue a licença [MIT](https://github.com/nestjs/nest/blob/master/LICENSE), conforme a licença padrão do NestJS.
