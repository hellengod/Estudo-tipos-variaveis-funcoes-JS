/* Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. 
Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. 
Por fim, imprima os resultados obtidos no console. */
const primeiroNome = "Hellen";
const ultimoNome = "Bianchini";
const nomeCompleto = primeiroNome + ' ' + ultimoNome;
console.log('Usando operador +: ', nomeCompletoConcatenado);

const nomeCompletoTemplate  = `${primeiroNome} ${ultimoNome}`;
console.log(`Usando template strings: ${nomeCompletoTemplate}`);
