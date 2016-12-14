'use strict'

module.exports = {


  get today() {
    return Date.now()
  },


  get todayReadable() {
    let tstamp  = new Date()
    return tstamp.toDateString()
  },


  now: {
    seperator: '-',
    get get() {
      let o = new Date()
      let minutes = function() {
        if (o.getMinutes() < 10) return '0' + o.getMinutes()
        else return o.getMinutes()
      }()
      let month = function() {
        if (o.getMonth() < 10) return '0' + o.getMonth()
        else return o.getMonth()
      }()
      let dateArr = [
        o.getDate(),
        month,
        o.getFullYear()
      ]
      let timeArr = [
        o.getHours(),
        minutes,
        o.getSeconds()
      ]
      return dateArr.join('.') + this.seperator + timeArr.join(':')
    },

    parseJSON: function(json, callback) {
      let parsed
      try {
        parsed = JSON.parse(json)
      } catch (err) {
          callback(err, null)
      }
      if (parsed) callback(null, parsed)
    },
  }
}
