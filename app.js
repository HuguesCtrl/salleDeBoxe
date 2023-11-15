//Récupère tous les boutons
const allBtn = document.querySelectorAll(".btn-modale");
//Selectionne la modale
const modale = document.querySelector(".bloc-modale");
//Selectionne le bouton de fermeture de la modale
const closeModale = document.querySelector(".close-modale");
//Récupère toutes les "images boutons"
const imgIndex = document.querySelector(".bloc-modale img");

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
