var cryptosquare = function(userEntry) {

};

var stripString = function(userEntry) {
  return userEntry.replace(/[^\w]|_/g, "").toLowerCase();

};

var calculateRectangleWidth = function(number) {
  return Math.ceil(Math.sqrt(number));
}

var reconstructString = function(string, number) {
  var stringArray = string.split("");
  var newArray = [];
  for (var count = 0; count < number; count ++) {
    for (var i = count; i < stringArray.length; i += number) {
      newArray.push(stringArray[i]);
    }
  }
  return newArray;
  //return newArray.toString().replace(/,/g, "");
}


// $(document).ready(function() {
//
// });
