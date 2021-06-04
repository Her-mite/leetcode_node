/**
 * 给定一个含有 n 个正整数的数组和一个正整数 target 。
找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

    题解：滑动窗口法（双指针），设定左指针在开始位置， 右指针从0开始遍历数组，进行for循环。 每次先得到当前批次的从0到right的最长数组，判断当前总和
    是否> target， 若>target，首先判断当前数组长度是否< 当前记录的最小长度， 若是则更新为最小长度。此时再将sum的值-最左侧的元素的值， 判断sum是否
    满足条件， 若是则更新最小长度， 否则判断之前的长度已经是当前最小长度。循环遍历完成后， 若miniLen值仍为初始值，说明未找到， 返回0， 否则返回最小值
 */


var minSubArrayLen = function(target, nums) {

    let miniLen = nums.length+ 1; // 默认数组字符串为其自身

    let left = 0, sum = 0;

    for(let right = 0; right < nums.length; right ++){ //遍历右指针的最终位置情况
        sum += nums[right];
        
        while(sum >= target){ // 找到满足条件的子数组
            if( (right - left) < miniLen){  // 判断当前元素长度和当前记录的最小长度， 取较小值
                miniLen = right - left + 1;
            }
            sum -=nums[left]; // 将sum值减去最左侧值， 剔除最左侧元素，判断sum是否仍满足条件
            left ++
        }
    }
    
    return miniLen== nums.length+1? 0 : miniLen // miniLen值未更新则返回0， 否则返回最小值

};

let nums = [[1,1,1,1,1,1,1,1]];
let target = 4;
let miniLen = minSubArrayLen(target, nums);
console.log( miniLen)