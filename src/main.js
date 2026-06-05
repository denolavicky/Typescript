"use strict";
// 2. Implement the Car class
class Car {
    make;
    model;
    year;
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// 3. Create an instance
const myCar = new Car("Toyota", "Camry", 2022);
// 4. Call the start method
myCar.start(); // logs: "Car engine started"
