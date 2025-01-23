const { connectMongoDB } = require('./utils');

async function deleteData() {
    try {
        const db = await connectMongoDB();
        const collection = db.collection('testCollection');

        console.time('MongoDB Delete');
        const result = await collection.deleteMany({ value: { $lt: 100 } });
        console.timeEnd('MongoDB Delete');
        console.log(`${result.deletedCount} documents deleted.`);
    } catch (error) {
        console.error('Error during MongoDB Delete:', error);
    }
}

deleteData();
