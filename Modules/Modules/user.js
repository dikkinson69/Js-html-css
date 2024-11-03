// ovde cemo sa klasama da se igramo
// _ donju liniju koristimo zbog toga sto nam je bitno da se ne 
// accesuje ovim propertijima bez getera i setera. Da budu private property
export default class User {
    constructor(email, name) {
        this._id = email;
        this._name = name;
    }

    greeting(){
        return `Hi, my name is ${this._name}`;
    }
};