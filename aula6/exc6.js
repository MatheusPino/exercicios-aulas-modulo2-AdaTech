//6) Percorrer uma string e contar a frequência
// de cada caractere, ou seja quantas vezes cada um tem na string.

let frequencia = {};
let string = 'Hellow world'

for (let char of string) {
  if (frequencia[char]){
    frequencia[char]++;
  } else {
    frequencia[char] = 1;
  }
}

for (let char in frequencia){
  console.log(`${char}: ${frequencia[char]} vezes.`)
}