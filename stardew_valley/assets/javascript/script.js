let nome = document.querySelector('#nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let imagem1 = document.querySelector('#img1')
let imagem2 = document.querySelector('#img2')
/* Variaveis para validação */
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '35%'
email.style.width = '35%'
assunto.style.width = '35%'

function validaNome(){
    let txt = document.querySelector('#txtnome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Nome inválido'
        txt.style.color = 'red'
        txt.style.fontSize = "15px"
    } else{
        txt.innerHTML = 'Nome válido'
        txt.style.color = 'green'
        txt.style.fontSize = "15px"
        nomeOk = true
    }
}

function validaEmail(){
    let txt = document.querySelector('#txtemail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txt.innerHTML = 'Email inválido'
        txt.style.color = 'red'
        txt.style.fontSize = "15px"
    } else{
        txt.innerHTML = 'Email válido'
        txt.style.color = 'green'
        txt.style.fontSize = "15px"
        emailOk = true
    }
}

function validaAssunto(){
    let txt = document.querySelector('#txtassunto')
    if(assunto.value.length < 5){
        txt.innerHTML = 'Mínimo de 5 máximo caracteres'
        txt.style.color = 'red'
        txt.style.fontSize = "15px"
        txt.style.display = 'block'
    } else if (assunto.value.length > 100){
        txt.innerHTML = 'Máximo de 100 caracteres'
        txt.style.color = 'red'
        txt.style.fontSize = "15px"
        txt.style.display = 'block'
    }
    else{
        txt.style.display = 'none'
        assuntoOk = true
    }
}

function enviarFormulario(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado")
    }else{
        alert('Preencha o formulário corretamente')
    }
}

function zoomImg1(){
    imagem1.style.width='300px'
    imagem1.style.height='300px'
}

function zoomOutImg1(){
    imagem1.style.width='192px'
    imagem1.style.height='192px'
}

function zoomImg2(){
    imagem2.style.width='300px'
    imagem2.style.height='300px'
}

function zoomOutImg2(){
    imagem2.style.width='192px'
    imagem2.style.height='192px'
}
