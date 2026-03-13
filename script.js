let input = document.getElementById("itemInput");
let botao = document.getElementById("btnAdicionar");
let lista = document.getElementById("lista");

botao.addEventListener("click", () => {

    let texto = input.value;

    if(texto === "") return;

    let li = document.createElement("li");

    li.textContent = texto;

    li.classList.add("list-group-item");

    lista.appendChild(li);

    input.value = "";
});