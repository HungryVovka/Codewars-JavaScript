// -----------------------------------------------------------
// Grade book
// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
// 
// Numerical Score				Letter Grade
// 90 <= score <= 100			'A'
// 80 <= score < 90				'B'
// 70 <= score < 80				'C'
// 60 <= score < 70				'D'
// 0 <= score < 60				'F'
// 
// Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.
// -----------------------------------------------------------

function getGrade (s1, s2, s3) {
  if ((s1 + s2 + s3) / 3 >= 90 && (s1 + s2 + s3) / 3 <= 100){
    return "A";
  } else if ((s1 + s2 + s3) / 3 >= 80 && (s1 + s2 + s3) / 3 < 90){
    return "B";
  } else if ((s1 + s2 + s3) / 3 >= 70 && (s1 + s2 + s3) / 3 < 80){
    return "C";
  } else if ((s1 + s2 + s3) / 3 >= 60 && (s1 + s2 + s3) / 3 < 70){
    return "D";
  } else {
    return "F";
  }
}

// or

function getGrade (s1, s2, s3) {
  let grade = (s1 + s2 + s3) / 3;
  if (grade >= 90 && grade <= 100){
    return "A";
  } else if (grade >= 80 && grade){
    return "B";
  } else if (grade >= 70 && grade < 80){
    return "C";
  } else if (grade >= 60 && grade){
    return "D";
  } else {
    return "F";
  }
}