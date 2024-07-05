import { Sequelize } from 'sequelize';
import pg from 'pg'

export const sequelize = new Sequelize(process.env.SUPABASE_POSTGRES!, {
    logging: false,
    dialect: 'postgres',
    dialectModule: pg, // I've added this.
})

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

