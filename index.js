function findMatching(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, nameFragment) {
  let fragmentLength = nameFragment.length
  return drivers.filter(function(driverName) {
    return driverName.slice(0, fragmentLength) === nameFragment
  });
}

function matchName(drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.name.toLowerCase() === name.toLowerCase()
  })
}
