const {packageAHello} = require("package-a")
const {packageBHello} = require("package-b")
console.log("Main Index")
packageAHello('Package A Hello')

packageBHello('Package B Hello')