import { randomUUID } from 'node:crypto';

export class DatabaseMemory {
    #pedidos = new Map();

    list() {
        return Array.from(this.#pedidos.values());
    }

    create(pedido) {
        const pedidoId = randomUUID();

        this.#pedidos.set(pedidoId, pedido);
    }

    update(id, pedido) {
        this.#pedidos.set(id, pedido);
    }

    delete(id) {
        this.#pedidos.delete(id);
    }
}
