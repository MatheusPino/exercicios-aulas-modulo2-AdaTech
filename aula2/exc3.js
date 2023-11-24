// 3) Uma empresa está implementando um chatbot para um síndico de um condomínio. Esse síndico tem a necessidade de saber num primeiro momento se o feedback dos condôminos é um dos predefinidos por ele.
//A lista dos possíveis feedbacks é essa:
//const feedbacks = ["Ruim", "Pessimo", "Regular", "Bom", "Otimo"];
//O chatbot deve então receber o feedback digitado pelo usuário e retornar se esse valor é válido ou não.
// Caso o usuário digite “Péssimo” ou “Ótimo” deve valer por “Pessimo” e “Otimo” respectivamente.
//Para resolver esse problema, crie uma função chamada verificarFeedbackValido
//que deve:
//- Receber uma string.
//- Retornar um valor booleano caso esse feedback (string) seja um valor válido.
// - Utilize a função includes() no seu desenvolvimento.

//Exc 3:
function verificarFeedbackValido(feedback) {
  const feedbackMaiusculo = feedback.toUpperCase();
  const feedbacksValidos = ["RUIM", "REGULAR", "BOM", "ÓTIMO", "PÉSSIMO", "PESSIMO", "OTIMO"];
  const resultado = feedbacksValidos.includes(feedbackMaiusculo);
  return console.log(resultado);
}

let string = "otimo";

verificarFeedbackValido(string);
