// -----------------------------------------------------------
// Create a function that takes a number as an argument and returns a grade based on that number.
// 
// Score									        Grade
// Anything greater than 1 or less than 0.6			                        "F"
// 0.9 or greater									"A"
// 0.8 or greater									"B"
// 0.7 or greater									"C"
// 0.6 or greater									"D"
// 
// Examples:
// 
// grader(0)   should be "F"
// grader(1.1) should be "F"
// grader(0.9) should be "A"
// grader(0.8) should be "B"
// grader(0.7) should be "C"
// grader(0.6) should be "D"
// -----------------------------------------------------------

var grade = ["A", "B", "C", "D", "F"];

function grader(score){
  switch (true){
      case (1 >= score && score >= 0.9): return grade[0]; break;
      case (0.9 > score && score >= 0.8): return grade[1]; break;
      case (0.8 > score && score >= 0.7): return grade[2]; break;
      case (0.7 > score && score >= 0.6): return grade[3]; break;
      default: return grade[4];
  }
}
