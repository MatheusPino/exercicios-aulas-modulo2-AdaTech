/* 
3)
Use um Map para armazenar informações sobre produtos (nome do produto e preço) e, em seguida, 
imprima todos os produtos e seus preços.
*/

let mapa = new Map();

mapa.set("Coca-cola", 5.99);
mapa.set("Fanta", 4.99);
mapa.set("Dolly", 3.99)


mapa.forEach((value, key) => {
  console.log(key, ": ", value);
});