    let texto = document.getElementById("texto");
    let btnMudar = document.getElementById("btnMudar");

    btnMudar.addEventListener("click", () => {
        texto.innerText = "Texto alterado com sucesso pelo JS";
    });