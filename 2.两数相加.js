/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var tmp=0;
    var list=0;
    var data=new ListNode(0);
    var poin=data;
    while(l1 || l2 || tmp){ 
        list++;
        var val1=l1?(l1.val!==null?l1.val:0):0;
        var val2=l2?(l2.val!==null?l2.val:0):0;
        var sum=val1+val2+tmp;
        tmp=sum>=10?1:0;
        
        var info=new ListNode(sum%10);
        poin.next=info;
        poin=poin.next;
        
        l1=l1?(l1.next!==null?l1.next:null):null;
        l2=l2?(l2.next!==null?l2.next:null):null;
        
    }
    return data.next;
};
