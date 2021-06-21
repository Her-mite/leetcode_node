/**
 * 给定一个字符串 s 和一个整数 k，你需要对从字符串开头算起的每隔 2k 个字符的前 k 个字符进行反转。

如果剩余字符少于 k 个，则将剩余字符全部反转。

如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 */

var reverseStr = function(s, k) {

    // 传入字符串和对应开始/结束位置， 进行局部翻转
    function reverse(s, start, end){
        console.log('s', s, end)
        let sArr= s.split('')
        let mid = parseInt(start+(end - start)/2);
        for(let i = start; i < mid; i ++){
            let temp = sArr[i];
            sArr[i] = sArr[start+end-i -1];
            sArr[start +end-i -1] = temp;
        }
        return sArr.join('')
    }

    for(let i = 0; i < s.length; i += 2*k){
        if((s.length - i) > 2*k){
            s = reverse(s, i, i + k) // 每2k个字符翻转前k个
        }else if((s.length - i ) < k){
            s = reverse(s, i, s.length)
        }else{
            s = reverse(s, i, i + k )
        }
    }
    return s
};

reverseStr('abcdefg', 3)
