const mongodb = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const client = new mongodb.MongoClient(`mongodb://root:${process.env.PASSWORD}@localhost:27017`);

async function connectMongoDB() {
    await client.connect();
    return client.db('testDB');
}

module.exports = { connectMongoDB, client };
