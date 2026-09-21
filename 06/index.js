const numeros = [3, 4, 7, 8, 1, 6, 5, 12];
console.log("Soma dos números pares: " + numeros.filter(num => num % 2 === 0).reduce((acc, curr) => acc + curr, 0));

