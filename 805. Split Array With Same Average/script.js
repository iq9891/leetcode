// 给定的整数数组 A ，我们要将 A数组 中的每个元素移动到 B数组 或者 C数组中。（B数组和C数组在开始的时候都为空）
//
// 返回true ，当且仅当在我们的完成这样的移动后，可使得B数组的平均值和C数组的平均值相等，并且B数组和C数组都不为空。
//
// 示例:
// 输入:
// [1,2,3,4,5,6,7,8]
// 输出: true
// https://leetcode.com/problems/split-array-with-same-average/
// 解释: 我们可以将数组分割为 [1,4,5,8] 和 [2,3,6,7], 他们的平均值都是4.5。
//
// 注意:
//
// A 数组的长度范围为 [1, 30].
// A[i] 的数据范围为 [0, 10000].

/**
 * @param {number[]} nums
 * @return {number}
 */
 /**
  * @param {number[]} A
  * @return {boolean}
  */
var splitArraySameAverage = function(A) {
  const newArr = A.sort((a, b) => a > b ? 1 : -1);
  const sum = newArr.reduce((num, total) => num + total, 0);
  const size = newArr.length;
  const dfs = (newArr, index, start, now) => {
    if(index > size / 2) return false;
    let cur = now;
    for (var i = start; i < size; ++i) {
      cur += newArr[i];
      if(cur * (size - index) === (sum - cur) * index) return true;
      if(cur * (size - index) > (sum - cur) * index) break;
      if(dfs(newArr, index + 1, i + 1, cur)) return true;
      cur -= newArr[i];
    }
    return false;
  };
  return dfs(A, 1, 0, 0);
};

// https://zxi.mytechroad.com/blog/searching/leetcode-805-split-array-with-same-average/
// 62ms

console.log(splitArraySameAverage([33,86,88,78,21,76,19,20,88,76,10,25,37,97,58,89,65,59,98,57,50,30,58,5,61,72,23,6]));
// console.log(splitArraySameAverage([5,3,11,19,2]));
// console.log(splitArraySameAverage([17,5,5,1,14,10,13,1,6]));
