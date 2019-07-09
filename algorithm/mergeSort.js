/* 
使用递归的代码如下。优点是描述算法过程思路清晰，缺点是使用递归，mergeSort()函数频繁地自我调用。
长度为n的数组最终会调用mergeSort()函数 2n-1次，这意味着一个长度超过1500的数组会在Firefox上发生栈溢出错误。
可以考虑使用迭代来实现同样的功能。
*/
function　merge(left, right){
    var　result=[];
    while(left.length>0 && right.length>0){
        if(left[0]<right[0]){
        /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
            result.push(left.shift());
        }else{
            result.push(right.shift());
        }
    }
    return　result.concat(left).concat(right);
}

function　mergeSort(items){
    if(items.length == 1){
        return　items;
	}
	var　middle = Math.floor(items.length/2),
    left = items.slice(0, middle),
    right = items.slice(middle);
    return　merge(mergeSort(left), mergeSort(right));
}
