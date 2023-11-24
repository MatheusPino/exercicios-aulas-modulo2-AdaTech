// 5) Crie um array de objetos, onde cada objeto representa um aluno com 
// propriedades como nome e notas (um array de notas). 
// Use um laço for...of para iterar sobre o array de alunos e, para cada aluno,
// use um laço for para calcular a média de suas notas. 
// Exiba 

let alunos = [
  { nome: "aluno1", notas: [6, 7, 6, 7] },
  { nome: "aluno2", notas: [9, 7, 6, 7] },
  { nome: "aluno3", notas: [0, 7, 6, 7] },
  { nome: "aluno4", notas: [3, 2, 6, 1] }
];

function calculaMedia (notas) {
  let soma = 0;
  for (let nota of notas) {
    soma = soma + nota;
  }
  const media = soma / (notas.length);
  return media;
}

for (let aluno of alunos){
  const media = calculaMedia(aluno.notas);
  console.log(`Aluno: ${aluno.nome}; Média: ${media}`)
}