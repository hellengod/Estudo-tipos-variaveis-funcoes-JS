//Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador 
//para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
const usuario = "Fulano";
const permissao = true;
if(usuario && permissao){
    console.log("LOGA");
}else{
    console.log("NAO LOGA")
}