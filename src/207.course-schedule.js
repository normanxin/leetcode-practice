/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 *
 * https://leetcode.com/problems/course-schedule/description/
 *
 * algorithms
 * Medium (36.54%)
 * Total Accepted:    185.9K
 * Total Submissions: 508.7K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * There are a total of n courses you have to take, labeled from 0 to n-1.
 * 
 * Some courses may have prerequisites, for example to take course 0 you have
 * to first take course 1, which is expressed as a pair: [0,1]
 * 
 * Given the total number of courses and a list of prerequisite pairs, is it
 * possible for you to finish all courses?
 * 
 * Example 1:
 * 
 * 
 * Input: 2, [[1,0]] 
 * Output: true
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0. So it is possible.
 * 
 * Example 2:
 * 
 * 
 * Input: 2, [[1,0],[0,1]]
 * Output: false
 * Explanation: There are a total of 2 courses to take. 
 * To take course 1 you should have finished course 0, and to take course 0 you
 * should
 * also have finished course 1. So it is impossible.
 * 
 * 
 * Note:
 * 
 * 
 * The input prerequisites is a graph represented by a list of edges, not
 * adjacency matrices. Read more about how a graph is represented.
 * You may assume that there are no duplicate edges in the input
 * prerequisites.
 * 
 * 
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  const map = prerequisites.reduce((map, [cur, pre]) => {
    !map.has(cur) && map.set(cur, 0);
    map.set(cur, map.get(cur) + 1);

    return map;
  }, new Map());
  const queue = [];
  let cnt = 0;

  for (let i = 0; i < numCourses; i++) {
    !map.has(i) && queue.push(i);
  }

  while (queue.length) {
    const cur = queue.shift();

    cnt++;

    for (let [c, p] of prerequisites) {
      if (p !== cur) {
        continue;
      }

      map.set(c, map.get(c) - 1);
      !map.get(c) && queue.push(c);
    }
  }

  return cnt === numCourses; 
};
