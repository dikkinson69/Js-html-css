// ERROR HANDLING
"use strict";//ovo je mode za program koji ne oprasta greske
// variable = "Diki";
//console.log(variable); ovo bi oprostio program da 
// nismo u strict modu iako nisam nazvao const ili let
// variable varijablu.
// 1)REFERENCE ERROR - VARIJABLA NIJE DEFINISANA\\

//Object..create();//
//2)SYNTAX ERROR zbog tacke

// const name = "Diki";
// name = "Diki";
// 3) TYPE ERROR ne mozemo ovo sa const varijablom


// Napravimo funkciju koja hvata greske
// * CATCH i TRY boxovi u funkciji
// program ce prvo da odradi ono u TRY
// i u CATCH ce da uhvati nepravilnost ili izuzetak
const makeError = () => {
	try {
		throw new customError("This is a custom error");
		// const name = "Diki";
		// name = "Drki";
	}catch(err){
		 console.log(err.stack);//normalno
		 // stack sluzi da izbaci u detalju gresku
		// console.error(err); ovo ga izbacuje kao gresku, crveno
		// console.warn(err); WARN ga izbacuje zuto, kao
		//warning
		//console.table(err); izbaci tabelu 
		console.error(err.name);
		console.error(err.message);
	}
};
makeError();
// err se pise onako, ali mora da je ima 
// izbacio je u consoli gresku na kojem je polju
// ali kao da nije greska!

function customError(message) {
	this.message = message;
	this.name = "customError";
	this.stack = `${this.name}: ${this.message}`;
};




