const { createClient } = require('redis');

async function clearDatabase() {
    const client = createClient();

    client.on('error', (err) => console.error('Redis Client Error', err));

    await client.connect();

    try {
        console.time('Redis Clear');
        await client.flushDb(); // Borra toda la base de datos actual
        console.timeEnd('Redis Clear');
        console.log('Base de datos Redis borrada correctamente.');
    } catch (error) {
        console.error('Error al borrar la base de datos Redis:', error);
    } finally {
        await client.disconnect();
    }
}

clearDatabase();
