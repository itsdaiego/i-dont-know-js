// cheating using eval

function printName (name) {
  eval('name = "Brian"')
  console.log(name)
}

printName('Aiden')

// cheating using with

function accessXProperty (obj) {
  with (obj) {
    x = 'muhahaha!!!';
  }
}

const obj1 = {
  z: '2'
}



accessXProperty(obj1)

console.log('leaked global ' + x)
