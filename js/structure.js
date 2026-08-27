// ==========================================
// BIOLOGICAL STRUCTURE SYSTEM
// ==========================================

// null = todas as estruturas
let currentStructure = null;


// ==========================================
// STRUCTURES
// ==========================================

const structures = [
  "Botanical",
  "Cosmic",
  "Electric",
  "Fabric",
  "Fire",
  "Gas",
  "Ice",
  "Mechanical",
  "Organic",
  "Poison",
  "Radioactive",
  "Mineral",
  "Water"
];


// ==========================================
// CHECK IF ALIEN HAS STRUCTURE
// ==========================================

function alienHasStructure(alien, structure) {

  // Nenhuma estrutura selecionada
  if (structure === null) {
    return true;
  }

  const selected =
    structure.toUpperCase();

  return (
    alien.body1 === selected ||
    alien.body2 === selected ||
    alien.body3 === selected
  );
}


// ==========================================
// CREATE STRUCTURE BUTTON
// ==========================================

function createStructureMenu() {

  const searchBar =
    document.getElementById("searchInput");


  // ==========================================
  // CONTAINER
  // ==========================================

  const container =
    document.createElement("div");

  container.id =
    "structureContainer";


  // ==========================================
  // BOTÃO PRINCIPAL
  // ==========================================

  const button =
    document.createElement("button");

  button.id =
    "structureButton";

  button.innerText =
    "Structure";


  // ==========================================
  // MENU
  // ==========================================

  const menu =
    document.createElement("div");

  menu.id =
    "structureMenu";


  // ==========================================
  // ALL
  // ==========================================

  const allOption =
    document.createElement("div");

  allOption.classList.add(
    "structureOption"
  );

  allOption.innerText =
    "All";


  allOption.onclick =
    function() {

      currentStructure = null;

      menu.classList.remove("open");

      searchAlien();

    };


  menu.appendChild(allOption);


  // ==========================================
  // STRUCTURES
  // ==========================================

  structures.forEach(
    function(structure) {

      const option =
        document.createElement("div");

      option.classList.add(
        "structureOption"
      );

      option.innerText =
        structure;


      option.onclick =
        function() {

          currentStructure =
            structure;

          menu.classList.remove(
            "open"
          );

          searchAlien();

        };


      menu.appendChild(option);

    }
  );


  // ==========================================
  // OPEN / CLOSE MENU
  // ==========================================

  button.onclick =
    function(event) {

      event.stopPropagation();

      menu.classList.toggle("open");

    };


  // ==========================================
  // PREVENT MENU CLOSE
  // ==========================================

  menu.onclick =
    function(event) {

      event.stopPropagation();

    };


  // ==========================================
  // ADD TO CONTAINER
  // ==========================================

  container.appendChild(button);

  container.appendChild(menu);


  // ==========================================
  // ADD TO PAGE
  // ==========================================

  document.body.appendChild(container);

}