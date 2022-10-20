let maiorIdade = [];
let menorIdade = [];

document.querySelector("#adicionar").onclick = function (){
    let num = Number (document.querySelector("#num").value);
    if(num<18){
        menorIdade.push(num);
    }else if(num>=18){
        maiorIdade.push(num)
    }
    return false;
}

document.querySelector("#verificar").onclick = function (){
    document.querySelector("#maiorIdade").value = maiorIdade.length;
    document.querySelector("#menorIdade").value = menorIdade.length;
    return false;
}

document.querySelector("#limpar").onclick = function (){
    location.reload();   
}