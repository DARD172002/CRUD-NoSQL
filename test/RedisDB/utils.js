const redis = require('redis');

const client = redis.createClient({ url: 'redis://localhost:6379' });
client.on('error', (err) => console.error('Redis Client Error', err));

async function connectRedis() {
    if (!client.isOpen) try {
        await client.connect();
        return client;
    }
    catch(error)
    {console.error(errro)}
    
}

module.exports = { connectRedis };
