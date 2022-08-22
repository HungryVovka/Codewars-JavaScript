// -----------------------------------------------------------
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
// 
// Note: input will never be an empty string
// -----------------------------------------------------------

function fakeBin(x){
  var binstr = '';
  var fakebin = x.split('');
  fakebin.forEach(f => {
    if (parseInt(f) < 5){
      binstr = binstr + '0';
    } else {
      binstr = binstr + '1';
    }
  })
  return binstr;
}