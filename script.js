let seunome = document.getElementById("seunome")
let resposta = document.getElementById("responder")


function falar()
{
  resposta.innerHTML = "Ola,"  +  seunome.value  +  " tudo bem"
}

let centimetros = document.getElementById("centimetros")
let demonstre = document.getElementById("demonstre")

function medir()
{
    demonstre.innerHTML = parseInt(centimetros.value) / 100
}

let antes = document.getElementById("antes")
let antesesor = document.getElementById("antesesor")
let sucesor = document.getElementById("sucesor")

function qué()
{
    antesesor.innerHTML = parseInt(antes.value) - 1
    sucesor.innerHTML = parseInt(antes.value) + 1
}
function botão()
{
    if(maior.value > menor.value)
    {
        maioroumenor.innerHTML = menor.value + " menor " + maior.value
    }
}

console.log()
var a = 1;
while(a < 100)
    {
        console.log(a)
        a = a + 1
    }

    //
    console.log()
var b = 0;
while(b < 50)
    {
        console.log(b)
        b = b * 5
    }
