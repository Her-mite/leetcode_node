/**
 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
    字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 */

var findAnagrams = function(s, p) {
    let result = [];

    let len = p.length;
    for(let i = 0; i <= s.length -len; i ++){
        let litS = s.slice(i, i +len).toString();
        console.log('litS', litS);
        if(isAnagrams(litS, p)){
            result.push(i);
        }
    }
    return result


    function isAnagrams (litS, litP){
        let unicode = new Array(26).fill(0);
        for(let i = 0; i < litS.length; i ++){
            let index = litS[i].charCodeAt()-'a'.charCodeAt(); // 获取每个字符相对a的位置
            unicode[index] ++;
        }
        for(let i = 0; i < litP.length; i ++){
            let index = litP[i].charCodeAt()-'a'.charCodeAt(); // 获取每个字符相对a的位置
            unicode[index] --;
        }
        for(let i = 0; i < unicode.length; i ++){
            if(unicode[i] != 0){
                return false;
            }
        }
        return true;
    }
    


};

let s= "cbaebabacd" ,p="abc"
let result = findAnagrams(s, p);
console.log(result)