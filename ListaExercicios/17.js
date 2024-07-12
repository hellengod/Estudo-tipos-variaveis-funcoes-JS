//Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.
const nome = "Hellen";
function saudacaoPersonalizada(nome){
    saudacao = `Ola ${nome} como voce esta?`;
    return saudacao;
}
console.log(saudacaoPersonalizada(nome));