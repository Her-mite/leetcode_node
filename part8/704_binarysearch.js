/**
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。

    题解： 二分查找， 默认左侧指向0， 右侧指向数组尾部。 while循环，当左指针< 右指针数值时，令中间指针指向中位数， 判断中间数与目标值的大小， 
    如果中间数<目标值， 说明目标值可能在数组中位数的右侧， 所有将最左侧的值赋值为mid+1；如果中间数>目标值， 说明目标值可能在数组中位数的左侧，
    所以将最右侧的值赋值为mid， 如果恰好相等，则直接返回即可
 */



var search = function(nums, target) {

    let left = 0, right = nums.length;

    while(left < right){
        let mid = (left + right) >> 1; // 位运算， >> 1 === / 2 , << 1 === * 2 保留整数部分

        if (nums[mid] < target){    // 数组有序， 当中位数值小于目标值时， 说明target在右侧
            left = mid + 1;
        }else if(nums[mid] > target){
            right = mid;
        }else{
            return mid
        }
    }

    return -1;

};

let nums = [-1,0,3,5,9,12];
let target = -32;
let result = search(nums, target);
console.log(result)