function palindrome(str) {
  // Primero me aseguro de que esten en minusculas
  let lowerCased = str.toLowerCase();

  // Ahora deshago de los caracteres especiales y numeros
  let lettersOnly = lowerCased.replace(/\W|\_/g, "");

  // Verifico si la cadena es palindromo
  let j = lettersOnly.length - 1;
  for(let i = 0; i < lettersOnly.length; i++) {
    if(i === j)
      break;
    if(lettersOnly[i] !== lettersOnly[j--])
      return false;
  }

  return true;
}

// Algunas pruebas
console.log(palindrome("eye"));
console.log(palindrome("2A3*3a2"));
console.log(palindrome("race CAR"));
console.log(palindrome("1 eye for of 1 eye."));