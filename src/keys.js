require('dotenv').config();

const database = {
    connectionLimit: parseInt(process.env.DB_CONNECTION_LIMIT),
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
};

module.exports = { database };
