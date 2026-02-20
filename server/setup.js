import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Client } = pg;

const DB_NAME = process.env.DB_NAME || 'carptech';

async function setup() {
  // Connect to the default 'postgres' database to create our database
  const client = new Client({
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '5432'),
    database: 'postgres',
    user: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASSWORD || 'postgres',
  });

  try {
    await client.connect();

    // Check if the database already exists
    const result = await client.query(
      `SELECT 1 FROM pg_database WHERE datname = $1`,
      [DB_NAME]
    );

    if (result.rows.length === 0) {
      await client.query(`CREATE DATABASE "${DB_NAME}"`);
      console.log(`✓ Created database "${DB_NAME}"`);
    } else {
      console.log(`✓ Database "${DB_NAME}" already exists`);
    }
  } catch (err) {
    console.error('Setup failed:', err.message);
    console.error('\nMake sure PostgreSQL is running and your .env credentials are correct.');
    process.exit(1);
  } finally {
    await client.end();
  }

  console.log('✓ Setup complete. Run "npm run dev" to start the app.');
}

setup();
