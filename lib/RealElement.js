
var AlgebraElement = require('./AlgebraElement')
  , Field          = require('./RealField')
  , inherits       = require('inherits')

var data
  , field = new Field()

function RealElement() {
  if (arguments.length === 0) 
    data = 1

  if (arguments.length === 1) 
    data = arguments[0]

  AlgebraElement.call(this, field, data)
}

inherits(RealElement, AlgebraElement)

module.exports = RealElement
