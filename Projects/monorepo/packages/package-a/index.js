const {packageBHello} = require('package-b')
packageBHello('Calling from package-a')
exports.packageAHello = (name) => console.log(name)
