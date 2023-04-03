// Define um objeto para representar um cartão
function Card(text) {
    this.text = text;
    this.color = "#fff";
    this.name = "Card";
  }
  
  // Define um objeto para representar um quadro
  function Board(title) {
    this.title = title;
    this.color = "#eee";
    this.name = "Board";
    this.cards = [];
  
    // Adiciona um cartão ao quadro
    this.addCard = function(card) {
      this.cards.push(card);
    };
  }
  
  // Cria um quadro com um título específico
  function createBoard(title) {
    var board = new Board(title);
  
    // Adiciona o quadro ao contêiner de quadros
    var boardContainer = document.getElementById("board-container");
    var boardElement = document.createElement("div");
    boardElement.className = "board";
    boardElement.style.backgroundColor = board.color;
  
    var boardTitleElement = document.createElement("div");
    boardTitleElement.className = "board-title";
    boardTitleElement.textContent = board.title;
    boardElement.appendChild(boardTitleElement);
  
    // Cria um elemento para cada cartão no quadro
    for (var i = 0; i < board.cards.length; i++) {
      var cardElement = document.createElement("div");
      cardElement.className = "card";
      cardElement.style.backgroundColor = board.cards[i].color;
      cardElement.textContent = board.cards[i].text;
      cardElement.addEventListener("click", function() {
        // Exibe o modal de edição do cartão ao clicar no cartão
        showEditModal(board, i);
      });

        // Criação do botão de edição do cartão
    var cardEditButton = document.createElement("button");
    cardEditButton.classList.add("card-edit-button");
    cardEditButton.innerText = "Editar";
    cardEditButton.addEventListener("click", function() {
    // Lógica para editar o cartão
    });
    card.appendChild(cardEditButton);