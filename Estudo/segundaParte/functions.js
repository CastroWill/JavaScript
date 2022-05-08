
function media(n1, n2){
    var media = (n1 + n2) / 2;

    return media;
}

var n1 = Math.random() * 10;
var n2 = Math.random() * 10;
var resultado1 = media(n1, n2);

var n1 = Math.random() * 10;
var n2 = Math.random() * 10;
var resultado2 = media(n1, n2);

console.log(resultado1);
console.log(resultado2);


function saudacao(){
    return "Olá mundo!"
}

var s = saudacao();
console.log(s);

var media1 = function(n1, n2){
    return (n1 + n2) / 2;
}

r1 = Math.random() * 10;
r2 = Math.random() * 10;
console.log(media(r1, r2))