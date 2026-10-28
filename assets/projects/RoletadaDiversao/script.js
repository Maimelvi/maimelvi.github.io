const opcoes = [
  {
    pais: "Itália 🇮🇹",
    jantar: "Macarrão + pizza caseira",
    filme: "Luca",
    brincadeira: "Jogos de tabuleiro"
  },
  {
    pais: "Japão 🇯🇵",
    jantar: "Yakisoba simples",
    filme: "A Viagem de Chihiro",
    brincadeira: "Origami em família"
  },
  {
    pais: "Brasil 🇧🇷",
    jantar: "Comida caseira + sobremesa",
    filme: "Turma da Mônica",
    brincadeira: "Esconde-esconde"
  },
  {
    pais: "México 🇲🇽",
    jantar: "Tacos + guacamole",
    filme: "Viva - A Vida é uma Festa",
    brincadeira: "Karaokê em família"
  }
];

const track = document.getElementById("track");

function montarCarrossel() {
  for (let i = 0; i < 8; i++) {
    opcoes.forEach(op => {
      const div = document.createElement("div");
      div.classList.add("item");
      div.innerText = op.pais;
      track.appendChild(div);
    });
  }
}

montarCarrossel();

function girar() {
  const sorteadoIndex = Math.floor(Math.random() * opcoes.length);
  const totalItens = track.children.length;

  const posicaoFinal = (totalItens - opcoes.length + sorteadoIndex) * 300;

  track.style.transition = "transform 3s ease-out";
  track.style.transform = `translateX(-${posicaoFinal}px)`;

  setTimeout(() => {
    const sorteio = opcoes[sorteadoIndex];

    document.getElementById("resultado").innerHTML = `
      <h3>${sorteio.pais}</h3>
      <p> <strong>Jantar:</strong> ${sorteio.jantar}</p>
      <p> <strong>Filme:</strong> ${sorteio.filme}</p>
      <p> <strong>Brincadeira:</strong> ${sorteio.brincadeira}</p>
    `;
  }, 3000);
}