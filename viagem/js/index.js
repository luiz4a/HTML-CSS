// Script para calcular o custo da viagem
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("botao");
  const spans = document.querySelectorAll(".central span");
  const inputs = document.querySelectorAll('.central input[type="text"]');
  const resultado = document.getElementById("resultado");

  btn.addEventListener("click", function () {
    // Pega os valores dos inputs
    const distancia = parseFloat(inputs[0].value.replace(",", "."));
    const consumo = parseFloat(inputs[1].value.replace(",", "."));
    const preco = parseFloat(inputs[2].value.replace(",", "."));

    // Validação simples
    if (isNaN(distancia) || isNaN(consumo) || isNaN(preco) || consumo === 0) {
      resultado.textContent = "Preencha todos os campos corretamente!";
      resultado.style.color = "yellow";
      return;
    }

    // Calcula o custo
    const litros = distancia / consumo;
    const custo = litros * preco;
    resultado.textContent = `Custo da viagem: R$ ${custo.toFixed(2)}`;
    resultado.style.color = "white";
  });
});
