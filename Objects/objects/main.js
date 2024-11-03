//  OBJECTS
//  sadrze key value stvari u {}
// name je KEY, "DIKI" je samo predmet u okviru key-a
const myObj = {name :"Diki"};
console.log(myObj);

// ako zelimo da samo izbaci ime Diki, bez oznake da je obj

console.log(myObj.name);

// objects mogu da sadrze i strirngove i brojeve
// i funkcije... pa cak dase nestuju i objekti u objektima


const anotherObj = {
	alive: true, // obde boolean da ubacimo
	answer: 42,
	hobbies: ["gitara","javascript","battlefield"],//niz
	beverage: {
		jutro: "kafa",
		podne: "caj",
		vece: "cokoladno"
	},//nestujemo drugi objekt u objekt

	action: function() {
		return "Hello World";
	},
	akcija: function() {
		return `Time for ${this.beverage.jutro}`;
	}
	// pozivamo u ovu funkciju objekat iz beverage
	// key word je THIS za to!!!
};

// jako vazno da se zarezi (,) stavljaju posle svakog
// propertiesa u objektu

console.log(anotherObj.answer);
console.log(anotherObj.hobbies[1]);//u nizu javacript
console.log(anotherObj.beverage.podne);//u objektu caj
console.log(anotherObj.action());// funkciju hello world
console.log(anotherObj.akcija());

//  kreiramo novi objekat vehicle

const vehicle = {
wheels: 4,
engine: function () {
	return "brrrm";
}

};
// Object.create() pravi novi objekt koji koristi pret
// hodni kao prototip za sebe. A mogu nove properties
//  da se dodaju.
const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck);
console.log(truck.wheels); // izbacice 4, posto je toliko
// u vehicle objektu
console.log(truck.engine());
// INHERITANCE od ranijeg objekta vehicle se stvara
// truck object

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function() {
	return "br brbbbb brm";
};
console.log(car.engine());
// nova funkcija za engine, u caru
console.log(car.wheels);
// wheels 4. nasledjuje od vehicle objekta




const tesla = Object.create(car);//da nassledi od car
console.log(tesla.wheels);//4 kao sto je i car nasledio
//  od vehicla
console.log(tesla.engine());//nasledio brm brm od car
tesla.engine = function () {
	return "bzzz";
};
// menjamo funkciju engina za teslu, da budze bzzz
console.log(tesla.engine());



const band = { 
vocals: "Robert Plant",
guitar: "Jimmy Page",
bass: "John Paul Jones",
drums: "John Bonham"
};
// Object.keys..
console.log(Object.keys(band));
// pozivamo sve key-eve. Dakle vocals, guitar,bass, drums
console.log(Object.values(band));
// Object.values. Vrednost keyeva se pozivaju

// PETLJA koja ulazi u objekati  koristi ga
// tzv FOR IN LOOP 
for (let job in band) {
	console.log(band[job]); 
	console.log(`On ${job}, its ${band[job]}`);
};

// ako hocemo da brisemo property koristimo delete

delete band.drums;
console.log(band);
console.log(band.hasOwnProperty("drums"));
// hasOwnProperty, proverava da li ima propertija 
// u necemu. Izbacice FALSE, jer smo bubnjeve izbrisali



// DESTRUCTURING OBJECTS'
// const 
// {
//  guitar: myVariable,
//  bass: myBass
//  } = band;
// console.log(myVariable); jimmy page
// console.log(myBass); john paul jones
// poenta je da se daju nova imena varijablama
// da se varijabla sama po sebi vazi kao objekt,
// ali da je jednaka glavnoj varijabli, band


const {vocals, guitar, bass, drums} = band;
console.log(guitar);
console.log(vocals);
console.log(bass);
console.log(drums);//umro bonam, pa je undefined
//  oce prepoznati key words, kao i gore, i izbacice
// svakog sviraca, tj svaki property za key word guitar
// ,vocals, bass, drums
// REFFERING TO THE SPECIFIC KEY WORD, TO GET THE 
// PROPERTY
function sings({vocals}) {
	return `${vocals} sings!`
};

console.log(sings(band));

// uz pmoc funkcije, destrcuring the object, to get the value
// funkcija vadi vokale iz objekta, i jasno je funkciji
// odakle da izvadi properti



