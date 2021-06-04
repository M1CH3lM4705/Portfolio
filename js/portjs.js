//const toggle = document.getElementById('toggle');
const dtAtual = document.getElementById('dataAtual');
let data = new Date();
function toggle(){
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
