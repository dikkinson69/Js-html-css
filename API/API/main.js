// WEB STORAGE API-Application programming interface
// API je kolekcija softverskih funkcija i procedura koje
// omogucavaju da programi izmedju sebe imaju interakciju
// bez intervencije usera
// api je softverski kojem se moze pristupiti i koji se 
// moze izvrsavati

// API-u se pristupa preko najglobalnije varijable
// WINDOW. window je ceo prozor u browseru koji je automatski
// sav skelet za js. I automatski sve funkcije i 
// varijable su deo windowa

// window.alert(location);
// alert(location);
// desice se ista stvar, jer je alert samo po sebi
// deo windowa


// sada cemo da pristupamo API-u
// prvo nam treba neki data da ga sacuvamo(store) negde

const myObject = {
	name: "Diki",
	logname: function() {
		console.log(this.name);
	}
}

const myArray = ["eat","guitar","weed"];

myObject.logname();

sessionStorage.setItem("mySessionStoreObj", myObject);

// stavili smo myObject u session storage.
// u browseru idi na application i videces da ima u session
// storageu storage nazvan kao key-mySessionStore i value
// mu je myObject
// storeujemo presistant data na stranici
// JSON storeuje samo string data, ovo malo vise

// sada cemo da ga retrieveujemo

const mySessionDataObj = sessionStorage.getItem("mySessionStoreObj");
console.log(mySessionDataObj);//ovako se pozivaa
// u konzoli dobijamo samo [object object].To nije ono sto
// hocemo

// sada cemo i sa nizom
sessionStorage.setItem("mySessionStoreArr", myArray);
const mySessionDataArr = sessionStorage.getItem("mySessionStoreArr")
console.log(mySessionDataArr);
// izbacuje stavke koje smo imali u nizu
// ali kao string data!!!
// gubi se niz. ostaje samo string. sessionStorage ce 
// konvertovati sve u string

//JSON i sessionStorage su idealni za store koda.
// JSON samo ne sacuva nikada nikakvu funkciju,metoduu


// pravimo oper objekat u koji ubacujemo i niz i imple
// mentiramo JSON

const myObj = {
	name: "Drki",
	hobbies: ["eat","sleep","guitar"],
	loggingName: function() {
		console.log(this.name);
	}
};

sessionStorage.setItem("mySesStore", JSON.stringify(myObj));
const mySesData = sessionStorage.getItem("mySesStore");
console.log(mySesData);
// {"name":"Drki","hobbies":["eat","sleep","guitar"]}
// dobili smo ovo. ALI OVO JE SVE SAMO STRING, sve

// ako hocemo da retrievujemu objekat, moramo ovako
sessionStorage.setItem("mySessyStore", JSON.stringify(myObj));
const mySessyData = JSON.parse(sessionStorage.getItem("mySessyStore"));
console.log(mySessyData);

// sada cemo uz pomoc JSONA da retrivuejemo niz myArray, koji smo stavili gore
localStorage.setItem("mySessionArray", JSON.stringify(myArray));
const mySessionArrayData = JSON.parse(localStorage.getItem("mySessionArray"));
console.log(mySessionArrayData);
// vratio je ceo niz u fulu
// niz smo stavili u local storage
// u LOCAL STORAGE data je persitant, ne brise se
// u SESSION STORAGE data se brise, svaki put kada 
// izadjemo iz stranice

// persistant data sa session storage je koristan za 
// to do vrste taskova na stranici ili za belezenje
// high score u igricama

// brisanje storagea
// localStorage.removeItem("mySessionArray");
// const mySessionArrayData = JSON.parse(sessionStorage.getItem("mySessionArray"));
//console.log(mySessionArrayData);
// izbacice null
// mozemo i prosto ovako
// localStorage.clear(); sve ode

const key = localStorage.key(0);
console.log(key);
// izbacuje mySessionArray, jer je prvi key u local storu
// da li ima vise keyeva, mozemo da proverimo ovako
const storeLength = localStorage.length;
console.log(storeLength);