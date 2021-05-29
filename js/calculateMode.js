const calculateMode = inputArr => {
  /**
   * Define a function calculateMode which is called with an inputArr parameter
   * Define a variable highestFreq
   * Creat an answerArr which holds return values
   * create a list object which holds values:occurrences
   * Iterate through inputArr counting instances of unique values, then append those values to the list
   * Find the highest count, then iterate through the list looking for those items and adding them to the answerArr while checking for duplication
   * if tie breaker, all values with same count are appended.
   */
  let list = {};
  let highestFreq = 0;
  let answerArr = [];
  let keys = []
  let workArr = inputArr;
  //catch the empty array case:
  if (workArr == null || workArr.length == 0) {
    return null
  }
  workArr = inputArr.sort((a,b) => a-b);

  //populate list object with values:frequencies
  workArr.forEach(function(item){
    if(typeof list[item] == "undefined") {
      list[item] = 1;
    } else {
      list[item] += 1
    }
    if (list[item] > highestFreq) {
      highestFreq = list[item]
    };
  })
  keys = Object.keys(list)
  if (keys.length == 0) {
      return null
  }

  /*Use JSON.parse to resolve the String key names, catching edge case behavior (if key = 0, JSON.parse doesn't work right.)
  */
  for ( i = 0; i < keys.length; i++) {
    let value = list[keys[i]];
    if (value == highestFreq && keys[i] != 0) {
      answerArr.push(JSON.parse((keys[i]))) 
    } else if (value == highestFreq) {
       answerArr.push(parseInt(keys[i])) //if keys[i] is 0 case
    }
  }
  return (answerArr) 
}

module.exports = calculateMode