const { connectRedis } = require('./utils');

async function readData() {
    try{
    const client = await connectRedis();

    console.time('Redis Read by Key');
    const record = await client.hGetAll('item:500');
    console.timeEnd('Redis Read by Key');
    console.log('Record by Key:', record);

    console.time('Redis Basic Filter');
    let count = 0;
    for (let i = 0; i < 10000; i++) {
        const value = await client.hGet(`item:${i}`, 'value');
        if (parseInt(value) < 100) count++;
    }
    console.timeEnd('Redis Basic Filter');
    console.log('Filtered records:', count);
    }catch(error){
        console.error("error ", error)
    }
}


readData();
