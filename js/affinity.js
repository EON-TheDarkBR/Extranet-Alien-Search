// ==========================================
// ELEMENTAL AFFINITY SYSTEM
// ==========================================

// null = todas as afinidades
let currentAffinity = null;


// Lista de afinidades
const affinities = [
  "Electric",
  "Energy",
  "Fire",
  "Gas",
  "Ice",
  "Poison",
  "Radioactive",
  "Sound",
  "Water",
  "Wind"
];


// ==========================================
// CHECK IF ALIEN HAS THE SELECTED AFFINITY
// ==========================================

function alienHasAffinity(alien, affinity) {

  // Nenhuma afinidade selecionada
  if (affinity === null) {
    return true;
  }

  // Converte para maiúsculo porque o aliens.js usa
  // FIRE, ELECTRIC, ENERGY, etc.
  const selectedAffinity = affinity.toUpperCase();

  return [
    alien.ele1,
    alien.ele2,
    alien.ele3,
    alien.ele4
  ].includes(selectedAffinity);
}


// ==========================================
// CREATE AFFINITY MENU
// ==========================================

function createAffinityMenu() {

  const container = document.createElement("div");
  container.id = "affinityContainer";

  // Botão principal
  const button = document.createElement("button");
  button.id = "affinityButton";
  button.innerText = "Affinity";

  // Menu
  const menu = document.createElement("div");
  menu.id = "affinityMenu";


  // ==========================================
  // ALL
  // ==========================================

  const allOption = document.createElement("div");

  allOption.classList.add("affinityOption");
  allOption.innerText = "All";

  allOption.onclick = function() {

    currentAffinity = null;

    menu.classList.remove("open");

    searchAlien();
  };

  menu.appendChild(allOption);


  // ==========================================
  // AFFINITIES
  // ==========================================

  affinities.forEach(function(affinity) {

    const option = document.createElement("div");

    option.classList.add("affinityOption");
    option.innerText = affinity;

    option.onclick = function() {

      currentAffinity = affinity;

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


  // Impede clique dentro do menu
  menu.onclick = function(event) {
    event.stopPropagation();
  };


  container.appendChild(button);
  container.appendChild(menu);

  document.body.appendChild(container);
}