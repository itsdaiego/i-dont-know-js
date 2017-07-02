function callMe () {
  let b = 150
  function call () {
    console.log(b)
  }

  return call
}

const foo = callMe() // wat?

console.log(foo())
