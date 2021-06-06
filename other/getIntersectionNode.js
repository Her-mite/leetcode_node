/**
给定两个（单向）链表，判定它们是否相交并返回交点。请注意相交的定义基于节点的引用，而不是基于节点的值。换句话说，如果一个链表的第k个节点与另一个链表的第j个节点是同一节点（引用完全相同），则这两个链表相交。
    题解：因为链表能指定后续的结点， 所以如果相交， 则后续结点一定全都公用， 因此只需要将较短列表的尾部和长链表对齐， 让长链表的指针直到短链表末尾能长链表对齐的位置
    此时开始比较各个结点是否相等即可
 */


// 计算链表长度
var getListLen = function(head) {
    let len = 0, cur = head;
    while(cur) {
       len++;
       cur = cur.next;
    }
    return len;
} 
var getIntersectionNode = function(headA, headB) {
    let curA = headA,curB = headB, 
        lenA = getListLen(headA),
        lenB = getListLen(headB);
    // 将较长的链表设置为A表
    if(lenA < lenB) {
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }
    let i = lenA - lenB;
    // 让curA移动到，和curB 末尾对齐的位置
    while(i-- > 0) {
        curA = curA.next
    }

    // 开始比较结点是否一致
    while(curA && curA !== curB) {
        curA = curA.next;
        curB = curB.next;
    }
    return curA;
};