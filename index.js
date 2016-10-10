module.exports = pullCss
var css = require('css')

function pullCss (options) {
  return function (read) {
    return function (end, cb) {
      read(end, function (end, data) {
        if (end) return cb(end, null)
        cb(null, css.parse(data, options))
      })
    }
  }
}

pullCss.stringify = function pullCssStringify (options) {
  return function (read) {
    return function (end, cb) {
      read(end, function (end, data) {
        if (end) return cb(end, null)
        cb(null, css.stringify(data, options))
      })
    }
  }
}
