// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  //input: obj
  //output: string version of object, in JSON format
  let result = '';

  const objType = typeof obj;
  if (Array.isArray(obj)) {
    result += '[';

    for (let i = 0; i < obj.length; i += 1) {
      result += stringifyJSON(obj[i]);
      if (i < obj.length - 1) {
        result += ',';
      }
    }

    result += ']';
  } else if (objType === 'function' || obj === undefined || obj === null) {
    result += 'null';
  } else if (objType === 'object') {
    result += '{';

    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i += 1) {
      const val = obj[keys[i]];
      if (typeof val !== 'function' && val !== undefined) {
        result += `"${keys[i]}":`;
        result += `${stringifyJSON(val)}`;
        if (i < keys.length - 1) {
          result += ',';
        }
      }
    }
    // result = result.substring(0, result.length - 1);

    result += '}';
  } else if (objType === 'string') {
    // result = result + '"' + obj + '"';
    result = `${result}"${obj}"`;
  } else if (objType === 'boolean' || objType === 'number') {
    result += obj;
  }

  return result;

};
