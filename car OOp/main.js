class Vehicle{
    constructor (make, model, year){
        const {make, model, year} = this;
    }

    honk(){
        return console.log("Beep");
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${year}.`;
    }
}

class Car extends Vehicle {
    constructor(make, model, year){
        super(make, model, year);
        this.numberOfWheels = 4;
    }
}

class Motorcycle extends Vehicle{
    constructor(make, model, year){
        super(make, model, year);
        this.numberOfWheels = 2;
    }
    revEngine(){
        return "VROOM!!!";
    }
}

class Garage {
    constructor(numVehicles){
        this.vehicles = [];
        this.capacity = numVehicles;
    }
    add(vehicle){
        if(vehicle instanceof Vehicle){
            if(this.capacity === this.vehicles.length){
                return "Sorry, we're full.";
            }
        }
        else{
            return "Only vehicles are allowed in here!";
        }
        this.vehicles.push(vehicle);
        return "Vehicle added!";
    }
}

let bike = new Motorcycle(honda, nighthawk, 2000);
bike.revEngine();