/**
 * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 char[] 的形式给出。
 */

var reverseString = function(s) {

    for(let i = 0; i < parseInt(s.length/2); i  ++){
        let temp = s[i];
        console.log(s[i])
        s[i] = s[s.length -i -1];
        console.log('22', s[i])
        s[s.length-i -1] =temp
    }
    console.log(s)
    return s;
};


