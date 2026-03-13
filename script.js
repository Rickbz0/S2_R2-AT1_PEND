let nomeAqui = document.getElementById("nomeAqui");
let btnEntrar = document.querySelector("#btnEntrar");
let mensagem = document.getElementById("mensagem");

    btnEntrar.addEventListener("click", () => {
    mensagem.innerText = `Olá ${nomeAqui.value}`;
    
});