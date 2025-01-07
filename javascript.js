// funktion der får figuren til at starte
function startMacMillerFall() {
  // find containeren og sprite-elementet som er skrevet ind i html
  const macmillerContainer = document.querySelector("#macmiller_container");

  // tilføjer animation class til at få figuren til at falde ned
  macmillerContainer.classList.add("falling");

  // når animationen er færdig, ændres dens position
  macmillerContainer.addEventListener("animationend", function () {
    macmillerContainer.style.top = "150%"; // stopper figuren der hvor den gør (på knappen i dette tilfælde)
  });
}

// eventlisteneren starter animationen når siden er loadet
window.addEventListener("load", function () {
  startMacMillerFall();
});
