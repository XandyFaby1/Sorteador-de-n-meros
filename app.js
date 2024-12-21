function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obiterNumeroAliatorio(de, ate);
        sorteados.push(numero);
    }
    alert(sorteados);
    alert("deu certo")
}

function obiterNumeroAliatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}