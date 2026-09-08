// ==========================================
// SEARCH ALIEN
// ==========================================

function searchAlien() {

  let search = document
    .getElementById("searchInput")
    .value
    .toUpperCase();

  let resultsDiv =
    document.getElementById("results");

  resultsDiv.innerHTML = "";

  let found = false;

  // ==========================================
  // SEARCH DATABASE
  // ==========================================

  let filteredAliens = [];

  for (let i = 0; i < aliens.length; i++) {

    // Pesquisa usando NAME
    if (
      aliens[i].name.includes(search) &&
      alienBelongsToPlaylist(aliens[i], currentPlaylist) &&
      alienHasAffinity(aliens[i], currentAffinity) &&
      alienHasStructure(aliens[i], currentStructure)
    ) {

      filteredAliens.push(aliens[i]);

    }

  }


  // ==========================================
  // SORT RESULTS
  // ==========================================

  filteredAliens =
    sortAliens(filteredAliens);


  // ==========================================
  // COMPATIBLE RESULTS
  // ==========================================

  let resultCount =
    document.createElement("div");

  resultCount.id =
    "resultCount";

  resultCount.innerText =
    filteredAliens.length +
    " Compatible Results";

  resultsDiv.appendChild(resultCount);


  // ==========================================
  // CREATE RESULT CARDS
  // ==========================================

  for (let i = 0; i < filteredAliens.length; i++) {

    let alien = filteredAliens[i];

    found = true;


    // ==========================================
    // CREATE RESULT CARD
    // ==========================================

    let card =
      document.createElement("div");

    card.classList.add("result");


    // ==========================================
    // CLICK CARD
    // ==========================================

    card.onclick = function() {

      // Esquerda livre
      if (!leftPinned) {

        openSidePanel(
          alien,
          "sidePanel"
        );

      }

      // Esquerda fixada + direita livre
      else if (!rightPinned) {

        openSidePanel(
          alien,
          "rightPanel"
        );

      }

      // Ambos fixados
      else {

        console.log(
          "Ambos os painéis estão fixados"
        );

      }

    };


    // ==========================================
    // CARD LAYOUT
    // ==========================================

    card.style.display = "flex";
    card.style.alignItems = "center";
    card.style.gap = "20px";


    // ==========================================
    // PORTRAIT
    // ==========================================

    let img =
      document.createElement("img");

    img.src =
      alien.portrait;

    img.style.height =
      "100px";

    img.style.border =
      "3px solid #82A9C3";

    img.style.borderRadius =
      "10px";


    // ==========================================
    // ALIEN NAME
    // ==========================================

    let name =
      document.createElement("div");

    name.innerText =
      alien.display;

    name.style.fontSize =
      "23px";


    // ==========================================
    // WATCH ICONS
    // ==========================================

    let watches =
      document.createElement("div");

    watches.style.display =
      "flex";

    watches.style.gap =
      "10px";

    watches.style.marginTop =
      "50px";

    watches.style.marginLeft =
      "120px";


    let watchIcons = [

      "icons/OS_WATCH.png",
      "icons/AF_WATCH.png",
      "icons/UA_WATCH.png",
      "icons/OV_WATCH.png",
      "icons/BIO_WATCH.png",
      "icons/RB_WATCH.png"

    ];


    // Cria os 4 Omnitrix
    for (let j = 0; j < 6; j++) {

      let icon =
        document.createElement("img");

      icon.src =
        watchIcons[j];


      // UA é um pouco menor
      if (j === 2) {

        icon.style.height =
          "23px";

        icon.style.marginTop =
          "4px";

      } else {

        icon.style.height =
          "30px";

      }


      // Se não disponível → grayscale
      if (alien.availability[j] === 0) {

        icon.style.filter =
          "grayscale(100%)";

        icon.style.opacity =
          "0.4";

      }


      watches.appendChild(icon);

    }


// ==========================================
// BIOLOGICAL STRUCTURE
// ==========================================

let elementsList = [

  alien.body1,
  alien.body2,
  alien.body3,
  alien.body4

].filter(
  e => e && e.trim().toUpperCase() !== "NONE"
);


let elementsContainer =
  document.createElement("div");

elementsContainer.style.display =
  "flex";

elementsContainer.style.flexDirection =
  "column";

elementsContainer.style.marginTop =
  "5px";

elementsContainer.style.marginLeft =
  "350px";


// ==========================================
// 1 ELEMENT
// ==========================================

if (elementsList.length === 1) {

  let row =
    document.createElement("div");


  let icon =
    document.createElement("img");

  icon.src =
    "elements/" +
    elementsList[0] +
    ".png";

  icon.style.height =
    "30px";


  row.appendChild(icon);

  elementsContainer.appendChild(row);

}


// ==========================================
// 2 ELEMENTS
// ==========================================

if (elementsList.length === 2) {

  let row =
    document.createElement("div");

  row.style.display =
    "flex";

  row.style.gap =
    "10px";


  elementsList.forEach(el => {

    let icon =
      document.createElement("img");

    icon.src =
      "elements/" +
      el +
      ".png";

    icon.style.height =
      "30px";


    row.appendChild(icon);

  });


  elementsContainer.appendChild(row);

}


// ==========================================
// 3 ELEMENTS
// ==========================================

if (elementsList.length === 3) {

  // Linha superior
  let topRow =
    document.createElement("div");

  topRow.style.display =
    "flex";

  topRow.style.gap =
    "10px";


  for (let k = 0; k < 2; k++) {

    let icon =
      document.createElement("img");

    icon.src =
      "elements/" +
      elementsList[k] +
      ".png";

    icon.style.height =
      "30px";


    topRow.appendChild(icon);

  }


  // Linha inferior
  let bottomRow =
    document.createElement("div");

  bottomRow.style.marginTop =
    "5px";


  let icon =
    document.createElement("img");

  icon.src =
    "elements/" +
    elementsList[2] +
    ".png";

  icon.style.height =
    "30px";


  bottomRow.appendChild(icon);


  elementsContainer.appendChild(
    topRow
  );

  elementsContainer.appendChild(
    bottomRow
  );

}


// ==========================================
// 4 ELEMENTS
// ==========================================

if (elementsList.length === 4) {

  for (let r = 0; r < 2; r++) {

    let row =
      document.createElement("div");

    row.style.display =
      "flex";

    row.style.gap =
      "10px";

    row.style.marginTop =
      "5px";


    for (let c = 0; c < 2; c++) {

      let index =
        r * 2 + c;


      let icon =
        document.createElement("img");

      icon.src =
        "elements/" +
        elementsList[index] +
        ".png";

      icon.style.height =
        "30px";


      row.appendChild(icon);

    }


    elementsContainer.appendChild(row);

  }

}


    // ==========================================
    // BIOLOGICAL STRUCTURE TITLE
    // ==========================================

    let bioTitle =
      document.createElement("div");

    bioTitle.innerText =
      "Biological Structure";

    bioTitle.style.fontSize =
      "12px";

    bioTitle.style.fontWeight =
      "bold";

    bioTitle.style.marginTop =
      "-106px";

    bioTitle.style.marginLeft =
      "350px";


    // ==========================================
    // ELEMENTAL AFFINITY
    // ==========================================

    let affinityList = [

      alien.ele1,
      alien.ele2,
      alien.ele3,
      alien.ele4

    ].filter(
      e => e !== "NONE"
    );


    let affinityContainer =
      document.createElement("div");

    affinityContainer.innerText =
      "Elemental Affinity";

    affinityContainer.style.fontSize =
      "12px";

    affinityContainer.style.fontWeight =
      "bold";

    affinityContainer.style.display =
      "flex";

    affinityContainer.style.flexDirection =
      "column";

    affinityContainer.style.marginTop =
      "5px";

    affinityContainer.style.marginLeft =
      "350px";


    // ==========================================
    // AFFINITY - 1 ELEMENT
    // ==========================================

    if (affinityList.length === 1) {

      let row =
        document.createElement("div");


      let icon =
        document.createElement("img");

      icon.src =
        "elements/" +
        affinityList[0] +
        ".png";

      icon.style.height =
        "30px";


      row.appendChild(icon);

      affinityContainer.appendChild(row);

    }


    // ==========================================
    // AFFINITY - 2 ELEMENTS
    // ==========================================

    if (affinityList.length === 2) {

      let row =
        document.createElement("div");

      row.style.display =
        "flex";

      row.style.gap =
        "10px";


      affinityList.forEach(el => {

        let icon =
          document.createElement("img");

        icon.src =
          "elements/" +
          el +
          ".png";

        icon.style.height =
          "30px";


        row.appendChild(icon);

      });


      affinityContainer.appendChild(row);

    }


    // ==========================================
    // AFFINITY - 3 ELEMENTS
    // ==========================================

    if (affinityList.length === 3) {

      let topRow =
        document.createElement("div");

      topRow.style.display =
        "flex";

      topRow.style.gap =
        "10px";


      for (let k = 0; k < 2; k++) {

        let icon =
          document.createElement("img");

        icon.src =
          "elements/" +
          affinityList[k] +
          ".png";

        icon.style.height =
          "30px";


        topRow.appendChild(icon);

      }


      let bottomRow =
        document.createElement("div");

      bottomRow.style.marginTop =
        "5px";


      let icon =
        document.createElement("img");

      icon.src =
        "elements/" +
        affinityList[2] +
        ".png";

      icon.style.height =
        "30px";


      bottomRow.appendChild(icon);


      affinityContainer.appendChild(
        topRow
      );

      affinityContainer.appendChild(
        bottomRow
      );

    }


    // ==========================================
    // AFFINITY - 4 ELEMENTS
    // ==========================================

    if (affinityList.length === 4) {

      for (let r = 0; r < 2; r++) {

        let row =
          document.createElement("div");

        row.style.display =
          "flex";

        row.style.gap =
          "10px";

        row.style.marginTop =
          "5px";


        for (let c = 0; c < 2; c++) {

          let index =
            r * 2 + c;


          let icon =
            document.createElement("img");

          icon.src =
            "elements/" +
            affinityList[index] +
            ".png";

          icon.style.height =
            "30px";


          row.appendChild(icon);

        }


        affinityContainer.appendChild(row);

      }

    }


    // ==========================================
    // INFO CONTAINER
    // ==========================================

    let info =
      document.createElement("div");

    info.style.display =
      "flex";

    info.style.flexDirection =
      "column";


    info.appendChild(name);
    info.appendChild(watches);
    info.appendChild(bioTitle);
    info.appendChild(elementsContainer);
    info.appendChild(affinityContainer);


    // ==========================================
    // ADD EVERYTHING TO CARD
    // ==========================================

    card.appendChild(img);
    card.appendChild(info);


    // ==========================================
    // ADD CARD TO RESULTS
    // ==========================================

    resultsDiv.appendChild(card);

  }


  // ==========================================
  // NO RESULTS
  // ==========================================

  if (!found) {

    // O contador já mostra 0 Compatible Results.

  }

}