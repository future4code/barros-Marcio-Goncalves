const contato = ()=>{
    window.location.href = "http://127.0.0.1:5500/contato.html"
}

const voltar = ()=>{
    window.location.href = "http://127.0.0.1:5500/index.html"
}

const enviarMensagem = ()=>{
    btnEmail = document.getElementById("btnInput")
    textArea = document.getElementById("textArea")
    if (btnEmail.value === "") {
        alert("Email para contato não foi informado!")
    }else if(textArea.value === ""){
        alert("Mensagem não informada!")
    } else{
        alert("Mensagem enviada com sucesso... Aguarde o meu contato!")
    }
}