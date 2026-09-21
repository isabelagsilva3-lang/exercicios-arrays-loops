const numeros = [13, 20, 31, 4, 50];
const maiorNumero = Math.max(...numeros);
const menorNumero = Math.min(...numeros);
const maiorDiferenca = maiorNumero - menorNumero;

console.log("A maior diferença entre os números do array é:", maiorDiferenca);