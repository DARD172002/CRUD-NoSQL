const { connectRedis } = require('./utils');

async function updateData() {
   try {const client = await connectRedis();

    console.time('Redis Update');
    for (let i = 0; i < 10000; i++) {
        const value = await client.hGet(`item:${i}`, 'value');
        if (parseInt(value) < 500) {
            await client.hSet(`item:${i}`, 'status', 'updated');
        }
    }
    console.timeEnd('Redis Update');
    console.log('Redis records updated.');}
    catch(error){
        console.error(error)
    }
}

updateData();
