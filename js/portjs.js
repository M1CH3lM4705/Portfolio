//const toggle = document.getElementById('toggle');
const dtAtual = document.getElementById('dataAtual');
let data = new Date();
function toggle() {
    var header = document.getElementById("header");
    header.classList.toggle('active')
}

var dataAtual = data.getFullYear();

dtAtual.innerText = `© Copyright ${dataAtual} Michel Matos `;

$(document).ready(function () {

    var loader = function () {
        setTimeout(function () {
            if ($('#loader').length > 0) {
                $('#loader').removeClass('show-loader');
            }
        }, 1);
    };
    loader();
});

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    var texto = '';
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
        texto += letra;
    });

}
//função desativada 
function limpar(elemento) {
    var char = elemento.innerHTML;
    var nr = char.length;
    var typer = setInterval(() => {
        if (nr-- == 0) {
            clearInterval(typer);
            return;
        }
        elemento.innerHTML = char.slice(0, nr);
    }, 75);

}

const subtitulo = document.querySelector('#home .lead');
typeWriter(subtitulo);
//limpar(subtitulo);