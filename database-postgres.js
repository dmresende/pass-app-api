import { sql } from './db.js';

export class DatabasePostgres {
  #passwords = new Map();

  async list(search) {
    let passwords
    search
      ? passwords = await sql`SELECT * FROM PASSWORDS WHERE TITLE ILIKE "%${search}%"`
      : passwords = await sql`SELECT * FROM PASSWORDS`;
    return passwords;
  }

  async create(passwords) {
    console.log('Dados recebidos:', passwords);

    const { userId, title, password, createdAt = new Date(), updatedAt = new Date() } = passwords;

    if (!title || !password || !userId) {
      throw new Error("Todos os campos (title, password, userId) são obrigatórios.");
    }

    const createdAtDate = new Date(createdAt);
    const updatedAtDate = new Date(updatedAt);

    await sql`
        INSERT INTO PASSWORDS
            (USER_ID, TITLE, PASSWORD, CREATED_AT, UPDATED_AT)
        VALUES
            (${parseInt(userId)}, ${title}, ${password}, ${createdAtDate}, ${updatedAtDate})
    `;
  }


  update(id, password) {

  }

  delete(id) {

  }
}
