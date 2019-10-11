/*
 * [399] Evaluate Division
 *
 * https://leetcode.com/problems/evaluate-division/description/
 *
 * algorithms
 * Medium (43.93%)
 * Total Accepted:    48.2K
 * Total Submissions: 109.8K
 * Testcase Example:  '[ ["a","b"],["b","c"] ]\n[2.0,3.0]\n[ ["a","c"],["b","c"],["a","e"],["a","a"],["x","x"] ]'
 *
 * 
 * Equations are given in the format A / B = k, where  A and B are variables
 * represented as strings, and k is a real number (floating point number).
 * Given some queries, return the answers. If the answer does not exist, return
 * -1.0.
 * 
 * Example:
 * Given  a / b = 2.0, b / c = 3.0. queries are:  a / c = ?,  b / a = ?, a / e
 * = ?,  a / a = ?, x / x = ? . return  [6.0, 0.5, -1.0, 1.0, -1.0 ].
 * 
 * 
 * The input is:  vector<pair<string, string>> equations, vector<double>&
 * values, vector<pair<string, string>> queries , where equations.size() ==
 * values.size(), and the values are positive. This represents the equations.
 * Return  vector<double>.
 * 
 * 
 * According to the example above:
 * equations = [ ["a", "b"], ["b", "c"] ],
 * values = [2.0, 3.0],
 * queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]
 * ]. 
 * 
 * 
 * 
 * The input is always valid. You may assume that evaluating the queries will
 * result in no division by zero and there is no contradiction.
 * 
 */
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
  const visited = new Set();
  const res = [...queries].fill(-1);
  
  for (let [a, b] of equations) {
    if (visited.has(a)) {
      continue;
    }

    const map = new Map([[a, 1]]);
    const queue = [a];
  
    visited.add(a);

    while (queue.length) {
      const cur = queue.shift();

      for (let i = 0; i < equations.length; i++) {
        const [x, y] = equations[i];

        if (x === cur && !map.has(y)) {
          visited.add(y);
          map.set(y, map.get(x) / values[i]);
          queue.push(y);
        } else if (y === cur && !map.has(x)) {
          visited.add(x);
          map.set(x, map.get(y) * values[i]);
          queue.push(x);
        }
      }
    }

    for (let i = 0; i < queries.length; i++) {
      const [a, b] = queries[i];

      if (!map.has(a) || !map.has(b)) {
        continue;
      }

      res[i] = map.get(a) / map.get(b);
    }
  }

  return res;
};