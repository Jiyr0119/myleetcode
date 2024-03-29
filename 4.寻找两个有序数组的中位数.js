/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个有序数组的中位数
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  let arr = nums1.concat(nums2); // 数组拼接
  arr = arr.sort((a, b) => {
    return a - b;
  }); // 数组排序
  const len = arr.length;
  const index = parseInt(len / 2); // 计算中间位置 index （如果是 偶数长度，则 index 并非中间）
  if (len % 2 !== 0) {
    return arr[index].toFixed(1); // 如果是非偶数，直接返回中间即可（注意输出是 1.0）
  } else {
    return ((arr[index - 1] + arr[index]) / 2).toFixed(1); // 偶数需要计算求平均值同时保留1位小数点
  }
};
