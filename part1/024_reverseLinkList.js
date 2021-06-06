/**
 * 给定一个链表，两两交换其中相邻的节点，并返回交换后的链表。你不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。
 */

var swapPairs = function(head) {

    function ListNode(val, next){
        this.val = val;
        this.next = next;
    }

    let result =  new ListNode(0, head), temp = result;

    while(temp.next&&temp.next.next){ // 确认头结点后有可交换的两个元素
        let cur = temp.next.next;   // 设置后一个位置的元素为当前结点cur
        let pre = temp.next;        // 设置前一个位置的元素为较早结点pre
        pre.next= cur.next;         // 将pre的下一个结点指向第三个结点
        cur.next = pre;             // 设置靠后元素的下一个结点指向前一个元素
        temp.next= cur;             // 设置头结点的下一个结点为靠后元素
        temp = pre;                 // 进入下一轮循环判断
    }

    return result.next
    
};