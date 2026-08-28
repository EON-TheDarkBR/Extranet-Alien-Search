// ==========================================
// ELEMENTAL AFFINITY SYSTEM
// ==========================================

// [] = todas as afinidades
let currentAffinity = [];


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
// CHECK IF ALIEN HAS THE SELECTED AFFINITIES
// ==========================================

function alienHasAffinity(alien, affinities) {

  // Nenhuma afinidade selecionada
  if (affinities.length === 0) {
    return true;
  }

  const alienAffinities = [
    alien.ele1,
    alien.ele2,
    alien.ele3,
    alien.ele4
  ];

  // Precisa possuir TODAS as afinidades selecionadas
  return affinities.every(affinity =>
    alienAffinities.includes(affinity.toUpperCase())
  );
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

    currentAffinity = [];

    menu.querySelectorAll(".affinityOption").forEach(option => {
      option.classList.remove("selected");
    });

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

      const value = affinity.toUpperCase();

      // Remove
      if (currentAffinity.includes(value)) {

        currentAffinity =
          currentAffinity.filter(a => a !== value);

        option.classList.remove("selected");

      }

      // Add
      else {

        currentAffinity.push(value);

        option.classList.add("selected");

      }

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