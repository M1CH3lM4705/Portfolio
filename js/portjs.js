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

//modal texto ver mais
let cardTexto = document.querySelectorAll('.text-card');
let modal = document.querySelector('.modal-Text');
let modalTexto = document.querySelector('#modalText');
let btnClose = document.querySelector('#btn_close');
let btnTexto = document.querySelectorAll('button');
/* */
//Adicionar texto selecionado ao modal
for (let i = 0; i < btnTexto.length; i++) {
    btnTexto[i].addEventListener('click', function () {
        modalTexto.innerHTML = cardTexto[i].innerHTML;
        modal.classList.toggle('modal_active');
        console.log(modalTexto);
    })
}

btnClose.addEventListener('click', () =>{
    modal.classList.toggle('modal_active');
})