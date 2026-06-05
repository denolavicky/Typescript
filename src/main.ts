// 1. Define the Vehicle interface
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// 2. Implement the Car class
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

// 3. Create an instance
const myCar = new Car("Toyota", "Camry", 2022);

// 4. Call the start method
myCar.start(); // logs: "Car engine started"