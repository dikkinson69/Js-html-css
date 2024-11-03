// KLASE 2

class Pizza {
	constructor(pizzaSize) {
		this.size = pizzaSize;
		this.crust = "original";
	}
	getCrust() {
		return this.crust;
	}
	setCrust(pizzaCrust) {
		this.crust = pizzaCrust;
	}
}

// OVO SVE JE PARENT KLASA

// SADA CEMO CHILD KLASU. EXTENDS JE GLAVNA REC ZA TO
// SUPER se kuca, kao posebna klasa u constructoru
// SUPER keywr=ord u child klasi se mora zvati u constructoru
// bilo kad pre nego sto iskoristimo this. On ga povezuje
// sa PARENT klasom, da CHILD nasledi od PARENTA
// SUPER koristimo, da pristupimo constructoru od parent
// klase!!!
class specialtyPizza extends Pizza {
	constructor(pizzaSize){
		super(pizzaSize);
		this.type = "The Works";
	}
	slice() {
		console.log(`our ${this.type} ${this.size} pizza has 8 slices`)
	}
}

const mySpecialty = new specialtyPizza("medium");
mySpecialty.slice();

// FACTORY FUNCTION. kreiranje klase preko funkcije, 
// radi u sustini istu stvar kao funkcija, ali
// factory funkcije se rade umesto klasa ili objekata,
// kada u njima ne mogu da se stave neki propertiji, koji
// su PRIVATNI! da se ne mesaju u ostala sranja u kodu
function burgerFactory(burgerSize) {
	const meat = "beef";
	const size = burgerSize;
	return {
		fry: () => console.log(`frying a ${meat} ${burgerSize} burger`)
	};
}

const myBurger = burgerFactory("xxl");
myBurger.fry(); 