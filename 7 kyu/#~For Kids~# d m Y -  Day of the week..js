// -----------------------------------------------------------
// #~For Kids Challenges~#
// Your task is easy, write a function that takes an date in format d/m/Y(String) and return what day of the week it was(String).
// Example: "21/01/2017" -> "Saturday", "31/03/2017" -> "Friday"
// Have fun!
// -----------------------------------------------------------

function dayOfTheWeek(date){
  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var thisMonth = parseInt(date.slice(3, 5));
  let options = { weekday: 'long'};
  var aNewDate = new Date(month[thisMonth - 1] + " " + date.slice(0, 2) + ", " + date.slice(6, 10) + " 00:00:00");
  return new Intl.DateTimeFormat('en-US', options).format(aNewDate);
}

// or

function dayOfTheWeek(date) {
  const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  return week[new Date(date.replace(/(\d+\/)(\d+\/)/,"$2$1")).getDay()];
}