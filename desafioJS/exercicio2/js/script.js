let nums = [];

document.querySelector("#adicionar").onclick = function (){
    let num = Number (document.querySelector("#num").value);
    nums.push(num);
    console.log(nums);
    return false;
}

document.querySelector("#verificar").onclick = function (){
    document.querySelector("#numResult").value = Math.max.apply(null, nums);
    return false;
}

document.querySelector("#limpar").onclick = function (){
    location.reload();   
}