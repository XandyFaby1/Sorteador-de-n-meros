function sortear() {
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
        alert("Erro! Por favor, insira números válidos.");
        return;
    }

    if (de > ate) {
        alert("Erro! O valor 'De' deve ser menor ou igual ao valor 'Até'.");
        return;
    }

    if (quantidade <= 0) {
        alert("Erro! A quantidade deve ser maior que zero.");
        return;
    }

    if (quantidade > (ate - de + 1)) {
        alert("Erro! A quantidade de números a sortear é maior que o intervalo possível.");
        return;
    }

    let numerosPossiveis = [];
    for (let i = de; i <= ate; i++) {
        numerosPossiveis.push(i);
    }

    // Embaralhamento Fisher-Yates
    for (let i = numerosPossiveis.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numerosPossiveis[i], numerosPossiveis[j]] = [numerosPossiveis[j], numerosPossiveis[i]];
    }

    let sorteados = numerosPossiveis.slice(0, quantidade);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados.join(', ')}</label>`; // Adicionado join para melhor formatação
    alertarStatusDoBotao();
}

function alertarStatusDoBotao() {
    let botao = document.getElementById("btn-reiniciar");

    if (botao.classList.contains("container__botao-desabilitado")) {
        botao.classList.remove("container__botao-desabilitado");
        botao.classList.add("container__botao");
    } else {
        botao.classList.remove("container__botao");
        botao.classList.add("container__botao-desabilitado");
    }
}

function reiniciar() {
    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alertarStatusDoBotao();
}