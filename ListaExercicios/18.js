//Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
const idade = 18;
function verificaIdade(idade){
    if(idade >= 18){
        let verifica = "maior de idade"
        return verifica;
    }else{
        verifica = "menor de idade"
        return verifica;
    }
}
console.log(verificaIdade(idade));