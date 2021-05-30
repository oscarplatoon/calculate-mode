const calculateMode = (data) => {
  //create empty array named mostRepetitive;
  let mostRepetitiveResult = [];
  //crate empty object which will count number of occurences in array
  let countObj = {};
  let dataType = typeof data[0];
  //iterate through data and count number of occurences and save it into empty object
  for (let i = 0; i < data.length; i++) {
    let currentData = data[i];
    if(countObj[currentData]) {
      countObj[currentData]++;
    } else {
      countObj[currentData] = 1;
    }
  }
  //create empty array which will save the number of occurences in array
  // create the variable named mostRepetive which will be the the most repetive numbers in array
  //iterate throught the object
  let mostRepetitiveNum = Object.values(countObj).sort().pop();
  for (let key in countObj) {
    if(countObj[key] === mostRepetitiveNum) {
  // if the current key of Value is mostRepetive push the key into the result array
    if(dataType === "number"){
     mostRepetitiveResult.push(Number(key));
    } else {
      mostRepetitiveResult.push(key);
    }
    }
  }
  // return the result array
return mostRepetitiveResult;
}
module.exports = calculateMode;
