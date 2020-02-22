module.exports = function reverse (n) {
    var b = '';
    var s = Math.abs(n).toString()
    for (i = s.length-1; i>=0; i--){
       b += s[i]
    }
   return b;
}
