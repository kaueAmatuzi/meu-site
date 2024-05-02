// Lista de imagens e textos das frases
const frasesList = [
    { imagem: "imagens/FBCOL.jpg", texto: "Platinado Avançado para Barbeiros" },
    { imagem: "imagens/hotmartllpadroleadlovers.png", texto: "Texto da frase 2" },
    { imagem: "imagens/FBCOL.jpg", texto: "Texto da frase 3" },
    { imagem: "imagens/FBCOL.jpg", texto: "Texto da frase 4" },
    { imagem: "imagens/FBCOL.jpg", texto: "Texto da frase 5" }
  ];
  
  // Índice da próxima frase na sequência
  let currentIndex = 0;
  
  // Função para selecionar frase na sequência com efeito de carrossel
  function updateFrases() {
    const frasesElement = document.getElementById("frases");
    const frase = frasesList[currentIndex];
  
    // Criar nova div para a próxima frase
    const novaFrase = document.createElement("div");
    novaFrase.classList.add("frase");
  
    const imagemElement = document.createElement("img");
    imagemElement.src = frase.imagem;
    imagemElement.alt = "Imagem";
    imagemElement.className = "imagem";
  
    const textoElement = document.createElement("p");
    textoElement.textContent = frase.texto;
    textoElement.className = "texto";
  
    // Adicionar novo conteúdo com animação de entrada
    frasesElement.innerHTML = ''; // Limpar conteúdo antigo
    novaFrase.appendChild(imagemElement);
    novaFrase.appendChild(textoElement);
    frasesElement.appendChild(novaFrase);
  
    // Adicionar classe de animação para entrada
    novaFrase.classList.add("entrada-animacao");
  
    // Remover classe de animação após a entrada
    setTimeout(() => {
      novaFrase.classList.remove("entrada-animacao");
    }, 1000); // Tempo igual à duração da animação de entrada em milissegundos
  
    // Atualizar o índice para a próxima frase na sequência
    currentIndex = (currentIndex + 1) % frasesList.length;
  }
  
  // Chamar a função inicialmente para exibir a primeira frase
  updateFrases();
  
  // Chamar a função a cada intervalo de tempo (por exemplo, a cada 5 segundos)
  setInterval(updateFrases, 5000); // 5000 milissegundos = 5 segundos
  
  document.addEventListener("DOMContentLoaded", function() {
    const destaquesElement = document.getElementById("destaques");
  
    // Adicionar classe de animação para entrada
    destaquesElement.classList.add("entrada-animacao");
  
    // Remover classe de animação após a entrada
    setTimeout(() => {
      destaquesElement.classList.remove("entrada-animacao");
    }, 1000); // Tempo igual à duração da animação de entrada em milissegundos
  });
  