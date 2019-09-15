let iterativeLog = function(array) {
  array.forEach((element, index) => {
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  const animals = ["horses","cows", "goats"];
  animals.forEach(callback);
  return animals;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
