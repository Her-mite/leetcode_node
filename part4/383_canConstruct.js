/**
 * 给定一个赎金信 (ransom) 字符串和一个杂志(magazine)字符串，判断第一个字符串 ransom 能不能由第二个字符串 magazines 里面的字符构成。如果可以构成，返回 true ；否则返回 false。

(题目说明：为了不暴露赎金信字迹，要从杂志上搜索各个需要的字母，组成单词来表达意思。杂志字符串中的每个字符只能在赎金信字符串中使用一次。)
 * 题解： 新建一个长度为26， 默认值为0的数组。 遍历字符串magazine， 计算字符与a的相对位置，对应的值记录自增1，
 *      遍历字符串ransomNote，计算字符与a的相对位置， 对应的值自减1
 *      遍历数组， 如果发现有小于0的元素，说明有赎金信字母不够用， 返回false， 否则返回true
 */


var canConstruct = function(ransomNote, magazine) {
    let unicode = new Array(26).fill(0);
    for(let i = 0; i < magazine.length; i ++){
        let index = magazine[i].charCodeAt()-'a'.charCodeAt(); // 获取每个字符相对a的位置
        unicode[index] ++;
    }
    for(let i = 0; i < ransomNote.length; i ++){
        let index = ransomNote[i].charCodeAt()-'a'.charCodeAt(); // 获取每个字符相对a的位置
        unicode[index] --;
    }
    for(let i = 0; i < unicode.length; i ++){
        if(unicode[i] < 0){
            return false;
        }
    }
    return true;
};

let ransomNote = "aa", magazine = "aab"
canConstruct(ransomNote, magazine)