"use strict";
/** Function: firstReverse
 * The function will take the str parameter being passed in and
 * return the string in reversed order
 * @param {string} str
 * @return {string} reversed
 * ie: "cat" => "tac"
 */

var firstReverse = str => {
  if (typeof str !== "string") {
    return null;
  }
  return str
    .split("")
    .reverse()
    .join("");
};

/** Function: alphaOrder
 * The function will take the str parameter being passed in and
 * return the string in alphabetical order
 * @param {string} str
 * @return {string} in alphabetical order
 * ie: "cake" => "acek"
 */
var alphaOrder = str => {
  if (typeof str !== "string") {
    return null;
  }
  return str
    .split("")
    .sort()
    .join("");
};
/** Function: vowelCount
 * The function will take the str parameter being passed in and
 * return the number of vowels in the string
 * @param {string} str
 * @return {number} count of vowels
 * ie: "oreo" => 3
 */

var vowelCount = str => {
  if (typeof str !== "string") {
    return null;
  }
  return str
    .toLowerCase()
    .split("")
    .filter(x => "aeiou".split("").includes(x)).length;
};
/** Function: timeConvert
 * The function will take the num parameter representing the amount of minutes being passed in and
 * return the number of hours and minutes. Separate the number of hours
 * and minutes with a colon
 * @param {number} num
 * @return {string} as hours:minutes
 * ie: 68 => 1:8
 */
var timeConvert = num => {
  if (typeof num !== "number") {
    return null;
  }
  var hours = Math.trunc(num / 60);
  var minutes = num % 60;
  return `${hours}:${minutes}`;
};
/** Function: repeatString
 * The function will take in two parameters and repeat a given string (first argument)
 * num times (second argument). -----Return an empty string if num is a negative number
 * @param {string} str
 * @param {num} times
 * @return {string} repeated num times
 * i.e repeatString("money", 3) => "moneymoneymoney".
 */
var repeatString = (str, times) => {
  if (typeof str !== "string") {
    return null;
  }
  if (typeof times !== "number") {
    return null;
  }
  if (times < 0) {
    return "";
  }
  return str.repeat(times);
};
/**
 * Below here we see a module.exports which is set to an object with a bunch of keys.
 * The module.exports syntax is a built-in javascript keyword that
 * allows functionality from this file to be used in other files.
 * Here we are exporting an object with a bunch of keys that will reference
 * the functions you have made. After you are done implementing a function,
 * change the 'null' to reference the corresponding function you have just created.
 * Then go into your terminal and run 'npm test' to see if the tests pass for your function.
 *
 * The reason why we export our functions out of this file is because behind the scenes,
 * the test-runner is importing this file so that it can gain access to the functions
 * and run tests on it.
 */

module.exports = {
  firstReverse: firstReverse,
  alphaOrder: alphaOrder,
  vowelCount: vowelCount,
  timeConvert: timeConvert,
  repeatString: repeatString
};
