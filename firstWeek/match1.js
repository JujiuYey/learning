const str = 'fsdassdfsdf'

function match(str) {
  for (let i of str) {
    if (i == 'a') {
      return true
    } 
  }
  return false
}

console.log(match(str))
