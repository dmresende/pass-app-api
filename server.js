import { fastify } from 'fastify';
import { DatabasePostgres } from './database-postgres.js';
import { env } from 'process';

const server = fastify();
const database = new DatabasePostgres();

server.get('/', (request, reply) => {
    const data = {
        message: 'Hello World',
        timestamp: new Date(),
        version: '1.0.0',
        author: 'Resende',
    };
    reply.status(200).send(JSON.stringify(data)); // Enviando resposta com status HTTP 200 e um JSON
});


server.post('/password', async (request, reply) => {
    const { title, password, userId } = request.body;
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();

    await database.create({
        userId,
        title,
        password,
        createdAt,
        updatedAt,
    }); // Number(  userId: Number(userId));

    return reply.status(201).send(await database.list());
});


server.get('/passwords', async (request) => {
    //se paarâmetro de busca ele retornara a lista filtrada caso contrario a lista completa
    //exemplo: http://localhost:3000/passwords?search=node (com filtro)
    //http://localhost:3000/passwords (sem filtro)
    const search = request.query.search;
    const passwords = await database.list(search);
    return passwords;
});

server.put('/passwords/:id', async (request, reply) => {
    console.log(request.body)
    const passwordId = request.params.id;
    const { title, password, userId, createdAt, updatedAt } = request.body;

    await database.update(passwordId, {
        userId,
        title,
        password,
        createdAt,
        updatedAt,
    });
    return reply.status(204).send();
});

server.delete('/passwords/:id', async (request, reply) => {

    const passwordId = request.params.id;
    await database.delete(passwordId);
    console.log('Senha excluída: ', passwordId)
    return reply.status(204).send();
});

server.listen({ port: env.PORT ?? 3000 });
console.log(`Server is running on: http://localhost:${env.PORT ?? 3000}/ 🚀`);

