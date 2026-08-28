// ==========================================
// PLAYLIST SYSTEM
// ==========================================

// null = todas as playlists
let currentPlaylist = null;


// Nomes das playlists
const playlists = [
  "Prototype",
  "Recalibrated",
  "Ultimatrix",
  "Definitive"
];


// ==========================================
// CHECK IF ALIEN BELONGS TO PLAYLIST
// ==========================================

function alienBelongsToPlaylist(alien, playlistIndex) {

  // Nenhuma playlist selecionada
  if (playlistIndex === null) {
    return true;
  }

  // Verifica availability
  return alien.availability[playlistIndex] === 1;
}


// ==========================================
// CREATE PLAYLIST BUTTON
// ==========================================

function createPlaylistMenu() {

  const container = document.createElement("div");
  container.id = "playlistContainer";

  // Botão principal
  const button = document.createElement("button");
  button.id = "playlistButton";
  button.innerText = "Playlist";

  // Menu
  const menu = document.createElement("div");
  menu.id = "playlistMenu";


  // ==========================================
  // ALL
  // ==========================================

  const allOption = document.createElement("div");

  allOption.classList.add("playlistOption");
  allOption.innerText = "All";

  allOption.onclick = function() {

    currentPlaylist = null;

    // Remove seleção de todas
    menu.querySelectorAll(".playlistOption").forEach(opt => {
      opt.classList.remove("selected");
    });

    // Seleciona All
    allOption.classList.add("selected");

    menu.classList.remove("open");

    searchAlien();
  };

  menu.appendChild(allOption);


  // ==========================================
  // PLAYLISTS
  // ==========================================

  playlists.forEach(function(playlist, index) {

    const option = document.createElement("div");

    option.classList.add("playlistOption");
    option.innerText = playlist;

    option.onclick = function() {

      // Define a playlist atual
      currentPlaylist = index;

      // Remove seleção das outras
      menu.querySelectorAll(".playlistOption").forEach(opt => {
        opt.classList.remove("selected");
      });

      // Seleciona esta playlist
      option.classList.add("selected");

      menu.classList.remove("open");

      searchAlien();
    };

    menu.appendChild(option);

  });


  // ==========================================
  // OPEN / CLOSE MENU
  // ==========================================

  button.onclick = function(event) {

    event.stopPropagation();

    menu.classList.toggle("open");

  };


  // Impede o clique dentro do menu de fechar
  menu.onclick = function(event) {
    event.stopPropagation();
  };


  container.appendChild(button);
  container.appendChild(menu);

  document.body.appendChild(container);
}