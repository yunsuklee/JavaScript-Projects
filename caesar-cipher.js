function rot13(str) {
	// Separo la cadena por palabras en un array
	const arr = str.split(" ");
	let decipheredStr = "";

	// Busco el codigo de cada caracter
	for(let i = 0; i < arr.length; i++) {
		for(let j = 0; j < arr[i].length; j++) {
			// El codigo minimo es 64 y el maximo 90
			let code = arr[i].charCodeAt(j);

			if(code < 64) {}
			else if(code <= 77)
				code += 13;
			else
				code -= 13;

			decipheredStr += String.fromCharCode(code);
		}
    if(!(i === arr.length - 1))
		  decipheredStr += " ";
	}

	return decipheredStr;
}

// Pruebas
console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("SERR CVMMN!"));
console.log(rot13("SERR YBIR?"));
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));

