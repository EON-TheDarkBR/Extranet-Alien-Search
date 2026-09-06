// ==========================================
// PLAYLIST SYSTEM
// ==========================================

// null = todas as playlists
// array = playlists selecionadas
let currentPlaylist = null;


// ==========================================
// PLAYLIST NAMES
// ==========================================

const playlists = [
  "Prototype",
  "Recalibrated",
  "Ultimatrix",
  "Definitive",
  "Biomnitrix",
  "Reboot"
];


// ==========================================
// CHECK IF ALIEN BELONGS TO PLAYLIST
// ==========================================

function alienBelongsToPlaylist(alien, selectedPlaylists) {

  // Nenhuma playlist selecionada
  if (
    selectedPlaylists === null ||
    selectedPlaylists.length === 0
  ) {
    return true;
  }


  // Alien pertence a pelo menos uma
  // das playlists selecionadas
  return selectedPlaylists.some(function(index) {

    return alien.availability[index] === 1;

  });

}


// ==========================================
// CREATE PLAYLIST BUTTON
// ==========================================

function createPlaylistMenu() {

  const container =
    document.createElement("div");

  container.id =
    "playlistContainer";


  // ==========================================
  // MAIN BUTTON
  // ==========================================

  const button =
    document.createElement("button");

  button.id =
    "playlistButton";

  button.innerText =
    "Playlist";


  // ==========================================
  // MENU
  // ==========================================

  const menu =
    document.createElement("div");

  menu.id =
    "playlistMenu";


  // ==========================================
  // ALL
  // ==========================================

  const allOption =
    document.createElement("div");

  allOption.classList.add(
    "playlistOption"
  );

  allOption.innerText =
    "All";


  allOption.onclick = function() {

    // Remove todas as playlists
    currentPlaylist = null;


    // Remove seleção de todas
    menu
      .querySelectorAll(".playlistOption")
      .forEach(function(opt) {

        opt.classList.remove(
          "selected"
        );

      });


    // Seleciona All
    allOption.classList.add(
      "selected"
    );


    searchAlien();

  };


  menu.appendChild(
    allOption
  );


  // ==========================================
  // PLAYLISTS
  // ==========================================

  playlists.forEach(
    function(playlist, index) {

      const option =
        document.createElement("div");

      option.classList.add(
        "playlistOption"
      );

      option.innerText =
        playlist;


      option.onclick = function() {

        // Se não existe nenhuma playlist
        // selecionada, cria o array
        if (currentPlaylist === null) {

          currentPlaylist = [];

        }


        // ==========================================
        // CHECK IF ALREADY SELECTED
        // ==========================================

        const alreadySelected =
          currentPlaylist.includes(index);


        // ==========================================
        // REMOVE PLAYLIST
        // ==========================================

        if (alreadySelected) {

          currentPlaylist =
            currentPlaylist.filter(function(i) {

              return i !== index;

            });


          option.classList.remove(
            "selected"
          );

        }


        // ==========================================
        // ADD PLAYLIST
        // ==========================================

        else {

          currentPlaylist.push(index);

          option.classList.add(
            "selected"
          );

        }


        // ==========================================
        // IF NOTHING SELECTED
        // ==========================================

        if (
          currentPlaylist.length === 0
        ) {

          currentPlaylist = null;

          allOption.classList.add(
            "selected"
          );

        }


        // ==========================================
        // REMOVE ALL SELECTION
        // ==========================================

        else {

          allOption.classList.remove(
            "selected"
          );

        }


        // NÃO FECHA O MENU
        // para permitir selecionar várias


        searchAlien();

      };


      menu.appendChild(
        option
      );

    }
  );


  // ==========================================
  // OPEN / CLOSE MENU
  // ==========================================

  button.onclick = function(event) {

    event.stopPropagation();

    menu.classList.toggle(
      "open"
    );

  };


  // Impede o clique dentro do menu
  // de fechar o menu
  menu.onclick = function(event) {

    event.stopPropagation();

  };


  container.appendChild(
    button
  );

  container.appendChild(
    menu
  );

  document.body.appendChild(
    container
  );

}