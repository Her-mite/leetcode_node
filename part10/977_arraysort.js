/**
 * 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。
 * 
 * 题解：元素组已有序， 所以平方后的最大值一定在原数组的最左或最右侧。 定义left和right两个指针指向数组两端的数据， 
 * 判断两个元素平方后的大小，将较大值以unshift插入到数组的尾部。直到左右指针相遇， 遍历完毕
 */


var sortedSquares = function(nums) {
    let left = 0, right = nums.length -1;
    let result = [];

    while(left <= right){ // 左右指针相遇循环停止
        if( nums[left] * nums[left] < nums[right] * nums[right]){
            result.unshift(nums[right] * nums[right]);
            right --; // 右侧值较大， 插入到结果数组， 同时将右指针左移一位
        }else{
            result.unshift(nums[left] * nums[left]);    
            left ++;
        }
    }
    return result;
};


let nums = [-1,0,3,5,9,12];
let result = sortedSquares(nums);
console.log(result)
