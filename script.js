let tarefa = document.querySelector("#tarefa");
let btn = document.querySelector("#btn");
let mensagem = document.getElementById("mensagem");
let lista = document.getElementById("lista");

btn.addEventListener("click", () => {

    let texto = tarefa.value;

    if (texto === "") {

        mensagem.textContent = "preencha a tarefa";
        mensagem.className = "text-danger fw-bold text-center";

    } else {

        let li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");

        // isso vai servir para deixar a tarefa marcada (checkbox - marcar caixa)
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("form-check-input", "me-2");

        let textoNode = document.createTextNode(texto);

        let btnApagar = document.createElement("button");
        btnApagar.textContent = "Remover";
        btnApagar.classList.add("btn", "btn-danger", "btn-sm");

        checkbox.addEventListener("change", () => {
// quando marcar a tarefa, ficara vermelha, assim que desmarcar, voltara a ser preta
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
                li.style.color = "red";
            } else {
                li.style.textDecoration = "none";
                li.style.color = "black";
            }

        });

        btnApagar.addEventListener("click", () => {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(textoNode);
        li.appendChild(btnApagar);

        lista.appendChild(li);

        tarefa.value = "";

        mensagem.textContent = "tarefa adicionada com sucesso";
        mensagem.className = "text-success fw-bold text-center";
    }

});