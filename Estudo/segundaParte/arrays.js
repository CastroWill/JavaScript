/*var alunos = new Array("Igor", "José", "Marcos", "Mariana");

console.log(alunos[0]);*/

var alunos = new Array("Igor", "José", "Marcos", "Mariana");

for(i = 0; i < alunos.length; i ++){
    console.log(alunos[i]);
}

for(var aluno of alunos){
    console.log(aluno);
}