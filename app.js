app.js

const frame = document.getElementById("pdfFrame");
const chip = document.getElementById("statusChip");

function setChip(text, ok = true) {
  chip.textContent = text;
  chip.style.color = ok ? "rgba(255,255,255,0.75)" : "rgba(255,180,180,0.9)";
  chip.style.borderColor = ok ? "rgba(255,255,255,0.16)" : "rgba(255,180,180,0.35)";
  chip.style.background = ok ? "rgba(255,255,255,0.05)" : "rgba(255,80,80,0.10)";
}

setChip("Lädt …");

frame.addEventListener("load", () => setChip("Vorschau aktiv"));
frame.addEventListener("error", () => setChip("Vorschau nicht verfügbar", false));
