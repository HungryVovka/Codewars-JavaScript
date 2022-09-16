// -----------------------------------------------------------
// Define a function that removes duplicates from an array of numbers and returns it as a result.
// 
// The order of the sequence has to stay the same.
// -----------------------------------------------------------

function distinct(seq) {
  var newseq = [];
  seq.forEach(i => {
    if (!newseq.includes(i)){
      newseq.push(i);
    }
  });
  return newseq;
}

// or

function distinct(seq) {
  return seq.filter((a, b) => seq.indexOf(a) == seq.indexOf(a, b));
}

// or

function distinct(seq) {
  return [...new Set(seq)];
}