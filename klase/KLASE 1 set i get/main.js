// CLASSES
// klase su template za kreiranje objekata. SLuze za 
// stavljanje raznih, varijabli, funkcija i objekata
// POD JEDNO. Encapsulation, kao stavljanje u kapsulu
// i razbijanje te kapsule i svega sto ima unutra

// constructor je metoda sa kojom se inicijalizuje 
// OBJEKAT u nekoj klasi, moramo stavljati this
class Pizza {
	constructor() {
		this.size = "medium";
		this.crust = "original";
	}
	bake() {
		console.log(`baking a ${this.size} ${this.crust} crust pizza`);
	}
// ovde iznad nismo uopste morali function key word,
// samo bake()
}	

// NEW je keyword, za kreiranje objekta pizza
const myPizza = new Pizza();
myPizza.bake();


class Lepinja {
	constructor(tip, velicina) {
		this.tip = tip;
		this.velicina = velicina;
		this.kora = "hrskavu";
		this.prilog = [];
	}

	// ----------------  SET i GET metode, za key value i THIS za property
	get LepinjaKora() {	
		return this.kora;
	}
		// jos jedan od nacina dase ugrabi key value.
		// bolje nego sa tackom
	set LepinjaKora(LepinjaKora){
		this.kora = LepinjaKora;
	}

	getPrilog() {
		return this.prilog;
	}

	setPrilog(prilog) {
		this.prilog.push(prilog);//push za dodavanje
		// novih stvari u niz. PRilog je niz
	}
	// --------------------------
	peci() {
		console.log(`pecemo ${this.velicina} ${this.kora} ${this.tip} komplet lepinju`);
	}
}

// parametar kajmak, koji ce javascript klasa da prihvati,
// kao parametar tip u constructoru
const mojaLepinja = new Lepinja("kajmak", "srednju");
mojaLepinja.peci();
// ubacicemo i parametar  srednju, kao za velicinu

console.log(mojaLepinja.tip);
// da ulogujemo poseban properti u konzolu, . sa tackom

// mozemoda menjame tip propery i ovako direktno
mojaLepinja.tip = "masna";
console.log(mojaLepinja.tip);
mojaLepinja.peci();
// mada ovo nije bas pozeljno, da pristupamo properties
// na taj nacin, direktnno
mojaLepinja.LepinjaKora = "mekana";
//  pogledaj iznad set i get metodu kako smo ga ugrabili, da promenimo

mojaLepinja.peci();
mojaLepinja.setPrilog("slaninica");
mojaLepinja.setPrilog("jaje");
console.log(mojaLepinja.getPrilog());
// dodajemo 2 nova priloga u lepinju


//SET I GET METODE. STA SU KEY VALUES, STA SU PROOPERTIES. NAUCI DA MENJAS NAZIVE I DODAJES NOVE PROPERTIE