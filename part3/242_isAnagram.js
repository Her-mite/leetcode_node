/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 * 
 * 题解： 新建一个长度为26， 默认值为0的数组。 遍历字符串s， 计算字符与a的相对位置，对应的值记录自增1，
 *      遍历字符串t，计算字符与a的相对位置， 对应的值自减1
 *      遍历数组， 如果发现有不为0的元素， 则不是字母异位词， 返回false， 否则返回true
 * 
 */
var isAnagram = function(s, t) {
    let unicode = new Array(26).fill(0);
    for(let i = 0; i < s.length; i ++){
        let index = s[i].charCodeAt()-'a'.charCodeAt(); // 获取每个字符相对a的位置
        unicode[index] ++;
    }
    for(let i = 0; i < t.length; i ++){
        let index = t[i].charCodeAt()-'a'.charCodeAt(); // 获取每个字符相对a的位置
        unicode[index] --;
    }
    for(let i = 0; i < unicode.length; i ++){
        if(unicode[i] != 0){
            return false;
        }
    }
    return true;

};

let s = "anagram", t = "nagaram"
let result = isAnagram(s, t);
console.log(result)