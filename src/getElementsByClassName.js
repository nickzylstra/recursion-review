// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  const results = [];

  const findElements = function findElements (node) {


    if (node.classList && node.classList.contains(className)) {
      results.push(node);
    }

    if(node.childNodes) {
      for (var i = 0; i < node.childNodes.length; i++) {
        var child = node.childNodes[i];
        findElements(child);
      }

    }
  };
  findElements(document.body);

  return results;
};


