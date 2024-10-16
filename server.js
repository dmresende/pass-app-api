import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';

const server = fastify();
const database = new DatabaseMemory();

server.get('/', (request, reply) => {
    const data = {
        message: 'Hello World',
        timestamp: new Date(),
        version: '1.0.0',
        author: 'Resende',
    };
    reply.status(200).send(JSON.stringify(data)); // Enviando resposta com status HTTP 200 e um JSON
});

server.post('/passwords', (request, reply) => {
    const { title, password, status } = request.body;
    database.create({
        title,
        password,
        status
    });

    return reply.status(201).send(JSON.stringify(database.list()));
});

server.get('/passwords', (request) => {
    //se paarâmetro de busca ele retornara a lista filtrada caso contrario a lista completa
    //exemplo: http://localhost:3000/passwords?search=node (com filtro)
    //http://localhost:3000/passwords (sem filtro)
    const search = request.query.search;
    const passwords = database.list(search);
    return passwords;
});

server.put('/passwords/:id', (request, reply) => {
    const passwordId = request.params.id;
    const { title, password, status } = request.body;

    database.update(passwordId, {
        title,
        password,
        status
    });
    return reply.status(204).send();
});

server.delete('/passwords/:id', (request, reply) => {
    const passwordId = request.params.id;
    database.delete(passwordId);

    return reply.status(204).send();
});

server.listen({ port: 3000 });
console.log('Server is running on: http://localhost:3000/ 🚀');

