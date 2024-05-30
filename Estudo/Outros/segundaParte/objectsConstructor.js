

/*
function criarAluno(nome, n1, n2){
    return{
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return (this.nota1 + this.nota2) / 2;
        }
    }
}

var turma = [
    criarAluno("Igor", 9, 6),
    criarAluno("João", 7, 4),
    criarAluno("Marcela", 8, 7.5)
]

turma.forEach(function (elemento){
    console.log(elemento);
})


*/

function aluno(nome, n1, n2){
    this.nome = nome;
    this.n1 = n1;
    this.n2 = n2;

    this.media = function() {
        return (this.n1 + this.n2) / 2;
    }
}

var a = new aluno("Igor", 8, 7);

console.log(a)


