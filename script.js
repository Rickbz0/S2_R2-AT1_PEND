let tarefa = document.getElementById("tarefa");
let btn = document.querySelector("#btn");
let listar = document.getElementById("listar");

btn.addEventListener("click", () => {

let texto = tarefa.value;

    if (texto === "") ;

        let lista = document.createElement("li");

        li.textContent = texto;

        li.classList.add("list-group-item");

        listar.appendChild(li);

        tarefa.value = "";
});
