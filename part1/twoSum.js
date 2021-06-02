/**
 * @description
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 */
var twoSum = function(nums, target) {
    let map = []; // 已遍历数组
    let result = [];    // 返回结果

    // 遍历输入数组， target减去nums[i]获得一个想要的目标值temp，查看新数组内是否有该值，如有，则该元素和target减去该元素的位置即为答案。无论是否目标值，均将元素加到已遍历数组内
    for( let i = 0; i  < nums.length; i ++){
        let temp = target - nums[i]; // 获得当前遍历元素希望得到的目标值
        if( map.includes(temp) ){   // 判断目标值在当前已遍历数组中是否存在
            let tempIDX = nums.indexOf(target-nums[i]); // 如果存在则获取目标值的位置索引和本元素的位置索引， 存入返回结果数组
            result.push(tempIDX)
            result.push(i);
        }
        map.push(nums[i]);  // 将该元素记录到已遍历数组内

    }
    return result
};


let nums = [2, 7, 6, 11], target = 13
twoSum(nums, target );