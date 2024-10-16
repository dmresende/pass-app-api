# API Pass-App

Esta API foi desenvolvida com Node.js e Fastify para ser consumida pelo **pass-app**, um aplicativo de gerenciamento de senhas. O **pass-app** cria senhas com base em um número de caracteres escolhido pelo usuário (entre 6 e 20) e as salva em uma tela de senhas. Os usuários podem visualizar suas senhas (com um título) ou excluí-las.

## Tecnologias Utilizadas

- Node.js
- Fastify
- JavaScript (ES6+)

## Estrutura do Projeto

- `server.js`: Configuração e inicialização do servidor Fastify.
- `database-memory.js`: Banco de dados em memória.
- `routes.http`: Exemplos de requisições HTTP para testar a API.

## Rotas da API

1. **Criar Password**
   - Método: POST
   - Rota: `/password`
   - Corpo da requisição: JSON com os detalhes do password

2. **Listar Passwords**
   - Método: GET
   - Rota: `/passwords`

3. **Atualizar Passwords**
   - Método: PUT
   - Rota: `/passwords/:id`

4. **Excluir Passwords**
   - Método: DELETE
   - Rota: `/passwords/:id`

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

Utilize o arquivo `routes.http` para testar as rotas. Se estiver usando o Visual Studio Code, instale a extensão "REST Client" para executar as requisições diretamente.

## Estrutura do Banco de Dados

O banco de dados em memória (`DatabaseMemory`) armazena os passwords com os seguintes campos:
- `Id`: Identificador único do password (gerado automaticamente)
- `title`: Titulo ou apelido
- `password`: String de senha
- `status`:  Status

## Próximos Passos

- Implementar lógica para atualizar e excluir passwords
- Adicionar validação de dados
- Implementar um banco de dados persistente

## Contribuição

Sinta-se à vontade para contribuir com sugestões e melhorias.
