/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  let stark = []
  let str = ''
  let arr = path.split('/')
  arr.forEach(val => {
    if (val && val == '..') {
      stark.pop()
    } else if (val && val != '.') {
      stark.push(val)
    }
  })
  // str = '/' + stark.join('/')
  arr.length ? (str = '/' + stark.join('/')) : (str = '/')
  return str
}
