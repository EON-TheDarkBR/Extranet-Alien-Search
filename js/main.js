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
// INITIALIZATION
// ==========================================

window.addEventListener(
  "load",
  function() {

    createPlaylistMenu();

    createAffinityMenu();

    createStructureMenu();

    searchAlien();

  }
);