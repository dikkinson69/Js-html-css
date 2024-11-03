// REMOVING

view1.style.display = "none";


view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

// while(view2.lastChild) {
// 	view2.lastChild.remove();
// }
// // brisemo tekst u view2 uz pomoc while petlje. Bio je jedan h2 samo

// const createDivs = (parent, iter) => {
// 	const newDiv = document.createElement("div");
// 	newDiv.textContent = iter;
// 	newDiv.style.backgroundColor = "#000";
// 	newDiv.style.width = "100px";
// 	newDiv.style.height = "100px";
// 	newDiv.style.margin = "10px";
// 	newDiv.style.justifyContent = "center";
// 	newDiv.style.alignItems = "center";
// 	parent.append(newDiv);
// 	// append(), metoda koja dodaje dodatni element na kraju
// 	// parent elementa
// };
// // pravimo funkciju, za novi div, gde ce biti novi tekst
// // stavljamo mu sve css propertije
// // iter je iterator, to ce nam predstavljati tekst

// // createDivs(view2, "kurcina");

// for(let i =1; i <= 12; i++) {
// 	createDivs(view2, i);
// }

// // sa ovim oppet pravimo 12 divova, sa sve propertijima, ali u view2
// // napravili smo petlju za to, i ubacili joj funkciju od gore createDivs