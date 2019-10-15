/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // let arr = s.split('');
  // var items = new Set(arr);
  // var array = Array.from(items);
  // return array.length;
  let ans = 0;
  let line = [];
  s.split('').forEach((item, index) => {
    if (line.indexOf(item) !== -1) {
      line.splice(line.indexOf(item), line.length);
    }
    line.unshift(item);
    ans = Math.max(ans, line.length);
  });
  return ans;
};
