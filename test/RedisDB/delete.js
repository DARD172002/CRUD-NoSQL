const { connectRedis } = require('./utils');

async function deleteData() {
    try {
        const client = await connectRedis();

        console.time('Redis Delete');
        for (let i = 0; i < 10000; i++) {
            const value = await client.hGet(`item:${i}`, 'value');
            if (parseInt(value) < 100) {
                await client.del(`item:${i}`);
            }
        }
        console.timeEnd('Redis Delete');
        console.log('Delete operation completed in Redis.');
    } catch (error) {
        console.error('Error during Redis Delete:', error);
    }
}

deleteData();
