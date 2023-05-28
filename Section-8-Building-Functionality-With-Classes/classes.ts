class Vehicle {
  protected drive(): void {
    console.log('chugga chugga');
  }

  protected honk(): void {
    console.log('beep');
  }
}

class Car extends Vehicle {
  protected drive(): void {
    console.log('vroom');
  }

  public startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDriving();
