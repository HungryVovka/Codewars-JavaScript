// -----------------------------------------------------------
// Color Ghost
// Create a class Ghost
// 
// Ghost objects are instantiated without any arguments.
// 
// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated
// 
// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"
// -----------------------------------------------------------

class Ghost {
  constructor(){
    this.colorGhost = ["purple", "red", "white", "yellow"];
  }
  
  get color(){
    return this.colorGhost[Math.trunc(Math.random() * this.colorGhost.length)];
  }
}