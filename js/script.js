const pratosDaSemana = [
  {
    dia: "Segunda",
    nome: "Feijoada Completa",
    imagem: "img/quinta.jpg",
    detalhes: "Feijoada com acompanhamentos tradicionais"
  },
  {
    dia: "Terça",
    nome: "Macarrão à Bolonhesa",
    imagem: "img/terca.jpg",
    detalhes: "Macarrão com molho de carne especial"
  },
  {
    dia: "Quarta",
    nome: "Frango Grelhado",
    imagem: "img/sexta.jpg",
    detalhes: "Com legumes frescos e arroz integral"
  },
  {
    dia: "Quinta",
    nome: "Peixe Assado",
    imagem: "img/segunda.jpg",
    detalhes: "Com purê de batata e salada verde"
  },
  {
    dia: "Sexta",
    nome: "Lasanha Vegetariana",
    imagem: "img/quarta.jpg",
    detalhes: "Camadas de massa, queijo e legumes"
  }
];

let indiceAtual = 0;

function exibirPratos() {
  const container = document.getElementById("carrossel");
  container.innerHTML = '';
  
  for (let i = -1; i <= 1; i++) {
    const index = (indiceAtual + i + pratosDaSemana.length) % pratosDaSemana.length;
    const prato = pratosDaSemana[index];
    
    const card = document.createElement('div');
    card.className = `card ${i === 0 ? 'destaque' : ''}`;
    card.innerHTML = `
      <h3>${prato.dia}</h3>
      <img src="${prato.imagem}" alt="${prato.nome}" class="imagem-prato">
      <h4>${prato.nome}</h4>
      <p>${prato.detalhes}</p>
    `;
    container.appendChild(card);
  }
}

function iniciarCarrossel() {
  exibirPratos();
  setInterval(() => {
    indiceAtual = (indiceAtual + 1) % pratosDaSemana.length;
    exibirPratos();
  }, 5000);
}

document.addEventListener("DOMContentLoaded", iniciarCarrossel);