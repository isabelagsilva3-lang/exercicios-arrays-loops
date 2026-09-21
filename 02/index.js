const letras = ["A", "b", "B", "C", "a", "e"];

let contador = 0;

for (const letra of letras) {
  if (letra === "A" || letra === "a") {
    contador++;
  }
}
if (contador === 0) {
  console.log("Nenhuma letra 'A' ou 'a' foi encontrada no array.");

} else {
  console.log(`Encontramos ${contador} letras 'A' (ou 'a') no array!`);
}