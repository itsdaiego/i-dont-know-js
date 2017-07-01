function printer () {
  this.name = 'NotShady'

  const self = this // TRIGGERED

  setTimeout(function () {
    console.log(self.name)
  })
}

printer()

function newPrinter () {
  this.realName = 'Shady'

  setTimeout(() => {
    console.log(this.realName)
  })
}

newPrinter()
