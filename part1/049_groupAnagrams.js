var groupAnagrams = function(strs) {

    let map = new Map();

    for (const str of strs) {
        let strArray = Array.from(str); // 将字符串转化为数组
        strArray.sort(); // 将字符串数组排序， 方便后续比较
        let strKey = strArray.toString(); // 以排序后的字符串作为key， key值相等则为字母异位
        let list = map.get(strKey)? map.get(strKey): new Array; // 如果map已有该key， 存入对应的value数组， 否则新建数组
        list.push(str);
        map.set(strKey, list)
    }
    return Array.from(map.values());
};

let strs =["eat", "tea", "tan", "ate", "nat", "bat"];
let result = groupAnagrams(strs);
console.log(result)