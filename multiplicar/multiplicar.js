const fs = require('fs');
const colors = require('colors');


let Multiplicar = async(base, limite) => {
    let data = ''
    try {
        if (!Number(base))
            throw new Error(`La base: ${base} indicada no es un numero.`)
        if (!Number(limite))
            throw new Error(`La base: ${limite} indicada no es un numero.`)

        else
            for (let i = 1; i <= limite; i++) {
                data += `${base} x ${(i)} = ${i * base}
`;
            }
        return data
    } catch (ListarData) {
        throw Error(ListarData)
    }


}

let CrearArchivo = async(data, base) => {


    fs.writeFile(`tablas/tmult-${base}.txt`, data, (err) => {
        try {
            let archivo = `tmult-${base}.txt`
            console.log(archivo);
            return `tmult-${base}.txt`;

        } catch (CrearArchivo) {
            throw Error(CrearArchivo)
        }
    })
    return `tmult-${base}.txt`;


}

let Listar = async(base, limite) => {
    let data = await Multiplicar(base, limite)
    return data
}

let Crear = async(base, limite) => {
    let data = await Multiplicar(base, limite)
    let archivo = await CrearArchivo(data, base)
    return archivo

}





// Multiplicar(base)
//     .then(data => console.log(data))
//     .catch(e => console.log('Error de Async: ', e))


module.exports = {
    Listar,
    Crear
}