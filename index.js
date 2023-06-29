// Code your solution here
// Function to find matching drivers' names
function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

// Function to fuzzy match drivers' names
function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

// Function to match drivers' names against provided string
function matchName(drivers, query) {
  return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}
