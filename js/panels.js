let leftPinned = false;
let rightPinned = false;


// ==========================================
// OPEN SIDE PANEL
// ==========================================

function openSidePanel(alien, side) {

  let panel = document.getElementById(side);
  let back = aliensbackcards.find(a => a.name === alien.name) || {};

  panel.classList.add("open");

  panel.innerHTML = `
    <div style="text-align:center; position:relative;">

      <img src="${alien.portrait}" style="
        width: 200px;
        border: 3px solid #82A9C3;
        border-radius: 10px;
      ">

      <img src="buttons/pinbutton.png"
           class="pinButton"
           style="
             position:absolute;
             top: 0;
             right: 20px;
             width: 50px;
             cursor: pointer;
             filter: grayscale(100%);
             opacity: 0.6;
           ">

      <div style="margin-top:10px; font-size:20px; font-weight:bold;">
        ${alien.display}
      </div>

    </div>

    <div style="display:flex; justify-content:space-between; margin-top:15px;">

      <div id="bioSection" style="width:48%; text-align:center;">
        <div class="section-title">Biological Structure</div>
      </div>

      <div id="affinitySection" style="width:48%; text-align:center;">
        <div class="section-title">Elemental Affinity</div>
      </div>

    </div>

    <div class="divider"></div>

    <div style="display:flex; justify-content:space-between; margin-top:15px;">

      <div id="WeaknessesSection" style="width:48%; text-align:center;">
        <div class="section-title">Weaknesses</div>
      </div>

      <div id="ResistancesSection" style="width:48%; text-align:center;">
        <div class="section-title">Ressistances</div>
      </div>

      <div id="ImmunitiesSection" style="width:48%; text-align:center;">
        <div class="section-title">Immunities</div>
      </div>

    </div>

    <div class="divider"></div>

    <div class="panel-section">
      <div class="section-title5">Info</div>

      <div class="info-text">
        ${(back?.info || "No data").replace(/\n/g, "<br>")}
      </div>
    </div>

    <div class="divider"></div>

    <div id="statsContainer" style="margin-top:20px;"></div>
  `;


  // ==========================================
  // WEAKNESSES / RESISTANCES / IMMUNITIES
  // ==========================================

  let weakSection =
    panel.querySelector("#WeaknessesSection");

  let resistSection =
    panel.querySelector("#ResistancesSection");

  let immuneSection =
    panel.querySelector("#ImmunitiesSection");


  function renderElements(section, list) {

    let filtered =
      list.filter(
        e => e && e.trim().toUpperCase() !== "NONE"
      );

    if (filtered.length === 0) return;


    // Até 2 elementos → 1 linha
    if (filtered.length <= 2) {

      let row =
        document.createElement("div");

      row.style.display = "flex";
      row.style.justifyContent = "center";
      row.style.gap = "10px";


      filtered.forEach(el => {

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


      section.appendChild(row);

    }


    // 3 ou mais → quebra em linhas de 2
    if (filtered.length > 2) {

      for (
        let i = 0;
        i < filtered.length;
        i += 2
      ) {

        let row =
          document.createElement("div");

        row.style.display = "flex";
        row.style.justifyContent = "center";
        row.style.gap = "10px";
        row.style.marginTop = "5px";


        for (
          let j = i;
          j < i + 2 && j < filtered.length;
          j++
        ) {

          let icon =
            document.createElement("img");

          icon.src =
            "elements/" +
            filtered[j] +
            ".png";

          icon.style.height =
            "30px";

          row.appendChild(icon);

        }


        section.appendChild(row);

      }

    }

  }


  renderElements(
    weakSection,
    back.weaknesses || []
  );

  renderElements(
    resistSection,
    back.resistances || []
  );

  renderElements(
    immuneSection,
    back.immunities || []
  );


  // ==========================================
  // PIN BUTTON
  // ==========================================

  let pinButton =
    panel.querySelector(".pinButton");


  pinButton.onclick = function(e) {

    e.stopPropagation();


    // PAINEL ESQUERDO
    if (side === "sidePanel") {

      leftPinned = !leftPinned;


      if (leftPinned) {

        pinButton.style.filter =
          "none";

        pinButton.style.opacity =
          "1";

      } else {

        pinButton.style.filter =
          "grayscale(100%)";

        pinButton.style.opacity =
          "0.6";

      }

    }


    // PAINEL DIREITO
    else {

      rightPinned = !rightPinned;


      if (rightPinned) {

        pinButton.style.filter =
          "none";

        pinButton.style.opacity =
          "1";

      } else {

        pinButton.style.filter =
          "grayscale(100%)";

        pinButton.style.opacity =
          "0.6";

      }

    }

  };


  // ==========================================
  // BIOLOGICAL STRUCTURE
  // ==========================================

  let bioSection =
    panel.querySelector("#bioSection");


  let elementsList = [

    alien.body1,
    alien.body2,
    alien.body3,
    alien.body4

  ].filter(
    e => e && e.trim().toUpperCase() !== "NONE"
  );


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

    bioSection.appendChild(row);

  }


  // ==========================================
  // 2 ELEMENTS
  // ==========================================

  if (elementsList.length === 2) {

    let row =
      document.createElement("div");

    row.style.display =
      "flex";

    row.style.justifyContent =
      "center";

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


    bioSection.appendChild(row);

  }


  // ==========================================
  // 3 ELEMENTS
  // ==========================================

  if (elementsList.length === 3) {

    let topRow =
      document.createElement("div");

    topRow.style.display =
      "flex";

    topRow.style.justifyContent =
      "center";

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


    let bottomRow =
      document.createElement("div");

    bottomRow.style.marginTop =
      "5px";

    bottomRow.style.textAlign =
      "center";


    let icon =
      document.createElement("img");

    icon.src =
      "elements/" +
      elementsList[2] +
      ".png";

    icon.style.height =
      "30px";


    bottomRow.appendChild(icon);


    bioSection.appendChild(topRow);
    bioSection.appendChild(bottomRow);

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

      row.style.justifyContent =
        "center";

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


      bioSection.appendChild(row);

    }

  }


  // ==========================================
  // ELEMENTAL AFFINITY
  // ==========================================

  let affinitySection =
    panel.querySelector("#affinitySection");


  let affinityList = [

    alien.ele1,
    alien.ele2,
    alien.ele3,
    alien.ele4

  ].filter(
    e => e && e.trim().toUpperCase() !== "NONE"
  );


  // ==========================================
  // 1-2 ELEMENTS
  // ==========================================

  if (affinityList.length <= 2) {

    let row =
      document.createElement("div");

    row.style.display =
      "flex";

    row.style.justifyContent =
      "center";

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


    affinitySection.appendChild(row);

  }


  // ==========================================
  // 3-4 ELEMENTS
  // ==========================================

  if (affinityList.length > 2) {

    for (
      let i = 0;
      i < affinityList.length;
      i += 2
    ) {

      let row =
        document.createElement("div");

      row.style.display =
        "flex";

      row.style.justifyContent =
        "center";

      row.style.gap =
        "10px";

      row.style.marginTop =
        "5px";


      for (
        let j = i;
        j < i + 2 &&
        j < affinityList.length;
        j++
      ) {

        let icon =
          document.createElement("img");

        icon.src =
          "elements/" +
          affinityList[j] +
          ".png";

        icon.style.height =
          "30px";

        row.appendChild(icon);

      }


      affinitySection.appendChild(row);

    }

  }


  // ==========================================
  // STATS
  // ==========================================

  let statsNames = [

    "HP:",
    "ATK:",
    "SPA:",
    "SPE:"

  ];


  let statsContainer =
    panel.querySelector("#statsContainer");


  // Título
  let statsTitle =
    document.createElement("div");

  statsTitle.innerText =
    "Stats";

  statsTitle.style.textAlign =
    "center";

  statsTitle.style.fontWeight =
    "bold";

  statsTitle.style.fontSize =
    "18px";

  statsTitle.style.marginBottom =
    "10px";


  statsContainer.appendChild(
    statsTitle
  );


  // Barras
  for (let i = 0; i < 4; i++) {

    statsContainer.appendChild(

      createStatBar(
        statsNames[i],
        alien.stats[i]
      )

    );

  }


  // Total
  let total =
    alien.stats.reduce(
      (sum, value) => sum + value,
      0
    );


  let totalText =
    document.createElement("div");

  totalText.innerText =
    "Total: " +
    total;

  totalText.style.textAlign =
    "center";

  totalText.style.marginTop =
    "15px";

  totalText.style.fontWeight =
    "bold";

  totalText.style.fontSize =
    "16px";


  statsContainer.appendChild(
    totalText
  );

}


// ==========================================
// CLOSE SIDE PANELS
// ==========================================

document.addEventListener("click", function(e) {

  let left =
    document.getElementById("sidePanel");

  let right =
    document.getElementById("rightPanel");


  let clickedInsideCard =
    e.target.closest(".result");


  // Painel esquerdo
  if (
    !left.contains(e.target) &&
    !clickedInsideCard &&
    !leftPinned
  ) {

    left.classList.remove(
      "open"
    );

  }


  // Painel direito
  if (
    !right.contains(e.target) &&
    !clickedInsideCard &&
    !rightPinned
  ) {

    right.classList.remove(
      "open"
    );

  }

});