/**
 * 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点 
 */

var removeElements = function(head, val) {

    function ListNode(val, next) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }

    let result = new ListNode(0, head); // 新建一个链表， 值为0， 下一节点指向原链表的head节点（虚拟头节点）
    let current = result;   // 获取新链表的头节点
    while(current.next){    // 遍历链表
        if(current.next.val === val){ // 当下个节点的值为要删除的节点时， 将下个节点的指针指向下个节点指针指向的节点
            console.log(current.val)
            current.next = current.next.next;
            continue    //跳出本次循环
        }
        current = current.next
    }
    return result.next

};

