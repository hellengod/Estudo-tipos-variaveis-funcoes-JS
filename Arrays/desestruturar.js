const alunos = ['Joao', 'Juliana', 'Caio', 'Ana'];
const medias = [10,8,7.5,9];

const lista = [alunos, medias];
function exibeNomeENota(aluno){
    if(lista[0].includes(aluno)){
        const[alunos, medias]= lista;
        const indice = lista[0].indexOf(aluno);
        const mediaAluno = lista[1][indice];
        console.log(`${aluno} tem a media ${mediaAluno}`);
    }else{
        console.log(`Estudante nao existe na lista`);
    }
}
exibeNomeENota('Juliana');
exibeNomeENota('Vini');