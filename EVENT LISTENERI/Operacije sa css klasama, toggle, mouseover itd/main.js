// EVENT LISTENERS

// krenucemo sa view2
view1.style.display = "none";
view2.style.display = "flex";

// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// READY STATE CHANGE EVENT


// Syntax: addEventListener(event, function, useCapture);\


// MENJANJE SA CSS KLASAMA, U JAVASCRIPTU
document.addEventListener("readystatechange", (event) => {
	if(event.target.readyState === "complete") {
		console.log("readyState: complete");
		initApp();
	}
});

const initApp = () => {
  const view = document.querySelector("#view2");
  const div = view.querySelector("div");
  const h2 = div.querySelector("h2");

  view.addEventListener("click", (event) => {
    view.classList.toggle("purple");
    view.classList.toggle("darkblue");
  }, false);

  div.addEventListener("click", (event) => {
    div.classList.toggle("blue");
    div.classList.toggle("black");
  }, false);

  h2.addEventListener("click", (event) => {
    const myText = event.target.textContent;
    myText === "My 2nd View"
      ? (event.target.textContent = "Clicked")
      : (event.target.textContent = "My 2nd View");
  }, false
  );

  const nav = document.querySelector("nav");
  nav.addEventListener("mouseover", (event) => {
        event.target.classList.add("height100");
  });
  nav.addEventListener("mouseout", (event) =>{
  	event.target.classList.remove("height100");
  });

};

// U CSSu smo napravili klasu .purple. i nju pozivamo za 
// menjanje pozadine na stranici. 
// TOGGLE view.classList.toggle("purple")
// TOGGLE zna da treba da se ubaci klasa u javascript
// moze ADD za klase, kao i REMOVE.
// ali TOGGLE je najbolji, jer dozvokjava da menjamo i
// vracamo

// za clicked smo napravili da klikcemo i da se menja 
// u clicked i my 2nd view
// za to smo ukljucicli TERIARY OPERATORSE1111

// takodje za NAV element u htmlu smo stavili eventListener
// mouseover event listener so iskoristili i pozvali
// css klasu .height100, da kada predjemo muisem, navbar
// se poveca za 100px
// mouseout smo takodje morali da stavimo ispod, da kada 
// sklonimo mis, navbar se opet vrati, zato smo
// obrisali klasu .height100, tako sto smo isli
// event.target.classList.remove("height100s")