function criarParagrafo() {
  let para = document.createElement("p");
  para.textContent = "Você clicou no botão!";
  document.body.appendChild(para);
}

const botoes = document.getElementById("botao");

botoes.addEventListener("click", criarParagrafo)