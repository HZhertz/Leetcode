/**
 * @param {string} s
 * @return {string}
 */
// var removeDuplicates = function(s) {
//   var stark = ''
//   for(let i = 0;i<s.length;i++){

//       const end = stark[stark.length-1]
//       if(s[i]===end){
//           stark = stark.slice(0,stark.length-1)
//       }else{
//           stark = stark + s[i]
//       }
//   }
//   return stark
// };
var removeDuplicates = function (s) {
  var stark = []
  for (v of s) {
    let prev = stark.pop()
    if (v != prev) {
      stark.push(prev)
      stark.push(v)
    }
  }
  return stark.join('')
}
