require('babel-register')()

const enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')

enzyme.configure({ adapter: new Adapter() })

const chai = require('chai')
const chaiEnzyme = require('chai-enzyme')

chai.use(chaiEnzyme())