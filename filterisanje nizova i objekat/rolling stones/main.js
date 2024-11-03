const theStones = {
		guitar: "keith richards",
		vocals: "mick jagger",
		bass: "bill wyman",
		drums: "charlie watts",
		leadGuitar: "ronnie wood",

		favouriteDrugs: ["weed", "cocaine", "heroin"],

		acitivity: function() {
		const members = Object.values(this)
      	.filter(value => typeof value === 'string' && value !== this.favouriteDrugs);
    
    	return `the rolling stones with members ${members.join(', ')} like to use ${this.favouriteDrugs[0]}, but the ${this.favouriteDrugs[2]} is favourite of ${this.guitar}`;		}
};

console.log(theStones.acitivity());



// The filter() method of Array instances creates a shallow copy of a portion of a given array, 
// filtered down to just the elements from the given array that pass the test implemented by the provided function.

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]


console.log(Object.keys(theStones));
console.log(Object.values(theStones));

const theRollingStones = Object.create(theStones);
theStones.leadGuitar = "mick taylor";

console.log(theRollingStones);

for (let job in theRollingStones) {
  if (
    theRollingStones.hasOwnProperty(job) &&
    typeof theRollingStones[job] !== 'function' &&
    !Array.isArray(theRollingStones[job]) &&
    typeof theRollingStones[job] !== 'object'
  ) {
    console.log(`On ${job}, it's ${theRollingStones[job]}`);
  }
}