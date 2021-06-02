// 法一：
const duplicate1 =function(arr){
    let res=new Map();
    arr.forEach(item=>{
        item.sort((a,b)=>a-b);
        res.set(item.join(),item);
    });
    return Array.from(res.values);
}
// 法二：
const duplicate2 = function(){
    let res={}
    arr.forEach(item=>{
        item.sort((a,b)=>a-b);
        res[item]=item;
    });
    console.log(Object.values(res))
    return Object.values(res)
}
const arr=[
    [1,2,3,4,5,6,7,8,9],
    [1,2,3,4,5,6,7,8,9],
    [2,3,4,5],
    [6,6,6,6]
]
console.time('duplicate1')
let fff = duplicate1(arr)
console.log(fff)
console.timeEnd('duplicate1')

console.time('duplicate2')
duplicate2(arr)
console.timeEnd('duplicate2')