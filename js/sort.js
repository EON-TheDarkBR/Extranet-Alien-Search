// ==========================================
// SORT SYSTEM
// ==========================================

// null = ordem padrão
let currentSort = null;

// true = maior para menor
// false = menor para maior
let sortDescending = true;


// ==========================================
// SORT OPTIONS
// ==========================================

const sortOptions = [
  "HP",
  "ATK",
  "SPA",
  "SPE",
  "Total"
];


// ==========================================
// GET STAT
// ==========================================

function getAlienStat(alien, stat) {

  switch (stat) {

    case "HP":
      return alien.stats[0];

    case "ATK":
      return alien.stats[1];

    case "SPA":
      return alien.stats[2];

    case "SPE":
      return alien.stats[3];

    case "Total":
      return (
        alien.stats[0] +
        alien.stats[1] +
        alien.stats[2] +
        alien.stats[3]
      );

    default:
      return 0;
  }

}


// ==========================================
// SORT ALIENS
// ==========================================

function sortAliens(aliensList) {

  // ==========================================
  // DEFAULT
  // ==========================================

  if (currentSort === null) {

    return aliensList;

  }


  // ==========================================
  // SORT
  // ==========================================

  return aliensList.sort(function(a, b) {

    let statA =
      getAlienStat(a, currentSort);

    let statB =
      getAlienStat(b, currentSort);


    if (sortDescending) {

      return statB - statA;

    } else {

      return statA - statB;

    }

  });

}


// ==========================================
// CHANGE SORT
// ==========================================

function changeSort(stat) {

  // ==========================================
  // CLICKED SAME STAT
  // ==========================================

  if (currentSort === stat) {

    // Inverte a ordem
    sortDescending =
      !sortDescending;

  }


  // ==========================================
  // CLICKED DIFFERENT STAT
  // ==========================================

  else {

    currentSort =
      stat;

    // Sempre começa do maior
    sortDescending =
      true;

  }


  // ==========================================
  // UPDATE BUTTONS
  // ==========================================

  updateSortButtons();


  // ==========================================
  // UPDATE RESULTS
  // ==========================================

  searchAlien();

}


// ==========================================
// DEFAULT SORT
// ==========================================

function resetSort() {

  currentSort = null;

  sortDescending = true;

  updateSortButtons();

  searchAlien();

}


// ==========================================
// UPDATE BUTTON VISUAL
// ==========================================

function updateSortButtons() {

  const buttons =
    document.querySelectorAll(".sortOption");


  buttons.forEach(function(button) {

    // Remove seleção
    button.classList.remove("selected");

    // Remove direção
    button.classList.remove("descending");
    button.classList.remove("ascending");


    // ==========================================
    // SELECTED
    // ==========================================

    if (
      button.dataset.sort === currentSort
    ) {

      button.classList.add("selected");


      if (sortDescending) {

        button.classList.add("descending");

      } else {

        button.classList.add("ascending");

      }

    }

  });

}


// ==========================================
// CREATE SORT MENU
// ==========================================

function createSortMenu() {

  const searchBar =
    document.getElementById("searchInput");


  // ==========================================
  // CONTAINER
  // ==========================================

  const container =
    document.createElement("div");

  container.id =
    "sortContainer";


  // ==========================================
  // BUTTON
  // ==========================================

  const button =
    document.createElement("button");

  button.id =
    "sortButton";

  button.innerText =
    "Sort";


  // ==========================================
  // MENU
  // ==========================================

  const menu =
    document.createElement("div");

  menu.id =
    "sortMenu";


  // ==========================================
  // DEFAULT
  // ==========================================

  const defaultOption =
    document.createElement("div");

  defaultOption.classList.add(
    "sortOption"
  );

  defaultOption.dataset.sort =
    "default";

  defaultOption.innerText =
    "Default";


  defaultOption.onclick =
    function() {

      resetSort();

      menu.classList.remove("open");

    };


  menu.appendChild(
    defaultOption
  );


  // ==========================================
  // STATS
  // ==========================================

  sortOptions.forEach(function(stat) {

    const option =
      document.createElement("div");


    option.classList.add(
      "sortOption"
    );


    option.dataset.sort =
      stat;


    option.innerText =
      stat;


    option.onclick =
      function() {

        changeSort(stat);

        menu.classList.remove("open");

      };


    menu.appendChild(option);

  });


  // ==========================================
  // OPEN / CLOSE
  // ==========================================

  button.onclick =
    function(event) {

      event.stopPropagation();

      menu.classList.toggle("open");

    };


  menu.onclick =
    function(event) {

      event.stopPropagation();

    };


  // ==========================================
  // ADD ELEMENTS
  // ==========================================

  container.appendChild(button);

  container.appendChild(menu);

  document.body.appendChild(container);


  // ==========================================
  // INITIAL STATE
  // ==========================================

  updateSortButtons();

}