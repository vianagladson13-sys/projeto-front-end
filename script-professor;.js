const formProf = document.getElementById('formProf');
const nomeProf = document.getElementById('nomeProf');
const registro = document.getElementById('registro');
const funcaoAula = document.getElementById('funcaoAula');


formProf.addEventListener('submit', function (evento) {

    // Paralisa o envio do formulário
    evento.preventDefault();

    let formularioValido = true;

    if (nomeProf.value.trim() == "") {
        formularioValido = false;
        nomeProf.classList.add('is-invalid')
        nomeProf.classList.remove('is-valid')
    } else {
        nomeProf.classList.add('is-valid')
        nomeProf.classList.remove('is-invalid')
    }

    if (registro.value.trim() == "") {
        formularioValido = false;
        registro.classList.add('is-invalid')
        registro.classList.remove('is-valid')
    } else {
        registro.classList.add('is-valid')
        registro.classList.remove('is-invalid')
    }


    if (funcaoAula.value.trim() == "") {
        formularioValido = false;
        funcaoAula.classList.add('is-invalid')
        funcaoAula.classList.remove('is-valid')
    } else {
        funcaoAula.classList.add('is-valid')
        funcaoAula.classList.remove('is-invalid')
    }

    // Validar dados
    const emailValido = email.value.includes('@') && email.value.includes('.');
    const senhaValida = senha.value.length >= 6;

    if (emailValido == true && senhaValida == true) {
        mensagemErro.classList.add('d-none');
        window.location.href = 'curso.html';



    } else {
        mensagemErro.classList.remove('d-none')
        mensagemErro.textContent = "E-mail ou senha inválidos.";
    }

});