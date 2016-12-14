const devpunx = require('./index')

// dataStoreObject
let store = devpunx.dataStoreObject
store.user = {name: "Jon", age:23}
console.log('Store: ', store)

// Helpers
let utils = devpunx.helpers

// todayReadable
utils.todayReadable
console.log('Today readable: ', utils.todayReadable)

// now (readable)
utils.now.seperator = " -- "
utils.now
console.log('Today: ', utils.now.get)
