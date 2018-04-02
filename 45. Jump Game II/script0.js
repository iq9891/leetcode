// 给定一个非负整数数组，你最初位于数组的首位。
// 数组中的每个元素表示你在该位置的最大跳跃长度。
// 你的目标是用最小跳跃次数到达最后一个索引。
// 例如:
// 给定一个数组 A = [2,3,1,1,4]
// 跳到最后一个索引的最小跳跃数是 2。(从索引 0 跳到 1 跳1步，然后跳3步到最后一个索引。)
// 注意:
// 假设你总是可以到达最后一个索引位置。

// var arr = [0];
// var arr = [1];
// var arr = [1,2]; // 4情况 1
// var arr = [2,2]; // 4情况 1
// var arr = [1,2,3]; // 4情况 2
// var arr = [3,2,1]; // 4情况 1
// var arr = [3,1,2]; // 4情况 1
// var arr = [3,4,2]; // 4情况 1
// var arr = [1,3,2,3]; // 4情况 2
// var arr = [1,1,1,1]; // 2情况 3
// var arr = [2,2,2,2]; // 1情况 2
// var arr = [3,3,3,3]; // 4情况 1
// var arr = [4,4,4,4]; // 4情况 1
// var arr = [5,5,5,5]; // 4情况 1
// var arr = [1,2,0,1]; // 4情况 2
// var arr = [2,3,0,1,4]; // 3情况 2
// var arr = [1,2,3,4]; // 2情况 2
var arr = [2,3,1,1,4];
// 上一步与最大路径中间的数组内容的最大值即为下一个下标

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  var target = nums.length - 1;
  var cur = 0;

  while(target > 0) {
    for (var i = 0; i < target; i++) {
      if(i + nums[i] >= target) {
        target = i;
        cur++;
        break;
      }
    }
  }

  return cur;
};

// 404ms
console.log(jump(arr));
