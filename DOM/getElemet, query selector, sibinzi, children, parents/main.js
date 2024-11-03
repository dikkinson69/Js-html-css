// DOM

const view1 = document.getElementById("view1");
// document.getElementByID. View1 je id u htmly
console.log(view1);
// otvorimo u konzoli ovaj view1 i mozemo svakom
// od divova da pridjemo i klinkemo
// TAKO SE SELEKTUJE ELEMENT PO IDu
const view2 = document.querySelector("#view2");
// QUERY SELECTOR. Moramo da stavimo # da bi mogli
// da mu pridjemo, elementu
console.log(view2);


// VIEW 2 nam je inace u cssu podesen da mu je display none, dakle da se ne vidi. Zato 
// MANIPULISEMO CSSom iz javascripta. STYLE.DISPLAY = ""!!!!
view1.style.display = "flex";
view2.style.display= "none";
// SAda imamo samo VIEW2
// ako stavimo oba na flex. imacemo i jedan i drugi,
// jedan ispod drugog
// vraticu view1 na flex, a drugi na none

const views = document.getElementsByClassName("view");
// getElementsByClassName---Elements, mnozina. 
// po klasi da mozemo da ih izaberemo i pronadjemo

console.log(views);


const sameViews = document.querySelectorAll(`.view`);
// querySelectorAll. ALL je bitno. Ovde uima vise elementa
// zato sto uzima iz KLASE view. apsolutno je bitno
// da u zagradi stavimo i tacku. dakle(`.klasa`)
// QUERY SELECTOR se najvise koristi ako hocemo klasi
// da pristupimo, a getElementById ako hocemo specificnom
// elementu
console.log(sameViews);
// sa ovim querijem u konzoli ce izbaciti NODE listu. 
// GetElements ce izbaciti HTML listu elemenata
// NODE lista je detaljnija, jer NODovi su objekti u tom 
// HTMLu, ukljujuci individualne textove, delove tekstova
// i objekte. NODOVI omogucavaju javascriptu da manipulise
// straniom

const divs = view1.querySelectorAll("div");
console.log(divs);
// sada cemo da pristupamo svakom od DIVOVA, posebnih kvadratica
// na stranici. prvo stavimo view1, sto je ID. Onda querySelectorALL("div")

const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);
// getElementsByTagName. Mozemo i ovako da ga selektujemo,
// sve divove, kvadratice. Samo sada izbacuje u konzoli
// HTML kolekciju a ne NODE listu, kao sa querijem

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
// da nam izbaci da biramo sve parne elemente

for (i = 0; i < evenDivs.length; i++) {
	evenDivs[i].style.backgroundColor = "darkblue";
	// evenDivs[i].style.width = "200px";
	// evenDivs[i].style.heighth = "200px";
}

// napravili smo petlju, da bi parni Divovi dobili drugu boju
// pristupili smo cssu iz javascipta
// mozemo pristupati i heihtu i widthu, i bilo cemo iz cssa

const navText = document.querySelector("nav h1");
console.log(navText);
// sada pristupamo navbaru i to konkrentu h1 elementu. MY PAGE

navText.textContent = "Hello World";
// TEXTCONTENT, ovde menjamo tekst h1. u Hello world
// MANIPULISEMO TEKSTOM

const navbar = document.querySelector("nav");
navbar.innerHTML = `<h1>HELLO! </h1> <p>This should align right</p>`;
// INNER HTML, pristupamo htmlu, to navu celom. h1 menjamo u HEllo
// i pravimo paragraf <p> koji ce da se alignuje desno
console.log(navbar);
navbar.style.justifyContent = "space-between";
// pristupamo cssu navbara. "space-evenly" "flex-start" "flex-end"
// moze sta oces, da se igras


console.log(evenDivs[0]);
// mozemo poseban element da izdvojimo ovako, u ovom
// primeru od parnih divova, kvadratica, da izaberemo prvi
// parni element. [0]. kao u nizovima
console.log(evenDivs[0].parentElement);
// ovako mozemo da vidimo PARENT ELEMENT, od diva. A to je cela 
// sekcija
console.log(evenDivs[0].parentElement.children);
// ovde da vidimo i CHILDREN tog parent elementa.
//  a to su svih 12 divova, kvadratica
console.log(evenDivs[0].parentElement.childNodes);
// CHILD NODES, nismo samo pristupili elementima, vec i 
// texty tih elemenata
console.log(evenDivs[0].parentElement.hasChildNodes());
// hasChildNodes() built in metoda/funkcija, koja proverava
// ima li element dece, reci ce true;
console.log(evenDivs[0].parentElement.lastChild);
// reci ce text. jer je node u pitanju. Ipak je za divove
// query selector koristen
console.log(evenDivs[0].parentElement.lastElementChild);
// ovako ce izabrati vec stvarno poslednji element
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
// ista prica samo za first element. First child je text node

console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
// NEXT SIBLING, prvi node ili element sledeci, pored navedenog
// on ce reci 3, dakle iako su parni divovi u pitanju, on ce
// uzeti sledeceg od navedenog
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);
// PREVIOUS SIBLING, kao i za next. samo unazad
console.log(evenDivs[0].nextElementSibling.nextElementSibling);
// chain-ujemo ih, da izvadimo onog od sledeceg od sledeceg
