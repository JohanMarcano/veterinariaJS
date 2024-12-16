const { registrar, leer } = require('./operaciones');
const args = process.argv.slice(2); 
const operacion = args[0]; 

if (operacion === 'registrar') {
    registrar(args[1], args[2], args[3], args[4], args[5]);
} else if (operacion === 'leer') {
    leer();
} else {
    console.log('Operación no reconocida. Usa "registrar" o "leer".');
}
