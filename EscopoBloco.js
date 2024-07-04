if (1 > 0) {
    let nome = 'Ana';
    console.log(nome); // ‘Ana’
  }
  
  // variável `nome` não está acessível
  console.log(nome); // Error: nome is not defined

  //Variáveis declaradas com var não seguem a regra do escopo de bloco! Elas serão consideradas globais e poderão 
  //ser acessadas de fora do bloco. Faça o teste:
  
  if (1 > 0) {
    var nome = 'Ana';
    console.log(nome); // 'Ana'
  }
  
  console.log(nome); // 'Ana'

//A falta de “controle” de escopo é um dos motivos pelo qual o uso de var foi abandonado e as boas práticas 
//atuais recomendam apenas o uso de const e let.