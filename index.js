// Write your solution here!
// index.js
// drivers

const drivers = ["Milo", "Otis", "Garfield"];

// Array functions
// destructivelyAppendDriver(name)
function destructivelyAppendDriver(name) {
  drivers.push(name);
  return drivers;
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function destructivelyRemoveLastDriver() {
  drivers.pop();
  return drivers;
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  return drivers;
}

function appendDriver(name) {
  newDrivers = [...drivers, name];
  return newDrivers;
}

function prependDriver(name) {
  newDrivers = [name, ...drivers];
  return newDrivers;
}

function removeLastDriver() {
  newDrivers = drivers.slice(0,-1)
  return newDrivers;
}
function removeFirstDriver() {
  newDrivers = drivers.slice(1)
  return newDrivers;
}
// removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
