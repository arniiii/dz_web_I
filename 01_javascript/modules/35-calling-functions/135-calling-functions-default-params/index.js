const distance = 450;
const fuelConsumption = 8.4;
const fuelPrice = 64.2;
const passengers = 4;
const fuel = (distance * fuelConsumption) / 100;
const tripCost = fuel * fuelPrice;
console.log(fuel.toFixed(1));
console.log(tripCost.toFixed(2));
console.log((tripCost / passengers).toFixed());
