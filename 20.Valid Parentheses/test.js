/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var stark = []
  for (let i = 0; i < s.length; i++) {
    const start = s[i]
    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
      stark.push(s[i])
    } else {
      const end = stark[stark.length - 1]
      if ((start == ')' && end == '(') || (start == ']' && end == '[') || (start == '}' && end == '{')) {
        stark.pop()
      } else {
        return false
      }
    }
  }
  return stark.length == 0
}
