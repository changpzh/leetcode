/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// solution 1: 2 for loop; 104ms, 34.9M, faster than 52.38%
// var twoSum = function(nums, target) {
//     let len = nums.length;
//     for(let i = 0; i < len -1; i++) {
//         for(let j = i + 1; j < len; j++) {
//             if (nums[j] + nums[i] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return [];
// };



// solution 2 use map search method: 40 ms, 35.7M, faster than 100.00%
// use map as map[num] = index
// loop if exist map[target - num] >=0 is not self position(index)
//   return [index, map[target - num]]
// finally return []
var twoSum = function(nums, target) {
    let map = {};
    let result = null;
    nums.forEach((num, idx) => {
        map[num] = idx;
    });

    nums.some((num, idx) => {
        let item = map[target - num];
        if (item >= 0 && item !== idx) {
            result = [idx, item];
            return true;
        }
        return false;
    });
    return result;
}
