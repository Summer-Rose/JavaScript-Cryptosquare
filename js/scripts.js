var cryptosquare = function(userEntry) {
  var strippedString = stripString(userEntry);
  var rectangleWidth = calculateRectangleWidth(strippedString.length);
  var rearrangedString = reconstructString(strippedString, rectangleWidth);
  var outputString = finalString(rearrangedString);
  return outputString;
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
  return newArray.toString().replace(/,/g, "");
}

var finalString = function(string) {
  var newString = "";
  for (var i = 0; i < string.length; i += 5) {
    if (i > string.length - 5) {
      newString = newString.concat(string.substring(i));
    } else {
      newString = newString.concat(string.substring(i, i + 5));
      newString = newString.concat(" ");
    }
  }
  return newString;
}

$(document).ready(function() {
  var inputMessage;
  $("form#message").submit(function(event) {
    inputMessage = $("input#input").val();
    var outputMessage = cryptosquare(inputMessage);

    $(".cryptosquare").text(outputMessage);

    $("#result").show();
    $(".form").hide();
    event.preventDefault();
  });

  $(".clickable").click(function() {
    alert(inputMessage);
  });
});
