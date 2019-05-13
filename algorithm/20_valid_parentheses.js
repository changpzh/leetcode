/*
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true 
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	// solution 1: use map and arr; 48 ms,33.9M, faster than 99.82% 
    // map each bracket
    // new arr for count bracket
    // for loop each item
    //      if last of arr is current item
    //          pop last one of arr
    //      else push to arr
    // return !arr.length (if arr is empty means valid)
    var bracketMap = { "(": ")", "{": "}", "[": "]" };
    var res = [];

    var sArr = s.split("");
    for (let i = 0, len = sArr.length; i < len; i++) {
        var resLen = res.length;
        if (res[resLen - 1] === sArr[i]) {
            res.pop();
        } else {
            res.push(bracketMap[sArr[i]]);
        }
    }
    return !res.length;
};
