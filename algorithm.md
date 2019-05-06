## 35. Search Insert Position
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

### solution
```
// retun 0 if array empty
// binarySearch(arr, first, mid, after)
//	return mid if target == nums[mid]
//	else if target < nums[mid]
//		return mid if mid = 0 or target > arr[mid -1]
//		return binarySearch(arr, first, Math.floor(mid / 2), mid)
// 	else (target > nums[mid]
//		return mid if mid = arr[mid - 1] or target < arr[mid + 1]
// 		return binarySearch(arr, mid + 1, Math.floor( (mid + after) / 2, after);
// return binarySearch(arr, 0, Math.floor(nums.length/2), nums.length)


// binarySearch(arr, start, end)
//   return start if arr is empty
//   return arr.length = 1 && target > arr[start] ? start
//   return start if arr.length = 2 && target > arr[start] && target < arr[end]
// 	 mid = Math.floor( arrLen / 2)
//	 if (target equals arr[mid]) return mid
//   else if (target < arr[mid)
//		binarySearch(arr, start, mid)
//   else (target > arr[mid])
//      binarySearch(arr, mid, end)
```
