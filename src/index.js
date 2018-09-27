module.exports = function getZerosCount(number) {
  var count = 0;
  var p = 1;
  while (Math.pow(5, p) < number) {  
    count = parseInt(number / Math.pow(5, p)) + count;
    p++;  
  }
  return count;
}
