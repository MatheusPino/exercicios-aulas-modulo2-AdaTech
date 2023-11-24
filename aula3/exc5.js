/* 
5)
Use um Map para armazenar informações sobre estudantes (nome, idade, nota) e, em seguida, 
encontre o aluno com a nota mais alta.
*/
let estudantes = new Map();

estudantes.set("Matheus", {idade: 27, nota: 9})
estudantes.set("Joao", {idade: 17, nota: 7})
estudantes.set("Jhonny", {idade: 20, nota: 10})
estudantes.set("Carla", {idade: 20, nota: 8})

let notaAnterior = -1;
let maiorNota = -1;
let alunoMaiorNota = null;


estudantes.forEach((info, nome) => {
  if (info.nota > notaAnterior) {
    maiorNota = info.nota;
    alunoMaiorNota = nome
  }
  notaAnterior = info.nota;
})

console.log("O aluno com a nota mais alta é", alunoMaiorNota);


