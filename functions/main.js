//  Funkcije

// FUNKCIJE SU REUSABLE CODE !!!!

//  methods/tacke (.) su built in funkcije
// funkcija je npr to  Lower case ili Math Random takodje
let name = "Diki".toLowerCase();
console.log(name);
Math.random();


function sum(num1, num2) {
	if (num2 === undefined) {
	return num1 + num1;
	}
	return num1 + num2;
}

console.log(sum(5, 10));

// funkcija za sumu. Stavio sam da ako ne postoji num2, on
// ce sabrati samo num1 i num1. a ako postoji da sabere num1 i num2
// ovde je return ono sto ce ispisati u console.lgu


function getUserNameFromEmail(email) {
	return email.slice(0, email.indexOf("@"));
}
console.log(getUserNameFromEmail("playerOne@gmail.com"))


const getUserName = function (mail) {
	return mail.slice(0, mail.indexOf("@"));
};

console.log(getUserName("srdim94@gmail.com"));

// ovo iznad je ANONIMNA FUNKCIJA, znaci da nema ime,
// vec neka varijabla dobija vrednost funkcije. 
// anonimna je kao kad bi napisao function (email) samo,
// bez imena


// hocemo da returnujemo prvi deo emaila, pre @ znaka. bez @
// i bez domena
//idemo slice od 0 to jest od slova e, pa do znaka @


const getUser = (mime) => {
	return mime.slice(0, mime.indexOf("@"));
};

console.log(getUser("cumplo94@gmail.com"));

const toProperCase = (name) => {
	return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};
console.log(toProperCase("dIkI"));


// arrow funkcije => nema ni function metode. vec samo ide
// ime varijable = ()sta treba u funckiji i onda =>