const Spark = require("sparkbots")
Spark.start({
prefix: process.env.PREFIX,
token: process.env.TOKEN })

var ClientInjRe = require('./express.js')