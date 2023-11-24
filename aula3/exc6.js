/* 
6) 
Crie um array associativo que associe nomes de produtos a objetos que 
contenham informações sobre o produto (por exemplo, nome, preço, descrição).
*/
let produtos = {};

produtos["Produto 1"] = {
  nome: "produto1",
  preco: 2.00,
  descricao: "descrição imaginaria"
};

produtos["Produto 2"] = {
  nome: "produto2",
  preco: 3.00,
  descricao: "descrição imaginaria"
};

produtos["Produto 3"] = {
  nome: "produto3",
  preco: 4.00,
  descricao: "descrição imaginaria"
};

console.log(produtos["Produto 1"]);