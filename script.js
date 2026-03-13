let tarefa = document.getElementById("tarefa");
let btn = document.querySelector("#btn");
let listar = document.getElementById("listar");

btn.addEventListener("click", () => {

let texto = tarefa.value;

    if (texto === "") ;

        let lista = document.createElement("lista");

        lista.textContent = texto;

        lista.classList.add("list-group-item");

        listar.appendChild(lista);

        tarefa.value = "";
});