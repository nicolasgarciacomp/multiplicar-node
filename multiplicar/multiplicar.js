// Requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {
	console.log('###############################'.green);
	console.log('############ TABLA ############'.green);
	console.log('###############################'.green);

	for(let i = 0; i <= limite; i++) {
		console.log(`${base} * ${i} = ${base * i}\n`);
	}
}

let crearArchivo = (base, limite = 10) => {
	return new Promise((resolve, reject) => {
		let data = '';

		if(!Number(base)) {
			reject(`El valor introducido ${base} no es un numero`);
			return;
		}

		for(let i = 0; i <= limite; i++) {
			data += `${base} * ${i} = ${base * i}\n`;
		}

		fs.writeFile(`./tablas/tabla.txt`, data, (err) => {
			if(err) 
				reject(err);
			else
				resolve(`./tablas/tabla.txt`);
		});
	});
}

module.exports = {
	crearArchivo,
	listarTabla
}
