const fs = require('fs');

function registrar(nombre, edad, animal, color, enfermedad) {
    const citas = JSON.parse(fs.readFileSync('citas.json'));
    citas.push({ nombre, edad, animal, color, enfermedad });
    fs.writeFileSync('citas.json', JSON.stringify(citas));
    console.log('Cita registrada.');
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json'));
    console.log(citas);
}

module.exports = { registrar, leer };