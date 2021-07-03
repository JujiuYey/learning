const str = 'fsdfsdab'


function match(str) {
  let foundA = false
  for(let i of str) {
    if (i == 'a') {
      foundA = true
    } else if (foundA && i == 'b') {      
      return true
    } else {
      foundA = false
    }
  }
  return false
}

console.log(match(str))