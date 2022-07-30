import * as pg from 'pg'
import { config as dotConfig } from 'dotenv'

const { Pool } = pg
dotConfig()

const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT,
});

export default pool