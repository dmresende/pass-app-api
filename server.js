import { fastify } from 'fastify';
import { DatabaseMemory } from './database-memory.js';


const server = fastify();
const database = new DatabaseMemory();



server.post('/pedido', (request, response) => {
    const { customer, iten, totalAmount, status } = request.body;
    database.create({
        customer, 
        iten,
        totalAmount,
        status
    });

    console.log('Pedido criado com sucesso: ', database.list());
    return response.status(201).send();
});


server.get('/pedidos', ( ) => {
    const pedidos = database.list();

    console.log('/pedidos: ', pedidos);
    
    return pedidos;
});

server.put('/pedidos/:id', () => {
    return 'Atualize um pedido';
});

server.delete('/pedidos/:id', () => {
    return 'Exclua um pedido';
});

server.listen({ port: 3000 });
console.log('Server is running on: http://localhost:3000/ 🚀');

