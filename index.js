const botao = document.getElementById("botao");
const resultado = document.getElementById("resultado");
let numeroSorteado = null;

botao.addEventListener("click", () => {
    numeroSorteado = Math.floor(Math.random() * 6) + 1;
    resultado.textContent = `O número sorteado foi ${numeroSorteado}!`;
    localStorage.setItem("numeroSorteado", numeroSorteado);
});

window.addEventListener("load", () => {
    numeroSorteado = localStorage.getItem("numeroSorteado");
    if (numeroSorteado) {
        resultado.textContent = `O número sorteado foi ${numeroSorteado}!`;
    }
});
