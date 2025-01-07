// Funktion til at starte animationen af MacMiller-figuren
function startMacMillerFall() {
  // Find containeren og sprite-elementet
  const macmillerContainer = document.querySelector("#macmiller_container");

  // Tilføj animation class til at få figuren til at falde ned
  macmillerContainer.classList.add("falling");

  // Når animationen er færdig, skal vi ændre dens position
  macmillerContainer.addEventListener("animationend", function () {
    macmillerContainer.style.top = "150%"; // Stop figuren i midten af skærmen
  });
}

// Eventlistener for at starte animationen når siden er loadet
window.addEventListener("load", function () {
  startMacMillerFall();
});
