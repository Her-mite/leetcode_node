/**
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
    给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

    解题思路：回溯法，深度优先搜索（DFS），如果没有到达叶子节点，将节点的值添加到字符串letter，遍历二叉树最左侧节点  将该节点所有子节点记录，作为上一个节点遍历完成后的一个遍历节点。
    当遍历到叶子节点时， 将letter值记入结果数组， 然后跳出
 */
    var letterCombinations = function(digits) {
      if(digits == ''){
         return []
      }

      // 定义数组映射关系
      let letterMap = ['','', 'abc','def','ghi','jkl','mno','pqrs','tuv','wxyz']

      let result = [];

      /**
       * @description 定义回溯方法
       * @param {当前已有字符串} letter 
       * @param {当前遍历深度，即字符串长度} index 
       * @returns 字符串结果
       */
      function recursion (letter, index) {
         // 进入到最深一层， 将此时的letter记入result
         if(index === digits.length){
            result.push(letter);
            return
         }
         
         // 获取数字对应字符串
         let currentStr = letterMap[digits[index]];

         // 遍历该数字对应字符串的所有字符， 将其添加到深一层的函数中， 添加末尾的值为本字符值，index为层次数+1
         for(let i = 0; i < currentStr.length; i ++) {
            recursion(letter+currentStr[i], index +1 );
         }
      }
      
      recursion('', 0);// 开始从头遍历
      return result;

    };
    let digits = "23"
    let result = letterCombinations(digits);
    console.log(result)