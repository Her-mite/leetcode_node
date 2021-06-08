/**
 * 「快乐数」定义为：
对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果 可以变为  1，那么这个数就是快乐数。

题解：由题意知， 如果无法变道1， 则该数是无限循环的， 即出现过的数据会出现第二次。 如果验证过程中发现有数据出现第二次且不为1， 则退出遍历返回结果即可
    因此定义一个set类型， 当值不为1且未在set中保存时， 将其存入set中， 其值更新为对应的平方和。若n最后=1退出循环， 返回true， n不为1退出循环，其在set中找到了对应的值， 返回false
 */
var isHappy = function(n) {
    function updateN(n){
        if (n == 0) return 0;
        let res = 0;
        while(n > 0){
            res += (n%10) * (n%10); // 取最后的平方
            n = parseInt( n / 10);  // 取高一位的数据
        }
        return res;
    }

    let sumSet = new Set();
    while( n !== 1 && !sumSet.has(n)){
        sumSet.add(n);
        n = updateN(n);
    }
    return n == 1
};