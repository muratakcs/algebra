describe('TensorSpace', () => {
  var TensorSpace = require('algebra').TensorSpace

  var ring = require('algebra-ring')([0, 1], {
    contains (a) { return (typeof a === 'number' && isFinite(a)) },
    equality: (a, b) => { return a === b },
    addition: (a, b) => { return a + b },
    negation: (a) => { return -a },
    multiplication: (a, b) => { return a * b },
    inversion: (a) => { return 1 / a },
  })

  it('can create a Scalar', () => {
    var indices = [1]
    var type = [1, 0]

    var Scalar = TensorSpace(indices, type)(ring)

    Scalar.zero.should.be.eql(0)

    Scalar.addition(1, 2).should.be.eql(3)
    Scalar.addition(1, 2, 3).should.be.eql(6)

    Scalar.subtraction(1, 2).should.be.eql(-1)
    Scalar.subtraction(1, 2, 3).should.be.eql(-4)
  })

  it('can create a Vector', () => {
    var indices = [2]
    var type = [1, 0]

    var Vector = TensorSpace(indices, type)(ring)

    Vector.zero.should.be.eql([0, 0])

    Vector.addition([1, 0], [1, -1]).should.be.eql([2, -1])
    Vector.addition([1, 0], [1, -1], [-1, 1]).should.be.eql([1, 0])

    Vector.subtraction([2, -1], [1, -1]).should.be.eql([1, 0])
    Vector.subtraction([1, -1], [2, -2], [3, -3]).should.be.eql([-4, 4])
  })

  it('can create a Matrix', () => {
    var indices = [2, 2]
    var type = [1, 1]

    var Matrix = TensorSpace(indices, type)(ring)

    Matrix.zero.should.be.eql([0, 0,
                               0, 0])

    Matrix.addition([1, 0,
                     0, 1],
                    [1, -1,
                     0,  1]).should.be.eql([2, -1,
                                            0,  2])

    Matrix.addition([1, 0,
                     0, 1],
                    [1, -1,
                     0,  1],
                    [2, 1,
                     1, 2]).should.be.eql([4, 0,
                                           1, 4])

    Matrix.subtraction([1, 0,
                        0, 1],
                       [1, -1,
                        0,  1]).should.be.eql([0, 1,
                                               0, 0])

    Matrix.subtraction([1, 0,
                        0, 1],
                       [1, -1,
                        0,  1],
                       [2, 1,
                        1, 2]).should.be.eql([-2,  0,
                                              -1, -2])
  })
})