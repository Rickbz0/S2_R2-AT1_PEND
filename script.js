    let texto = document.getElementById("texto");
    let botao = document.getElementById("btnMudar");

    botao.addEventListener("click", () => {
        texto.innerText = "Texto alterado com JavaScript!";
    });