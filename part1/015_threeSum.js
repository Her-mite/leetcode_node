/**
 * 问题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组
 * 解题思路：双指针法：一层for循环， 定义一个左指针在i+1位置， 右指针在数组末尾，计算这三个位置的值与0相比的结果。结果>0，则右指针左移一位，结果<0则左指针右移一一位
 * 如果相等这这组数据为一组解记录到数组， 并将左右指针同时收缩一位， 直到两指针相邻
 */


var threeSum = function (nums){

    if(nums.length<3){ // 数组元素少于三个直接报错
        return []
    }
    // 一元数组去重
    if(Array.from(new Set(nums)).length == 1 && nums[0]== 0){
        return [[0, 0, 0]]
    }

    let result = [];
    nums  = nums.sort((a,b)=>a-b); // 数组排序， 作为Array.sort的参数传入，使数组有序。 否则因默认已ASCII编码排序，有排序出错的问题
    for(let i = 0 ; i < nums.length-2; i ++){
        let left = i + 1;
        let right = nums.length-1;
        
        while(left < right){
            if ( nums[i] + nums[left] + nums[right] > 0 ){
                right --; // 值 > 0，将最大值向左移
            }else if(nums[i] + nums[left] + nums[right] < 0){
                left ++;    // 值 < 0, 将左侧值向右移
            }else{
                result.push ( [nums[i], nums[left], nums[right]] );// 值相等则为一组结果, 左右指针同时收缩
                left ++;
                right --;
            }
        }
    }

    // 二元数组去重
    let result_set=new Map();
    result.forEach(item=>{
        item.sort((a,b)=>a-b);
        result_set.set(item.join(),item);
    });      
    let final_result= Array.from(result_set.values());

    return final_result;
}

let nums =  [-1,0,1,2,-1,-4]
let result = threeSum(nums);
console.log("result", result)