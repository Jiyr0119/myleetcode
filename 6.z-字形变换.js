/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var len=s.length;
   var twoRows=2*numRows-2;
   var str="";
   if(len==0||numRows<=1)
   return s;
   for(i=0;i<numRows;i++){
       for(j=i;j<len;j+=twoRows){
           str=str.concat(s.charAt(j));

           if(i!=0&&i!=numRows-1&&j-2*i+twoRows<len){
               str=str.concat(s.charAt(j-2*i+twoRows))     
        }
       }
   }
   return str

};

