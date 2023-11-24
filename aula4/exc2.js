
//2)  Maior de Três Números:
//Peça ao usuário para inserir três números e use estruturas condicionais 
//if e else para determinar qual deles é o maior.



let numero1 = 2;
let numero2 = 6;
let numero3 = 1;
const mensagem = "O maior numero é o ";

if (numero1 >= numero2 && numero1 >= numero3) {
  console.log(mensagem + numero1)
} else if (numero2 >= numero2 && numero2 >= numero3) {
  console.log(mensagem + numero2)
} else {
  console.log(mensagem + numero3);
}

