const botoesAbas = document.querySelectorAll(".aba-botao");
const conteudosAbas = document.querySelectorAll(".conteudo-aba");
const formularios = document.querySelectorAll(".formulario-doacao");

botoesAbas.forEach((botao) => {
    botao.addEventListener("click", () => {
        const abaSelecionada = botao.getAttribute("data-aba");

        botoesAbas.forEach((item) => {
            item.classList.remove("ativo");
        });

        conteudosAbas.forEach((conteudo) => {
            conteudo.classList.remove("ativo");
        });

        botao.classList.add("ativo");
        document.getElementById(abaSelecionada).classList.add("ativo");
    });
});

formularios.forEach((formulario) => {
    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const tipoDoacao = formulario.getAttribute("data-tipo");
        const quantidade = formulario.querySelector("input").value;
        const local = formulario.querySelector("select").value;
        const mensagem = formulario.querySelector(".mensagem-sucesso");

        if (quantidade <= 0 || local === "") {
            mensagem.style.display = "block";
            mensagem.style.background = "#ffebee";
            mensagem.style.color = "#c62828";
            mensagem.textContent = "Preencha a quantidade e selecione uma localização válida.";
            return;
        }

        mensagem.style.display = "block";
        mensagem.style.background = "#e8f5e9";
        mensagem.style.color = "#2e7d32";
        mensagem.textContent = `Doação de ${quantidade} item(ns) de ${tipoDoacao} registrada para ${local}. Obrigado por ajudar! 💚`;

        formulario.reset();
    });
});
