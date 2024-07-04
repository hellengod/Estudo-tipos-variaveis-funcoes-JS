/* Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. 
Tente acessar essas variáveis dentro do bloc e fora dele utilizando console.log e analise os resultados.
Faça o mesmo processo utilizando let e compare com os resultados anteriores. */

var fora = "Fora do bloco";
if (true){
    var dentro = "Dentro do bloco";
    console.log(fora);
    console.log(dentro);
}
console.log(fora);
console.log(dentro);

///////////////////////////////////////////////////////////

let fora2 = "Fora do bloco 2";
if (true){
    let dentro2 = "Dentro do bloco 2";
    console.log(fora2);
    console.log(dentro2);
}
console.log(fora2);
console.log(dentro2);
