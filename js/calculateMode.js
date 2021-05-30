const calculateMode = (arr) => {
let modeObj = {};
  let count = 0;
  let modeArr = [];

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    modeObj[char] = (modeObj[char] || 0) + 1

    if (modeObj[char] > count) {
      count = modeObj[char];
    }
  }
    for (highNum in modeObj) {
      if (modeObj[highNum] === count) {
      modeArr.push(highNum) //Figure out how to add int/float/string as needed
    } 
  }

  return modeArr;
}
