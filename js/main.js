// ==========================================
// PAGE INITIALIZATION
// ==========================================

const input =
  document.getElementById("searchInput");


// ==========================================
// SEARCH WHILE TYPING
// ==========================================

input.addEventListener(
  "input",
  searchAlien
);



// ==========================================
// SCROLL BUTTON
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

  const scrollButton = document.getElementById("scrollButton");

  let scrollToTop = true;

  scrollButton.addEventListener("click", () => {

    if (scrollToTop) {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

      scrollButton.textContent = "↓";

      scrollToTop = false;

    } else {

      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth"
      });

      scrollButton.textContent = "↑";

      scrollToTop = true;

    }

  });

});


// ==========================================
// INITIALIZATION
// ==========================================

window.addEventListener(
  "load",
  function() {

    createPlaylistMenu();

    createAffinityMenu();

    createStructureMenu();

    createSortMenu();

    searchAlien();

  }
);
// ==========================================
// RANDOM ALIEN
// ==========================================

window.addEventListener("load", function() {

  const randomAlienButton =
    document.getElementById("randomAlienButton");


  randomAlienButton.addEventListener("click", function(e) {

    // Impede o document de fechar o painel
    e.stopPropagation();


    console.log("RANDOM: botão foi clicado!");


    const randomIndex =
      Math.floor(Math.random() * aliens.length);


    const randomAlien =
      aliens[randomIndex];


    console.log(
      "RANDOM: alien sorteado:",
      randomAlien
    );


    // ==========================================
    // PAINEL ESQUERDO
    // ==========================================

    if (!leftPinned) {

      openSidePanel(
        randomAlien,
        "sidePanel"
      );

      return;

    }


    // ==========================================
    // PAINEL DIREITO
    // ==========================================

    if (!rightPinned) {

      openSidePanel(
        randomAlien,
        "rightPanel"
      );

      return;

    }


    // ==========================================
    // OS DOIS ESTÃO FIXADOS
    // ==========================================

    console.log(
      "RANDOM: os dois painéis estão fixados"
    );

  });

});