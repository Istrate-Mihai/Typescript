class Vehicle {
  constructor(public color: string) {}

  protected drive(): void {
    console.log('chugga chugga');
  }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  constructor(color: string, public wheels: number) {
    super(color);
  }

  public drive(): void {
    console.log('vroom');
  }

  public startDriving(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

const car = new Car('red', 4);
console.log(car.color);
console.log(car.wheels);
