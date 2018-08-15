// Code your solution in this file
function findMatching(drivers, driverName) {
  let empty_array = []
  for (const driver of drivers) {
    if (driver.toLowerCase() === driverName.toLowerCase()) {
      empty_array.push(driver)
    }
  }
  return empty_array
}

function fuzzyMatch(drivers, letters) {
  let empty_array = []
  for (const driver of drivers) {
    if (driver.slice(0, 2) === letters) {
      empty_array.push(driver)
    }
  }
  return empty_array
}

function matchName(drivers, driverName) {
  let empty_array = []
  for (const driver of drivers) {
    if (driver.name === driverName) {
      empty_array.push(driver)
    }
  }
  return empty_array
}
