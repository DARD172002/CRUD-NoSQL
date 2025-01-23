//read data
const {connectMongoDB, client}=require('./utils')
async function readData(){

    try{
         
        const db= await connectMongoDB();
        const collection=db.collection('testCollection');

        console.time('MongoDB Read by ID');
        const findById= await collection.findOne({id:500});
        console.timeEnd('MongoDB Read by ID')
        console.log('Consulta por clave primaria:', findById);
        //filter basic
        console.time('MongoDB Basic Filter');
        const filtered= await collection.find({value: {$lt:100}}).toArray();
        console.timeEnd('MongoDB Basic Filter');
        console.log('Filtered records:', filtered.length);

        console.time('MongoDB Aggregation');
        const aggregated = await collection.aggregate([
            {
                $group: {
                    _id: { $subtract: [{ $divide: ["$value", 100] }, { $mod: [{ $divide: ["$value", 100] }, 1] }] },
                    total: { $sum: "$value" }
                }
            },
            { $sort: { _id: 1 } } // Ordena los rangos de manera ascendente
        ]).toArray();
        console.timeEnd('MongoDB Aggregation');
        console.log('Búsquedas agregadas (suma por rangos de 100):', aggregated);


    }
    catch(error){
        console.error("Error",error);

    }finally{
        await client.close();
    }
    
}

readData()