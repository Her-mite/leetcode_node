/**
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c + d 的值与 target 相等？找出所有满足条件且不重复的四元组。

*/
var fourSum = function(nums, target) {
    const quadruplets = [];
    // 小于4元素直接返回空数组
    if (nums.length < 4) {
        return quadruplets;
    }
    nums.sort((x, y) => x - y);// 将数组进行排序
    const length = nums.length;
    for (let i = 0; i < length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) { // 去重前后值相同不再重复计算
            continue;
        }
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {// 最小值仍大于目标时跳出循环
            break;
        }
        if (nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {// 最大值仍小于目标值则进行下一次循环
            continue;
        }
        for (let j = i + 1; j < length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {// 去重
                continue;
            }
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) { // 最小值仍大于目标时跳出循环
                break;
            }
            if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {// 最大值仍小于目标值则进行下一次循环
                continue;
            }
            // 双指针法
            let left = j + 1, right = length - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    left++;
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return quadruplets;
};
