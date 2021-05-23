const calculateMode = (initialArray) => {
  let dealingWithNumbers = false;
  if (typeof initialArray[0] === "number") {
    dealingWithNumbers = true;
  }

  let arrayToReturn = [];
  let valuesObj = {};

  for (let element of initialArray) {
    if (element in valuesObj) {
      valuesObj[element] += 1;
    } else {
      valuesObj[element] = 1;
    }
  }

  let mostOccurences = 0;
  for (let key in valuesObj) {
    if (valuesObj[key] > mostOccurences) {
      mostOccurences = valuesObj[key];
    }
  }

  for (let key in valuesObj) {
    if (valuesObj[key] === mostOccurences) {
      if (dealingWithNumbers) {
        arrayToReturn.push(Number(key));
      } else {
        arrayToReturn.push(key);
      }
    }
  }

  return arrayToReturn;
}

module.exports = calculateMode;