var nomes = [];
var inserir = document.querySelector("#text_area").value;
function insert() {
  var nome = document.getElementById("nome").value;
  nomes.push(nome);
}
function mostrar() {
  nomes.reverse();
  console.log("mostrar", nomes);
  document.getElementById("text_area").innerHTML = nomes;
}
document.querySelector("#limpar").onclick = function (){
  location.reload();   
}