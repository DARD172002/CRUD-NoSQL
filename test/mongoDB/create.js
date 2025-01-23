const { connectMongoDB, client } = require('./utils');

async function createData() {
    let db;
    try {
        console.log('Connecting to MongoDB...');
        db = await connectMongoDB(); // Asegúrate de que connectMongoDB retorne la conexión correctamente.
        
        const collection = db.collection('testCollection');
        
        const data = [];
        for (let i = 0; i < 10000; i++) {
            data.push({
                id: i,
                name: `item${i}`,
                value: (i * 10) % 1000
            });
        }

        console.time('MongoDB Create');
        const result = await collection.insertMany(data);
        console.timeEnd('MongoDB Create');
        console.log(`${result.insertedCount} documents were inserted.`);
    } catch (error) {
        console.error('Error inserting data:', error);
    } finally {
        if (client) {
            await client.close();
        }
    }
}

createData();
