const { exec } = require('child_process');

// Función que ejecuta un comando y devuelve una promesa
function runTest(command) {
    return new Promise((resolve, reject) => {
        exec(command, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error con el comando '${command}':`, stderr);
                reject(err);
            } else {
                console.log(stdout);
                resolve(stdout);
            }
        });
    });
}

// Función principal para ejecutar las pruebas en secuencia
async function runTests() {
    try {
        console.log('Running MongoDB tests...');
        console.log('Conectando a MongoDB...');
        // Espera a que se ejecute el comando de MongoDB
        await runTest('node mongoDB/create.js');
        console.log('MongoDB create test completed.');

        await runTest('node mongoDB/read.js');
        console.log('MongoDB read test completed.');

        await runTest('node mongoDB/update.js');
        console.log('MongoDB update test completed.');

        await runTest('node mongoDB/delete.js');
        console.log('MongoDB delete test completed.');

        console.log('MongoDB tests completed successfully.');

        console.log('Running Redis tests...');
        // Espera a que se ejecute el comando de Redis
        await runTest('node RedisDB/create.js');
        console.log('Redis create test completed.');

        await runTest('node RedisDB/read.js');
        console.log('Redis read test completed.');

        await runTest('node RedisDB/update.js');
        console.log('Redis update test completed.');

        await runTest('node RedisDB/delete.js');
        console.log('Redis delete test completed.');

        console.log('Redis tests completed successfully.');
    } catch (error) {
        console.error('Error running tests:', error);
    }
}

runTests();
