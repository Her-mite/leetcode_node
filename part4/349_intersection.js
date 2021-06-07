/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 */

var intersection = function(nums1, nums2) {
    // 根据数组大小更换操作的数组
    if(nums1.length < nums2.length){
        const temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }

    const nums1Set = new Set(nums1);// nums1元素去重
    let resultSet = new Set();

    // 遍历较短的数组nums2， 如果该元素在num1Set中也存在则将其放入结果集
    for( let i = nums2.length-1; i >= 0; i --){
        nums1Set.has(nums2[i]) && resultSet.add(nums2[i])
    }
    return Array.from(resultSet)

};