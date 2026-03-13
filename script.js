let input = document.getElementById("inputTarefa");
let botao = document.querySelector("#btnAdicionar");
let mensagem = document.getElementById("mensagem");
let lista = document.getElementById("listaTarefas");

botao.addEventListener("click", () => {

    let texto = input.value.trim();

    if (texto === "") {

        mensagem.textContent = "preencha a tarefa";
        mensagem.className = "text-danger fw-bold";

        return;
    }

    let li = document.createElement("li");

    li.textContent = texto;

    li.classList.add("list-group-item");

    lista.appendChild(li);

    input.value = "";

    mensagem.textContent = "a tarefa adicionada com sucesso";
    mensagem.className = "text-success fw-bold";
});