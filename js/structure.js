// ==========================================
// BIOLOGICAL STRUCTURE SYSTEM
// ==========================================

// [] = todas as estruturas
let currentStructure = [];


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

function alienHasStructure(alien, structures) {

  // Nenhuma estrutura selecionada
  if (structures.length === 0) {
    return true;
  }

  const alienStructures = [
    alien.body1,
    alien.body2,
    alien.body3
  ];

  // O alien precisa possuir TODAS as estruturas selecionadas
  return structures.every(structure =>
    alienStructures.includes(structure.toUpperCase())
  );
}


// ==========================================
// CREATE STRUCTURE BUTTON
// ==========================================

function createStructureMenu() {

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

      // Remove todas as estruturas selecionadas
      currentStructure = [];

      // Remove o toggle de todas as opções
      menu.querySelectorAll(".structureOption").forEach(option => {
        option.classList.remove("selected");
      });

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

          const value =
            structure.toUpperCase();


          // ==========================================
          // REMOVE
          // ==========================================

          if (currentStructure.includes(value)) {

            currentStructure =
              currentStructure.filter(
                s => s !== value
              );

            option.classList.remove(
              "selected"
            );

          }


          // ==========================================
          // ADD
          // ==========================================

          else {

            currentStructure.push(
              value
            );

            option.classList.add(
              "selected"
            );

          }


          // Atualiza resultados
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