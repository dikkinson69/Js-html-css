// MODULES
// u sustini moduli su koriscenje i exportovanje/importovanje vise
// js filova 
// jako bitno da bi radilo je da imamo live server
// U HTMLU moramo da imamo u <scriptu> type = "module" ako cemo da radimo sa njima
//   <script type = "module" (defer) src="main.js"></script>
//  defer nam nije potreban, dakle 
//   <script type = "module"  src="main.js"></script>
// kada se koriste module, odmah je "strict mode " ukljucen, bez kucanja
// napravicemo novi js file, guitars.js

// importujemo default funkciju- playGuitar
import playGuitar from "./guitars.js";
console.log(playGuitar());

// sada cemo ostale da importujemo
import { shredding, plucking } from "./guitars.js";
console.log(shredding());
console.log(plucking());

// vrlo vazno je to sto mozemo da im menjamo imena. Jer ce neki drugi 
// developeri mozda nazvati po istom imenu funkcije 
// koristimo ovde dole u importu as! i ide promena imena 

import { shredding as shred, plucking as pluck } from "./guitars.js";

console.log(shred());
console.log(pluck());

// takodje mozemo da importujemo sve odjednom sa znakom *

import * as Guitars from "./guitars.js";
//  i onda mozemo da pozivamo u konzili funkcije iz tog js filea 
//console.log(Guitars.playGuitar());
//ovo nece raditi, jer je u ovom slucaju ime funkcije default!
console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());
// sa ovakvim * importom je problem to sto ne mozemo da menjamo imena

// kreiramo sad jos jedan js file- user.js. Gde cemo klasu da pravimo
// sada cemo da je importujemo 

import User from "./user.js";
//kao varijablu pravimo novu instancu klase, objekat da ovo poprimi sve
// inace klasaima paramaetre email i name
const personUser = new User ("email@gmail.com",  "Diki");
console.log(personUser);

console.log(personUser.greeting());
// da ulogujemo i funkciju i


























