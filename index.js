'use strict'

let helpers     = require('./lib/helpers')
let apiTests    = require('./lib/api-tests')
let obj         = {}

module.exports = {
    get dataStoreObject() {
        return obj
    },
    get helpers() {
        return helpers
    },
    get apiTests() {
        return apiTests
    }
}
