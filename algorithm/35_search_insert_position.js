/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:

Input: [1,3,5,6], 5
Output: 2
Example 2:

Input: [1,3,5,6], 2
Output: 1
Example 3:

Input: [1,3,5,6], 7
Output: 4
Example 4:

Input: [1,3,5,6], 0
Output: 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // solution 1 beat 99%, cost 56ms, 33.7MB
    // return index if find nums[index] equals to target
    // return 0 if target smaller than first item of nums
    // return num.length if target bigger than last of nums
    // loop nums
    //  return i + 1 if nums[i] < target && target < nums[i + 1]
    let index = nums.indexOf(target);

    if(index > -1) return index;
    if(nums[0] > target) return 0;
    if(nums[nums.length-1] < target) return nums.length;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] < target && target < nums[i+1]) {
            return i+1;
        }
    }
};

var searchInsert = function(nums, target) {
    // solution 2 beat 99.93%, costs: 44ms, 33.8MB 
    // retun 0 if array empty
    // return length of nums if target bigger than last of nums
    // return index if find target in nums

    // binarySearch(arr, first, mid, last)
    //	if target < nums[mid]
    //		return mid if mid is first item or target bigger than previous item of mid
    //		return binarySearch(arr, first, Math.floor(mid / 2), mid)
    // 	else if (target > nums[mid]
    //		return (mid + 1) if mid is last item or target is smaller than next item of mid
    // 		return binarySearch(arr, mid + 1, Math.floor( (mid + last) / 2, last);
    // 	else return mid if target == nums[mid]

    // return binarySearch(arr, 0, Math.floor(nums.length/2), nums.length)

    let len = nums.length;
    if (!len) return 0;
	if (target > nums[len - 1]) return len;
	
	const idx = nums.indexOf(target)
    if (idx > -1) return idx;

    let binarySearch = function(arr, first, mid, last) {
        if (target < arr[mid]) {
            if (mid === first || target > arr[mid - 1]) return mid;
            return binarySearch(arr, first, Math.floor(mid / 2), mid);
        }
        else if(target > arr[mid]) {
            if (mid === arr.length - 1 || target < arr[mid + 1]) return mid + 1;
            return binarySearch(arr, mid + 1, Math.floor((mid + last) / 2), last);
        } else {
            return mid;
        }
    };
    return binarySearch(nums, 0, Math.floor(len/2), len);
};

var searchInsert = function(nums, target) {
    // solution 3, costs: 68ms, 34.6MB
    // for idx, val in nums
    //      return idx if target <= val
    // return length of nums
    for (let i = 0; i < nums.length; i++){
        if (target <= nums[i]){
            return i;
        }
    }
    return nums.length;
};
