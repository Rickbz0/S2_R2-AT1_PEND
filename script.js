let tarefa = document.getElementById("tarefa");
let btn = document.querySelector("#btn");
let mensagem = document.getElementById("mensagem");
let lista = document.getElementById("lista");

btn.addEventListener("click", () => {

    let texto = tarefa.value;

    if (texto === "") {

        mensagem.textContent = "preencha a tarefa";
        mensagem.className = "text-danger fw-bold";

    } else {

        let li = document.createElement("li");

        li.classList.add("list-group-item");

        li.textContent = texto;

        let btnApagar = document.createElement("button");

        btnApagar.textContent = "Remover";

        btnApagar.classList.add("btn","btn-danger","ms-3");

        btnApagar.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(btnApagar);

        lista.appendChild(li);

        tarefa.value = "";

        mensagem.textContent = "a tarefa adicionada com sucesso";
        mensagem.className = "text-success fw-bold";
    }

});