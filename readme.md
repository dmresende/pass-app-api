# API de Gerenciamento de Pedidos

Este é um projeto de API simples para gerenciamento de pedidos, desenvolvido com Node.js e Fastify.

## Descrição

Esta API permite criar, listar, atualizar e excluir pedidos. Ela utiliza um banco de dados em memória para armazenar as informações dos pedidos.

## Tecnologias Utilizadas

- Node.js
- Fastify
- JavaScript (ES6+)

## Estrutura do Projeto

- `server.js`: Arquivo principal que configura e inicia o servidor Fastify.
- `database-memory.js`: Implementação de um banco de dados em memória.
- `routes.http`: Arquivo com exemplos de requisições HTTP para testar a API.

## Rotas da API

1. **Criar Pedido**
   - Método: POST
   - Rota: `/pedido`
   - Corpo da requisição: JSON com os detalhes do pedido

2. **Listar Pedidos**
   - Método: GET
   - Rota: `/pedidos`

3. **Atualizar Pedido**
   - Método: PUT
   - Rota: `/pedidos/:id`

4. **Excluir Pedido**
   - Método: DELETE
   - Rota: `/pedidos/:id`

## Como Executar

1. Instale as dependências:
   ```
   npm install
   ```

2. Inicie o servidor:
   ```
   npm run dev
   ```

3. O servidor estará rodando em `http://localhost:3000`

## Testando a API

Você pode usar o arquivo `routes.http` para testar as rotas da API. Se estiver usando o Visual Studio Code, instale a extensão "REST Client" para executar as requisições diretamente do arquivo.

## Estrutura do Banco de Dados

O banco de dados em memória (`DatabaseMemory`) armazena os pedidos com os seguintes campos:

- `id`: Identificador único do pedido (gerado automaticamente)
- `customer`: Nome do cliente
- `iten`: Array de itens do pedido
- `totalAmount`: Valor total do pedido
- `status`: Status do pedido

## Próximos Passos

- Implementar a lógica para atualizar e excluir pedidos
- Adicionar validação de dados nas requisições
- Implementar um banco de dados persistente

## Contribuição

Sinta-se à vontade para contribuir com este projeto. Abra uma issue ou envie um pull request com suas sugestões e melhorias.
