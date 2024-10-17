import postgres from "postgres";
import 'dotenv/config';

// Carregando as variáveis de ambiente
const { PGHOST, PGPORT, PGDATABASE, PGUSER, PGPASSWORD } = process.env;

// Verificar se todas as variáveis de ambiente estão definidas
if (!PGHOST || !PGPORT || !PGDATABASE || !PGUSER || !PGPASSWORD) {
  throw new Error("Por favor, verifique se todas as variáveis de ambiente estão definidas corretamente.");
}

// Configuração do banco de dados com SSL obrigatório
const sql = postgres({
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
  user: PGUSER,
  password: PGPASSWORD,
  ssl: 'require'  // Força o uso de SSL
});

export { sql };
