function calculateMode(array) {
  returnArray = []
  var iter_obj = {}
  for (item of array) {
    if (item in iter_obj) {
      iter_obj[item] = (iter_obj[item] + 1)
    }
    else {
      iter_obj[item] = 1
    }
  } var most_occured = 0 
  for (key in iter_obj) {
    if (iter_obj[key] > most_occured) {
      most_occured = iter_obj[key]
    }
  } for(key in iter_obj) {
    if (iter_obj[key] === most_occured) {
      returnArray.push(key)
    }
  } return returnArray 
}
// calculateMode([1,2,5])

 module.exports = calculateMode
