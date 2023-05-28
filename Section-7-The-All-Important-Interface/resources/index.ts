interface IReportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary() {
    return `This car's name is: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary() {
    {
      return `My drink has ${this.sugar} grams of sugar`;
    }
  },
};

const printSummary = (item: IReportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
