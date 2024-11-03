// EVENT LISTENERS

// krenucemo sa view2
view1.style.display = "none";
view2.style.display = "flex";

// const view = document.querySelector("#view2");
// const div = view.querySelector("div");
// const h2 = div.querySelector("h2");

// READY STATE CHANGE EVENT


// Syntax: addEventListener(event, function, useCapture);\

document.addEventListener("readystatechange", (event) => {
	if(event.target.readyState === "complete") {
		console.log("readyState: complete");
		initApp();
	}
});
// ako je dokument skroz ocitan, on ce u konzoli izbaciti 
// readyState: complete
// ready state u sustini znaci da li je dokument skroz
// ocitan, da li je ceo dom ocitan u njemu
// kada se ocita cela stranica i bude ready, primenjujemo
// initApp()funkciju, koju cemo ispod definisati
 
// u ovoj anonimnoj funkciji initApp() smo napravii da se
// na klik menja pozadina i h2 text.
// BUBBLING EVENTS!!! zato sto je h2 u divu, ako kliknemo samo
// njega, svejedno ce promeniti i pozadinu, odradice sbe 
// evente zajedno odjednom
// zato ubacuemo stopPropagation();
// TRUE I FALSE su jedan od delova sintakse, koji se zove
// USE CAPTURE, probaj  i sa jednim i sa drugim
//  i probaj stopPropagation() da pomeras sa elemenata
// stavi ga u h2, da vidis kako event listener ide
// na OUTWARD a ne samo na INWARD, po elementima. Kontas?!

// sto se tice Use captura, ako ga ne stavimo, 
// default je FALSE!
// A ako ga stavimo na TRUE!. ondq event listener radi od 
// spoljnog elementa, ka unutrasnjem!!! out to inner
// working his way in if its true, and working its way out if it is false


const initApp = () => {
const view = document.querySelector("#view2");
const div = view.querySelector("div");
const h2 = div.querySelector("h2");
// iskopirali smo one query selectore sa pocetka ovde


view.addEventListener("click", (event) => {
	//event.stopPropagation();
	event.target.style.backgroundColor = "purple";
},
//true
false
);

div.addEventListener("click", (event) => {
	// event.stopPropagation();
	event.target.style.backgroundColor = "blue";
},
//true,
false
);

h2.addEventListener("click", (event) => {
	//event.stopPropagation();
	event.target.textContent = "Clicked";
},
//true
false
);
};
//  E SAD! mozemo da izbrisemo stopPropagation()
// i umesto  	view.style.backgroundColor = "purple";
// stavimo event.target.style.backgroundColor!!
// nece biti potrebe za stopPropagation(), sve radi po redu


// EVENT TARGET ce uvek da se odnosi na ono sta je 
// zapravo kliknuto