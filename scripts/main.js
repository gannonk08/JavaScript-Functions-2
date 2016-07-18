// Define a function called oldestPerson that takes an object with names as keys and ages as values (e.g., {'Chuck': 22, 'Brian': 46}), and then returns the name of the oldest living person.

function oldestPerson(obj) {
    var ages = [];
    var maxAge = 0;
    for (var key in obj) {
        ages.push(obj[key]);
    }
    maxAge = Math.max.apply(null, ages)
    for (var keyz in obj) {
        if (obj[keyz] === maxAge) {
            return keyz
        }
    }
}

var peopleObj = {
    Edward: 30,
    Chuck: 46,
    Brian: 12,
    Bart: 10
}
oldestPerson(peopleObj)

// Define a function called longestWord that takes a string and returns the longest word in the string.

function longestWord(string) {
    var wordObj = {};
    var maxWord = 0;
    var lengthArr = [];
    var wordArray = string.split(" ");
    for (var i = 0; i < wordArray.length; i++) {
        lengthArr[i] = wordArray[i].length
    }
    maxWord = Math.max.apply(null, lengthArr);
    return wordArray[lengthArr.indexOf(maxWord)];

}
longestWord("The quick brown fox jumped over the lazy dog's bone")

// Refactor the longestWord function so that it ignores punctuation.

function longestWord(string) {
    var wordObj = {};
    var maxWord = 0;
    var lengthArr = [];
    var noPunc = string.replace("[^A-Za-z]+", "")
    console.log(noPunc);
    var wordArray = noPunc.split(" ");
    for (var i = 0; i < wordArray.length; i++) {
        lengthArr[i] = wordArray[i].length
    }
    maxWord = Math.max.apply(null, lengthArr);
    return wordArray[lengthArr.indexOf(maxWord)];

}
longestWord("The quick brown fox jumped over the lazy dog's bone")

// Define a function called factorial that takes a random number as an argument and then returns the factorial of that given number.
function factorial(ranNum) {
  var fact = 1
  while (ranNum>0) {
    fact = fact*ranNum;
    ranNum --
  }
  return fact;
}

factorial(5)


// Bonus: Write a function called palindrome that takes a string as an argument. Return true if the string is a palindrome, otherwise return false.
