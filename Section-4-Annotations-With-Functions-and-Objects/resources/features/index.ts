// Destructuring functions parameters

const todyForecast = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = function ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void {
  console.log(date);
  console.log(weather);
};

logWeather(todyForecast);

// Destructuring objects

const profile = {
  name: 'Alex',
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile;
const { coords }: { coords: { lat: number; lng: number } } = profile;

console.log(age);
console.log(coords.lat);
console.log(coords.lng);
