// sort MODEARRAY so the members are ordered
// Create an array, NUMOCCURENCES, to count number of occurences of elements
//  NUMOCCURENCES has objects with two elements for each member (ELEM, NUMOCCURS)
//  Count number of occurences of each element in MODEARRAY
//  Return an array composed of ELEMs with NUMOCCURS in MODEARRAY
exports.calculateMode = (modeArray) => {
  let numOccurences = {};
  
  modeArray.sort();
  
  let prev;

  for (let elem of modeArray) {
    if (elem !== prev) {
      numOccurences[elem] = 1;
    } else {
      numOccurences[elem] += 1;
    }
    prev = elem;
  }

  let max = 0;
  
  for (let elem in numOccurences) {
    if (numOccurences[elem] > max) {
      max = numOccurences[elem];
    }
  }

  let maxElements = [];
  for (let elem in numOccurences) {
    if (numOccurences[elem] === max) {
      if (typeof(modeArray[0]) === 'number') {
        elem = parseInt(elem);
      }
      maxElements.push(elem)
    }
  }
  console.log(maxElements)
  return maxElements;
}

// calculateMode(["who", "what", "what", "where", "who"]);