/**
 * 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
进阶：你能尝试使用一趟扫描实现吗？
 */

var removeNthFromEnd = function(head, n) {
    function ListNode(val, next){
        this.val =  val;
        this.next = next;
    }

    let ret = new ListNode(0, head), slow = fast = ret;
    while(n -- ){ // 让快指针先走n步
        fast = fast.next;
    }
    if(!fast) return ret.next; // 如果发现fast指针为null， 说明n> 链表长度， 直接反馈
    while(fast.next){   // 当快指针还有元素时继续向后遍历
        fast= fast.next;
        slow = slow.next;
    }
    // 当fast走到最后时， 删除此时慢指针指向的后一结点
    slow.next = slow.next.next;
    return ret.next;
};