// EVENT LISTENERS

// krenucemo sa view2
view1.style.display = "none";
view2.style.display = "flex";

const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
// uhvaticemo querySelectrom view id, divove i h2 

// sintaksa: addEventListener(neki event, function, useCapture)
// SINTAKSA ZA EVENT LISTENERE
// sada cemo definisati funkciju

const doSomething = () => {
	alert("doing Something");
}

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);
// interakcija sa stranicom uz pomoc funkcije koja izbacuje
// alert
// kada KLIKNlEMO na h2, u sredinu. On izbacje alert
// ispod je kod za delete tog listenera, da bi nastavili dalje



h2.addEventListener("click", (event) => {
	console.log(event.target);
	event.target.textContent = "clicked";
})
// h2.addEventListener("click", function(event) {
// 	console.log(event.target);
// 	event.target.textContent = "clicked";
// });
// RADI I BEZ ANONIMNE FUNKCIJE, samo function(event)



// ubacivanje ANONIMNE funkcije u event listener. 
// sada kada kliknemo, zbog ovog target. u console logu ce pisati
// h2 koji smo kliknuli. pisace my 2nd view
// TARGET JE ONO STO SMO KLIKNULI
// event.target.textContent--- ovo ce promeniti text h2
// i izbacice clicked
