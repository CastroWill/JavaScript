

// Nome do aluno - nota 1 - nota 2 - média - Aprovação

var nomes = new Array("Igor", "José", "Maria");
var notasA = new Array(7.0, 6.5, 9.5);
var notasB = new Array(8.0, 7.0, 8.5);

function media(n1, n2){
    return (n1 + n2) / 2;
}

function passou(media){
    var resultado = "Reprovado";

    if(media > 7){
        resultado = "Aprovado";
    }

    return resultado;
}

for(var index in nomes){
    var nota1 = notasA[index];
    var nota2 = notasB[index];
    var m = media(nota1, nota2);

    console.log(nomes[index] +
                    " - " +
                    notasA[index] +
                    " - " +
                    notasB[index] + 
                    " - " +
                    m +
                    " - " +
                    passou(m))
}