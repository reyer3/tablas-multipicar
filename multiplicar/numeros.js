let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let base = 4;
let tmult = base => numeros.map(x => `${base} x ${x} = ${x * base}
`);
console.log(tmult(base = 8));
const data = tmult((base = 8)); // new Uint8Array(Buffer.from(tmult()));

fs.writeFile(`tablas/tmult-${base}.txt`, data, (err) => {
    if (err)
        throw err;
    console.log('The file has been saved!');
});