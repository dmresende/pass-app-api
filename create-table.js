import { sql } from './db.js';

sql`
-- Criação da tabela USERS
CREATE TABLE USERS (
    ID SERIAL PRIMARY KEY,                     -- ID gerado automaticamente
    USERNAME VARCHAR(255) NOT NULL UNIQUE,    -- Nome de usuário único
    EMAIL VARCHAR(255) NOT NULL UNIQUE,       -- E-mail único
    PASSWORD VARCHAR(255) NOT NULL,           -- Senha
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Data de criação
);

CREATE TABLE PASSWORDS (
    ID SERIAL PRIMARY KEY,                     -- ID gerado automaticamente
    USER_ID INT NOT NULL,                      -- ID do usuário (referenciando a tabela USERS)
    TITLE VARCHAR(255) NOT NULL,               -- Título da senha
    PASSWORD VARCHAR(255) NOT NULL,            -- A senha em si
    CREATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data de criação
    UPDATED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Data da última atualização
    CONSTRAINT FK_USER FOREIGN KEY (USER_ID) REFERENCES USERS(ID) ON DELETE CASCADE -- Chave estrangeira
);
`.then(() => console.log('Tabelas criadas'))