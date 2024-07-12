//Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). 
//Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
const palavra = "hellen";
function verificaPalindromo(palavra){
    const normalizada = palavra.toLowerCase();
    const reverso = normalizada.split('').reverse().join('');
    if(normalizada === reverso){
        return true;
    }else{
        return false;
    }
}

console.log(verificaPalindromo(palavra));