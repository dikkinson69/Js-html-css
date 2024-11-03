class Vehicle {
    constructor(make, model, year, color, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
    }

    vehicleInfo() {
        return `${this.year} ${this.make} ${this.model}, ${this.color}, $${this.price}`;
    }
}

class Inventory {
    constructor() {
        this.vehicles = [];
    }

    addVehicle(vehicle) {
        this.vehicles.push(vehicle);
    }

    removeVehicle(make, model) {
        this.vehicles = this.vehicles.filter(vehicle => !(vehicle.make === make && vehicle.model === model));
    }

    listInventory() {
        this.vehicles.forEach(vehicle => {
            console.log(vehicle.vehicleInfo());
        });
    }
}

// Example usage:
const inventory = new Inventory();

const vehicle1 = new Vehicle("Toyota", "Camry", 2020, "Silver", 25000);
const vehicle2 = new Vehicle("Honda", "Civic", 2018, "Blue", 18000);

inventory.addVehicle(vehicle1);
inventory.addVehicle(vehicle2);

console.log("Initial Inventory:");
inventory.listInventory();

inventory.removeVehicle("Toyota", "Camry");

console.log("\nUpdated Inventory after removing Toyota Camry:");
inventory.listInventory();
