//const toggle = document.getElementById('toggle');
const dtAtual = document.getElementById('dataAtual');
let data = new Date();
function toggle(){
    var header = document.getElementById("header");
    header.classList.toggle('active')
}

var dataAtual = data.getFullYear();

dtAtual.innerText = `© Copyright ${dataAtual} Michel Matos `;