const formCurso = document.getElementById('formCurso');
const nomeCurso = document.getElementById('nomeCurso');
const CargahorariaCurso = document.getElementById('CargahorariaCurso');
const descricaoCurso = document.getElementById('descricaoCurso');




formCurso.addEventListener('submit', function (evento) {


    // Paralisa o envio do formulário
    evento.preventDefault();

    let formularioValido = true;

    if (nomeCurso.value.trim() == "") {
        formularioValido = false;
        nomeCurso.classList.add('is-invalid')
        nomeCurso.classList.remove('is-valid')
    } else {
        nomeCurso.classList.add('is-valid')
        nomeCurso.classList.remove('is-invalid')
    }



    if (CargahorariaCurso.value.trim() == "") {
        formularioValido = false;
        CargahorariaCurso.classList.add('is-invalid')
        CargahorariaCurso.classList.remove('is-valid')
    } else {
        CargahorariaCurso.classList.add('is-valid')
        CargahorariaCurso.classList.remove('is-invalid')
    }

    if (descricaoCurso.value.trim() == "") {
        formularioValido = false;
        descricaoCurso.classList.add('is-invalid')
        descricaoCurso.classList.remove('is-valid')
    } else {
        descricaoCurso.classList.add('is-valid')
        descricaoCurso.classList.remove('is-invalid')
    }



});