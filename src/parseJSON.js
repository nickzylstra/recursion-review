// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  // clean leading whitespace
  // determine first char

  // for first char
  // clean leading and trailing whitespace around each of 6 main structural elements {}[],:
  // if {
    // make new object
    // process json into object properties
      // call parseJSON on each value
      // jdd value at key on new object
    // return object
  // else if [
    // make new array
    // process json into array elements
        // call parseJSON on each element then push to new array
    // return array
  // else if "
    // process json into string
      // handle escaping
    // return string
  // else if numRegEx
    // process json into number
    // return number
  // else if true
    // return true
  // else if false
    // return false
  // else if null
    // return null

  throw new SyntaxError();
};
