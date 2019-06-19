function findMatching(drivers, name) {
  const result = drivers.filter(function(driver) {
    return driver.toLowerCase() === name.toLowerCase()
  })
  return result
}

function fuzzyMatch(drivers, startWith) {
  const regex = new RegExp(`^${startWith}`,'i')
  const result = drivers.filter(str => (regex).test(str))

  return result
}

function matchName (drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name === name;
  });
}

