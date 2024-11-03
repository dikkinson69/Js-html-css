const myObj = {
    alive: true,
    name: "Diki",
    age: 29,
    hobbies: ["guitar", "weed", "FOOTBALL"],

    favoriteDrinks: {
        morning: "coffee",
        noon: "tea",
        evening: "cocoa"
    },

    action: function() {
        return "Hello everybody";
    },

    activity: function() {
        return `All day I like to play ${this.hobbies[0]} and also smoke ${this.hobbies[1]} and watch ${this.hobbies[2]} and in the evening I like to drink ${this.favoriteDrinks.evening}`;
    }
};

console.log(myObj);
console.log(myObj.activity());

const newObj = Object.create(myObj);
console.log(newObj);

const theExperiance = {
    Guitar: "Jimi Hendrix",
    Bass: "Noel Redding",
    Drums: "Mitch Mitchell"
};

console.log(Object.keys(theExperiance));
console.log(Object.values(theExperiance));
for (let job in theExperiance) {
    console.log(`On ${job} is ${theExperiance[job]}`);
}

class Woodstock {
    constructor(type) {
        this.type = type;
        this.crowd = "hippies";
        this.drugs = ["LSD", "WEED"];
    }

    play() {
        console.log(`We are at Woodstock festival with the ... the festival is ${this.type}, the crowd are mostly ${this.crowd}, and they love to use ${this.drugs}`);
    }
}

class Band extends Woodstock {
    constructor(type, bandMembers) {
        super(type);
        Object.assign(this, bandMembers);
    }

    play() {
        super.play();
        for (let role in this) {
            if (this.hasOwnProperty(role) && role !== 'type' && role !== 'crowd' && role !== 'drugs') {
                console.log(`On ${role} is ${this[role]}`);
            }
        }
    }
}

const gig = new Woodstock("open air");
gig.play();

const bandOfGypsies = new Band("open air", theExperiance);
bandOfGypsies.Drums = "Buddy Miles";

bandOfGypsies.play();
