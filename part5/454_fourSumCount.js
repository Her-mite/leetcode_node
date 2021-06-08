/**
 * 给定四个包含整数的数组列表 A , B , C , D ,计算有多少个元组 (i, j, k, l) ，使得 A[i] + B[j] + C[k] + D[l] = 0。
    题解：定义一个map， 首先将前两个数组进行两层for循环的遍历， 将两者之和作为key， 该和出现的次数作为value存入map
    再对后两个数组进行两层for循环遍历， 根据0减去对应值的和， 查找是否有对应的元素， 找到了则将对应出现次数加到count上
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let sumSet = new Map();
    let count = 0;
    for (const num1 of nums1) {
        for (const num2 of nums2) {
            let sum = num1+ num2;
            sumSet.set(sum, (sumSet.get(sum) || 0) + 1) // 将和对应的value值+1
        }
    }

    for (const num3 of nums3) {
        for (const num4 of nums4) {
            let sum = num3+num4;
            count += (sumSet.get(0-sum)||0) // 找到能和sum对应的值， 其出现次数即为相加可为0的次数
        }
    }

    return count
};