/**
 * 给定两个数组，编写一个函数来计算它们的交集。输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
我们可以不考虑输出结果的顺序
 */
// 双指针法
var intersect = function(nums1, nums2) {
    nums1.sort((a, b)=> a-b);
    nums2.sort((a, b)=> a-b);// 根据值的大小进行排序

    let point1 = point2= 0, result = [];

    while(point1 < nums1.length && point2 < nums2.length){
        if(nums1[point1] == nums2[point2]){
            result.push(nums1[point1]);
            point1++;
            point2++;
        }else{
            nums1[point1]< nums2[point2] ? point1 ++ : point2 ++;
        }
    }
    return result
};

let num1 = [1,2,2,1], num2 = [2,2 ]
let result = intersect(num1, num2);
console.log(result)