// JSON: java script object notation
// sluzi za primanje i slanje podataka, kao text format
// koji je skroz nezavistan izmedju programskih jezika i sluzi
// za komunikaciju izmedju jezika. Jednostavan programerima
// da razumeju i jednostavan masini da PARSUJE to i odradi
// u drugom jeziku sta treba iz toga

const myObj = {
	name: "Diki",
	hobbies: ["guitar", "PES", "WEED"],

	hello: function() {
		console.log("hello");
	}
};

console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);


// Konvertovanje u JSON string sa STRINGIFY
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON); //string
console.log(sendJSON.name); // undefined, ne moze da nadje name
// vise nije objekat, vec string.

// primanje jSONA sa PARSOM
const receiveJson = JSON.parse(sendJSON);
console.log(receiveJson);//ponovo je objekat zbog PARSE
// PARSE I STRINGIFY, metode za JSON
console.log(typeof receiveJson);
// !!! JSON Ne konverture funkcije i metode u objektu, njih
// izgubi