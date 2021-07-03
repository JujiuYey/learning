const str = 'fsdfsabbcdefdab'


function match(str) {
  let foundA = false
  let foundB = false
  let foundC = false
  let foundD = false
  let foundE = false
  for(let i of str) {
    if (i == 'a') {
      foundA = true
    } else if (foundA && i == 'b') {
      foundB = true
    } else if (foundB && i == 'c') {
      foundC = true
    } else if (foundC && i == 'd') {
      foundD = true
    } else if (foundD && i == 'e') {
      foundE = true
    } else if (foundE && i == 'f') {
      return true
    } else {
      foundA = false
      foundB = false
      foundC = false
      foundD = false
      foundE = false
    }
  }
  return false
}

console.log(match(str))