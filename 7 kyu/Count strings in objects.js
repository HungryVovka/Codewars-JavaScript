// -----------------------------------------------------------
// Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:
// 
// strCount({
//   first: "1",
//   second: "2",
//   third: false,
//   fourth: ["anytime",2,3,4],
//   fifth:  null
//   })
//   //returns 3
// -----------------------------------------------------------

function strCount(obj){
  var s = 0;
  for (i in obj){
    if (typeof obj[i] == "string"){
      s++;
    }
    if (typeof obj[i] == "object"){
      s += strCount(obj[i]);
    }
  }
  return s;
}