/**
 * 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。

不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。

    题解： 双指针法：两个指针开始时均指向0， 快指针fast开始遍历数组， 如果数组的值不是要移除的元素，则保留该值，慢指针slow的值+1。 
        如果fast指针指向的值是需要移除的元素， 则快指针指向下一个元素， 慢指针停留在这里， 等待快指针找到下一个需要保留的值存在这里。
        for循环遍历完成后，因为，slow每次找到可以保留的元素都会自增1， 最后一次找到也会自增。 所以slow的值即是数组的长度，不需要-1操作
 */


var removeElement = function(nums, val) {

    let slow = 0
    for(let fast = 0; fast < nums.length; fast ++){
        if(nums[fast] != val){
            nums[slow]= nums[fast];
            slow ++;
        }
    }
    return slow

};
let nums=[3,2,2,3],  val= 3;

let result = removeElement(nums, val);
console.log(result)