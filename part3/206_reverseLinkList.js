/**
 * 反转一个单链表
 */

var reverseList = function(head) {
    if(!head || !head.next) return head; // 如果链表为空或仅有一个元素无需翻转， 直接返回
    let temp = null, pre = null, current = head;
    while(current){ // 开始遍历链表
        temp =current.next; // 保存当前结点所指向的下一结点位置
        current.next = pre; // 将当前结点current的指向的下一结点currrent.next修改为遍历的前一结点pre， 若当前为头结点， 则下一结点指向null
        pre = current;      // 将本结点记录到pre, 以供后续循环时使用的前一结点
        current = temp;     // 将遍历结点修改为开始时保存的下一结点，继续遍历，直到遍历完成所有元素
    }
    return pre;             // 所有元素遍历完成时， pre也就是当前最新的current，是最新的头结点
   
};