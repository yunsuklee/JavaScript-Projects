function convertToRoman(num) {
  let aux = num;
  let romanNum = "";
  let m, d, c, l, x, v, i;

  // Descompongo el numero
  if(m = parseInt(aux / 1000)) {
    aux = num % 1000;

    // Voy escribiendo las letras que correspondan
    while(m--)
      romanNum += "M";
  }

  if(c = parseInt(aux / 100)) {
    aux = num % 100;

    if(c === 9) {
      romanNum += "CM";
      c -= 9;
    } else if(c >= 5) {
      romanNum += "D";
      c -= 5;
    } else if (c === 4) {
      romanNum += "CD";
      c -= 4;
    }

    while(c--)
      romanNum += "C";    
  }

  if(x = parseInt(aux / 10)) {
    aux = num % 10;

    if(x === 9) {
      romanNum += "XC";
      x -= 9;
    } else if(x >= 5) {
      romanNum += "L";
      x -= 5;
    } else if (x === 4) {
      romanNum += "XL";
      x -= 4;
    }

    while(x--)
      romanNum += "X";
  }
 
  i = aux;

  if(i === 9) {
    romanNum += "IX";
    i -= 9;
  } else if(i >= 5) {
    romanNum += "V";
    i -= 5;
  } else if (i === 4) {
    romanNum += "IV";
    i -= 4;
  }

  while(i--)
    romanNum += "I";

  return romanNum;
}

// Algunas pruebas
console.log(convertToRoman(400));
console.log(convertToRoman(5));
console.log(convertToRoman(9));
console.log(convertToRoman(4));
console.log(convertToRoman(12));
console.log(convertToRoman(16));
console.log(convertToRoman(29));
console.log(convertToRoman(44));
console.log(convertToRoman(45));
