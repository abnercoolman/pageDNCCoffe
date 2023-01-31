// Função para mostrar o botão de compra dos cards
function showButton(i) {

    var btnCardCSS = document.querySelector(`#btn-card-${i}`);

    if (i == 1) {
        btnCardCSS.style.visibility = 'visible';
    }
    else if (i == 2) {
        btnCardCSS.style.visibility = 'visible';
    }
    else if (i == 3) {
        btnCardCSS.style.visibility = 'visible';
    }
    else {
        btnCardCSS.style.visibility = 'visible';
    }
}

function hideButton(i) {

    var btnCardCSS = document.querySelector(`#btn-card-${i}`);

    if (i == 1) {
        btnCardCSS.style.visibility = 'hidden';
    }
    else if (i == 2) {
        btnCardCSS.style.visibility = 'hidden';
    }
    else if (i == 3) {
        btnCardCSS.style.visibility = 'hidden';
    }
    else {
        btnCardCSS.style.visibility = 'hidden';
    }
}


var modalAtend = document.querySelector('.blur-modal-2');
var modalTextBox = document.querySelector('.modal-intern');

function showModalAtendimento() {
    modalAtend.style.display = 'block';
}

function hideModalAtendimento() {
    modalAtend.style.display = 'none';
}