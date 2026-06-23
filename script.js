const formLogin = document.getElementyById('formLogin');
const email = document.getElementyById('email');
const senha = document.getElementyById('senha');
const mensagemErro = document.getElementyById('mensagemErro');

formLogin.addEventListener('submit', function (evento) {

    //paralize o envio
    evento.preventdefaut();

    //validar dados
    const emailValido = email.value.includes('@') && email.value.includes('.');
    const senhaValida = senha.value.length >= 6;

    if (emailValido == true && senhaValida == true) {
        console.log(" entrou!!!!");
    } else {
        console.log("deu errado!!");
    }

});
