// Code your solution in this file
function findMatching(allDrivers, name) {
  return allDrivers.filter(function (driver) {
    return driver.toUpperCase() === name.toUpperCase();
  });
}

function fuzzyMatch(allDrivers, startingLetters) {
  const lengthOfStartingLetters = startingLetters.length;

  return allDrivers.filter(function (driver) {
    return driver.slice(0, lengthOfStartingLetters) === startingLetters;
  });
}

function matchName(allDrivers, name) {
  return allDrivers.filter(function (driver) {
    return driver.name === name;
  });
}
