/**
给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null。

为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。注意，pos 仅仅是用于标识环的情况，并不会作为参数传递到函数中。

    题解：首先判断是否有环：可以使用快慢指针法，分别定义 fast 和 slow指针，从头结点出发，fast指针每次移动两个节点，slow指针每次移动一个节点，如果 fast 和 slow指针在途中相遇 ，说明这个链表有环。
    然后找到环的入口：假设从头结点到环形入口节点 的节点数为x。 环形入口节点到 fast指针与slow指针相遇节点 节点数为y。 从相遇节点 再到环形入口节点节点数为 z。 
    slow指针走过的节点数为: x + y， fast指针走过的节点数： x + y + n (y + z)，n为fast指针在环内走了n圈才遇到slow指针， （y+z）为 一圈内节点的个数A。
    因为fast指针是一步走两个节点，slow指针一步走一个节点， 所以 fast指针走过的节点数 = slow指针走过的节点数 * 2：
    整理公式之后为如下公式：x = (n - 1) (y + z) + z 注意这里n一定是大于等于1的，因为 fast指针至少要多走一圈才能相遇slow指针
    从头结点出发一个指针，从相遇节点 也出发一个指针，这两个指针每次只走一个节点， 那么当这两个指针相遇的时候就是 环形入口的节点。
*/

var detectCycle = function(head) {
    if(!head || !head.next) return null;
    let slow =head.next, fast = head.next.next;
    // 如果快指针没有走完， 且快慢指针未相遇，快指针走两步， 慢指针走一步
    while(fast && fast.next && fast!== slow) {
        slow = slow.next; 
        fast = fast.next.next; 
    }
    if(!fast || !fast.next ) return null; // 若遍历完成仍未找到返回null， 没有环
    // 找到了环，此时将slow结点重新指向头部， 慢指针从头部开始遍历， 快指针从相遇点开始遍历， 两者再次相遇点即为环形入口
    slow = head;
    while (fast !== slow) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};
