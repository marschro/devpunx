# ABOUT
devpunx is just a small package that holds some convenient functions and services.

# Install
```
npm install devpunx
```

# Use

## shareable objects
```javascript
const db = require('devpunx').dataStoreObject
db.user = {name: "Jon", age: 22}
```

## Helpers
```javascript
const utils = require('devpunx').helpers

// readabledate
let now = utils.now
let readableDate = utils.todayReadable

//readable datetime with separator
utils.now.seperator = " -- "
let date = utils.now

```
