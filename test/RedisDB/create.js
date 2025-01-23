const { connectRedis } = require('./utils');

async function createData() {
    try {
        const client = await connectRedis();
        
        console.time('Redis Create');
        
        // Recorremos el rango de 10,000 elementos
        for (let i = 0; i < 10000; i++) {
            const value = (i * 10) % 1000;
            
            // Inserta cada campo individualmente usando hSet
            await client.hSet(`item:${i}`, 'id', i.toString());
            await client.hSet(`item:${i}`, 'name', `item${i}`);
            await client.hSet(`item:${i}`, 'value', value.toString());
        }

        console.timeEnd('Redis Create');
        console.log('10,000 items inserted into Redis.');
    } catch (error) {
        console.error(error);
    }
}

createData();
