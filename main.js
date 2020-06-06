/* const age = 39;
const name = "Piotr";
console.log(`siema ${name} masz${age}lat i dalej na podstawach`);

const siemano = {
  age: 13,
  name: "Karol",
  witaj: function () {
    alert(`Siemano jestem ${this.name} i mam ${this.age} lat`);
    this.name = prompt("Podaj swoje imię?");
    this.age = prompt("Ile masz lat?");
    alert(`Witaj ${this.age} letni ${this.name}`);
  },
};

const featureTheme = document.querySelector(".feature__theme");
if (featureTheme != null) {
  featureTheme.innerHTML = "console.log";

  const featureDescribe = document.querySelector(".feature__describe");
  featureDescribe.innerHTML = `Wypisuje komunikaty do konsoli przegladarki,bardzo użyteczne przy testowaniu kodu.`;
} else {
  console.log("nie ma tych elementów w dokumencie");
}

siemano.witaj(); */
/* Kod do hamburgera */

const hamburger = document.querySelector(".hamburger--js");
hamburger.addEventListener("click", () => {
  const nav = document.querySelector(".navigation--js");
  nav.classList.toggle("links__navigation-close");
});

const pizza = document.querySelector(".pizza--js");
pizza.addEventListener("click", () => {
  const piz = document.querySelector(".index__navigation--js");
  piz.classList.toggle("index__navigation");
});
