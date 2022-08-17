// -----------------------------------------------------------
// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with 
// the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
// 
// Task
// Implement a function named
// 
// generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
// generateRange(1, 10, 3) // should return array of [1,4,7,10]
// 
// Note
// min < max
// step > 0
// the range does not HAVE to include max (depending on the step)
// -----------------------------------------------------------

function generateRange(start, end, step) {
    var range = [];
    var typeofStart = typeof start;
    var typeofEnd = typeof end;
    typeof step == "undefined" && (step = 1);
    if (end < start) {step = -step};
    if (typeofStart == "number") {
      while (step > 0 ? end >= start : end <= start) {
        range.push(start);
        start += step;
      }
    } else if (typeofStart == "string") {
      start = start.charCodeAt(0);
      end = end.charCodeAt(0);
      while (step > 0 ? end >= start : end <= start) {
        range.push(String.fromCharCode(start));
        start += step;
      }
    }
    return range;
}

// or

function generateRange(min, max, step){
  var arr = [];
  for (let i = min; i <= max; i += step) {
    arr.push(i);
  }
  return arr;
}