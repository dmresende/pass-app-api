import { randomUUID } from 'node:crypto';

export class DatabaseMemory {
    #passwords = new Map();

    list(search) {
        //entries retorna um array com o id
        return Array.from(this.#passwords.entries())
            .map((passwodArray) => {
                const id = passwodArray[0];
                const data = passwodArray[1];

                return {
                    id,
                    ...data
                }
            })
            .filter(password => {
                if (search) {
                    return password.title.includes(search);
                }
                return true
            });
    }

    create(password) {
        const passwordId = randomUUID();

        this.#passwords.set(passwordId, password);
    }

    update(id, password) {
        this.#passwords.set(id, password);
    }

    delete(id) {
        this.#passwords.delete(id);
    }
}
