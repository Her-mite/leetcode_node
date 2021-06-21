/**
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
    有效的 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

    题解：回溯算法， 将字符串拆分为4段， 减去不满足IP地址条件的结果
    回溯算法模板：
    void backtracking(参数) {
    if (终止条件) {
        存放结果;
        return;
    }

    for (选择：本层集合中元素（树中节点孩子的数量就是集合的大小）) {
        处理节点;
        backtracking(路径，选择列表); // 递归
        回溯，撤销处理结果
    }
}


 */

var restoreIpAddresses = function(s) {
    let res = [], path = [];
    backtracking(0);
    return res;
    function backtracking(i){
        let len = path.length;
        if(len > 4) return; // IP最多分为四段
        if(len === 4 && i === s.length){            // 终止条件： 长度为4且遍历到末尾 
            res.push(path.join('.')); // 将4段数组拼接到一起作为字符串存储到res数组中
            return;
        }

        // 处理结点
        for(let j = i; j < s.length; j ++){
            const str = s.substr(i, j - i + 1); // 截取从i开始的字符串
            if(str.length>3 || +str > 255) break; // 网段长度大于3或者值大于255 均不符合条件
            if(str.length>1 && str[0] === '0') break; // 位数大于1时， 第一位不能为0ß
            path.push(str);
            backtracking(j+1); // 从截取位置的下一位置开始遍历
            path.pop();
        }

    }
};