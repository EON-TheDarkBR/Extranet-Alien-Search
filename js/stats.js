//Stat Bars
function createStatBar(label, value) {

  let container = document.createElement("div");
  container.style.marginBottom = "12px";

  // TEXTO
  let text = document.createElement("div");
  text.innerText = `${label} ${value}`;
  text.style.fontSize = "16px";
  text.style.marginBottom = "4px";
  text.style.fontWeight = "bold";

  // FUNDO
  let barBg = document.createElement("div");
  barBg.style.width = "100%";
  barBg.style.height = "12px";
  barBg.style.background = "#ccc";
  barBg.style.borderRadius = "10px";
  barBg.style.overflow = "hidden";
  barBg.style.border = "1px solid black";
  barBg.style.boxShadow = "inset 0 2px 6px rgba(0,0,0,0.7), inset 0 -2px 6px rgba(255,255,255,0.4)";
  

  // PREENCHIMENTO
  let barFill = document.createElement("div");
  barFill.style.height = "100%";
  barFill.style.borderRadius = "10px";
  barFill.style.width = "0%"; // começa vazio
  barFill.style.transition = "0.6s ease";
  

  // 🎨 CORES (SUAS REGRAS NOVAS)
  let color = "#ccc"; // padrão (cinza)

if (value === 0) {
  color = "#888"; // totalmente morto
}
else if (value <= 19) {
  color = "#ff3b3b"; // vermelho
}
else if (value <= 29) {
  color = "#ff6a00"; // laranja escuro
}
else if (value <= 49) {
  color = "#ffb300"; // laranja claro
}
else if (value <= 69) {
  color = "#ffe600"; // amarelo
}
else if (value <= 100) {
  color = "#4cff00"; // verde
}
else if (value <= 110) {
  color = "#00c3ff"; // azul
}
else {
  color = "#a200ff"; // roxo (OP)
}
  barFill.style.background = color;

  // 📏 LÓGICA DA BARRA (seu sistema especial)
  let width = 0;

  if (value > 110) {
    width = 100; // roxo full
  } else {
    width = (Math.min(value, 110) / 110) * 90;
  }

  // animação
  setTimeout(() => {
    barFill.style.width = width + "%";
  }, 50);

  // montar
  barBg.appendChild(barFill);
  container.appendChild(text);
  container.appendChild(barBg);

  return container;
}
