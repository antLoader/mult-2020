
const argv = require('./config/yargs').argv;
const chalk = require('chalk');

const ch_warn = chalk.bold.yellow;
const { 
    crearArchivo, 
    listarTabla 
} = require('./multiplicar/multiplicar');

switch (argv._[0]) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla + '\n\n' + chalk.dim.cyanBright(`Tabla listada\n\n`)))
            .catch(err => console.log(ch_warn(err)));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`File ${archivo} saved`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
}