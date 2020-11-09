const fs = require('fs');
const chalk = require('chalk');

let multiplicar = async (base, limite) => {
    if (!Number(base) || !Number(limite)) {
        throw new Error('La base y el limite han de ser valores numericos');
    }
    let tabla = ``;
    for (let x = 0; x <= limite; x++) {
        tabla += `${base} * ${x} = ${base * x}`;
        tabla += x < limite ? '\n' : '';
    }
    return tabla;
}

let listarTabla = async(base, limite) => {
    return await multiplicar(base, limite);
}


let crearArchivo = async (base, limite) => {
    let tabla = await multiplicar(base, limite);
    fs.writeFile(`tablas/tabla-${base}.txt`, tabla, (err) => {
        if (err) throw err;
    });
    return `tablas/tabla-${base}.txt`;
}

module.exports = {
    crearArchivo,
    listarTabla
}
