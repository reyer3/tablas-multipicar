const { Crear, Listar } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log(`La tabla de multiplicar para ${argv.base} hasta el ${argv.limite} es:`);
        Listar(argv.base, argv.limite)
            .then(data => console.log(data))
            .catch(e => console.log(e))
        break;
    case 'crear':
        Crear(argv.base, argv.limite)
            .then(arhivo => console.log(`Archivo creado ${arhivo}`))
            .catch(e => console.error(e));
        break;

    default:
        let msg = 'El comando introducido no se reconoce o no ha introducido ningun comando'
        console.log(msg);
        break;
}



// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]