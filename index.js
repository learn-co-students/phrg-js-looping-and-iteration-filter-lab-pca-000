// Code your solution in this file
function findMatching(drivers, name) {
let empty_array = []
  for (const driver of drivers) {
    if (driver.toUpperCase() === name.toUpperCase()) {
      empty_array.push(driver)
    }
  }
  return empty_array
}

function fuzzyMatch(drivers, first_letters) {
  let empty_array = []
  for (const driver of drivers) {
    if (driver.slice(0,2) === first_letters) {
      empty_array.push(driver)
    }
  }
  return empty_array
}

function matchName(drivers, driver_name) {
  let empty_array = []
  for (const driver of drivers) {
    if (driver.name === driver_name) {
      empty_array.push(driver)
    }
  }
  return empty_array
}
