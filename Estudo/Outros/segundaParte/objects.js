
var aluno = {
    nome: "Will",
    notas: [7, 8],

    media: function () {
        return ( this.notas[0] + this.notas[1]) / 2;
    }
}

console.log(aluno.nome);
console.log(aluno.media());