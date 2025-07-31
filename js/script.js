// carrossel.js

const pratosDaSemana = [
  {
    dia: "Segunda",
    nome: "Arroz com feijão",
    imagem: "img/segunda.jpg",
    detalhes: "Acompanhado de salada e frango grelhado."
  },
  {
    dia: "Terça",
    nome: "Macarronada",
    imagem: "img/terca.jpg",
    detalhes: "Macarrão ao sugo com queijo ralado."
  },
  {
    dia: "Quarta",
    nome: "Escondidinho",
    imagem: "img/quarta.jpg",
    detalhes: "Carne moída com purê de batata e arroz branco."
  },
  {
    dia: "Quinta",
    nome: "Panqueca de legumes",
    imagem: "img/quinta.jpg",
    detalhes: "Recheada com legumes e servida com arroz."
  },
  {
    dia: "Sexta",
    nome: "Peixe assado",
    imagem: "img/sexta.jpg",
    detalhes: "Com purê de batata e legumes cozidos."
  }
];

let indiceAtual = 0;

function exibirPrato(prato) {
  const container = document.getElementById("carrossel");
  container.innerHTML = `
    <div class="card fade">
      <h2>${prato.dia}</h2>
      <img src="${prato.imagem}" alt="${prato.nome}" class="imagem-prato">
      <h3>${prato.nome}</h3>
      <p>${prato.detalhes}</p>
    </div>
  `;
}

function iniciarCarrossel() {
  exibirPrato(pratosDaSemana[indiceAtual]);
  setInterval(() => {
    indiceAtual = (indiceAtual + 1) % pratosDaSemana.length;
    exibirPrato(pratosDaSemana[indiceAtual]);
  }, 5000);
}

document.addEventListener("DOMContentLoaded", iniciarCarrossel);
