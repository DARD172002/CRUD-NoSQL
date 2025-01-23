const { connectMongoDB } = require('./utils');

async function updateData() {
    try {
        const db = await connectMongoDB();
        const collection = db.collection('testCollection');

        console.time('MongoDB Update');
        const result = await collection.updateMany(
            { value: { $lt: 500 } },
            { $set: { status: 'updated' } }
        );
        console.timeEnd('MongoDB Update');
        console.log(`${result.modifiedCount} documents updated.`);
    } catch (error) {
        console.error('Error during MongoDB Update:', error);
    }
}

updateData();
