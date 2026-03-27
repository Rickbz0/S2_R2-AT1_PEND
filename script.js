    let texto = document.getElementById("texto");
    let btnMudar = document.querySelector("#btnMudar");

    btnMudar.addEventListener("click", () => {
        texto.innerText = "Texto alterado com sucesso pelo JS";
    });