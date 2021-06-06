/**
 * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 
 * 题解： 首先新建的一个大小为n*n的二维数组， 按顺时针走， 记录当前长度-1的位置， 如果n为奇数, 需要将中间数设置为n*n
 */


var generateMatrix = function(n) {
    // 新建一个二维数组
    let result = Array.from({length: n}).map(() => new Array(n));

    let count =  1, loop = 0, loopNum = n >> 1, mid = n >> 1;

    while( loop < loopNum ){ // 从最外圈开始遍历， 因为，x、y方向上下都会走一次， 所以总共需要遍历的次数为n/2的值

        let range = n-loop -1; // 设置每次每个方向需要计数的范围， n-1， n-2, n-3
        // x轴正方向
        for(let i = loop; i < range; i ++){
            result[loop][i] =count ++;
        }

        // y轴负方向
        for(let i = loop; i < range; i ++){
            result[i][range] = count ++;
        }

        // x轴负方向
        for(let i = range; i > loop; i --){
            result[range][i]= count ++;
        }


        // y轴正方向
        for( let i =range; i > loop; i --){
            result[i][loop]= count ++;
        }

        loop ++;
    }
    // n为奇数是最中间的元素需要单独赋值
    if(n % 2 !== 0){
        result[mid][mid] = n*n
    }
    return result
 
};


let n = 6;
let result = generateMatrix(n);
console.log(result)