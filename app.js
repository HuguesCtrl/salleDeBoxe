//Récupère tous les boutons
const allBtn = document.querySelectorAll(".btn-modale");
//Selectionne la modale
const modale = document.querySelector(".bloc-modale");
//Récupère toutes les "images boutons"
const imgIndex = document.querySelector(".bloc-modale img");

//Ouverture modale si l'écran est supérieur à 850px de large
if (window.matchMedia("(min-width: 850px)").matches) {
  allBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      imgIndex.src = `./ressources/img${e.target.getAttribute(
        "data-index"
      )}-equip.jpg`;
      modale.classList.add("active-modale");
    })
  );
  modale.addEventListener("click", () => {
    modale.classList.remove("active-modale");
  });
}

//Animation navbar
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    nav.classList.add("anim-nav");
  } else {
    nav.classList.remove("anim-nav");
  }
});
