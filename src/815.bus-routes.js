/*
 * [833] Bus Routes
 *
 * https://leetcode.com/problems/bus-routes/description/
 *
 * algorithms
 * Hard (36.02%)
 * Total Accepted:    10.6K
 * Total Submissions: 29.5K
 * Testcase Example:  '[[1,2,7],[3,6,7]]\n1\n6'
 *
 * We have a list of bus routes. Each routes[i] is a bus route that the i-th
 * bus repeats forever. For example if routes[0] = [1, 5, 7], this means that
 * the first bus (0-th indexed) travels in the sequence
 * 1->5->7->1->5->7->1->... forever.
 * 
 * We start at bus stop S (initially not on a bus), and we want to go to bus
 * stop T. Travelling by buses only, what is the least number of buses we must
 * take to reach our destination? Return -1 if it is not possible.
 * 
 * 
 * Example:
 * Input: 
 * routes = [[1, 2, 7], [3, 6, 7]]
 * S = 1
 * T = 6
 * Output: 2
 * Explanation: 
 * The best strategy is take the first bus to the bus stop 7, then take the
 * second bus to the bus stop 6.
 * 
 * 
 * Note: 
 * 
 * 
 * 1 <= routes.length <= 500.
 * 1 <= routes[i].length <= 500.
 * 0 <= routes[i][j] < 10 ^ 6.
 * 
 * 
 */
/**
 * @param {number[][]} routes
 * @param {number} S
 * @param {number} T
 * @return {number}
 */
var numBusesToDestination = function(routes, S, T) {
  const map = new Map();

  for (let i = 0; i < routes.length; i++) {
    for (let stop of routes[i]) {
      !map.has(stop) && map.set(stop, new Set());
      map.get(stop).add(i);
    }
  }

  const queue = [[S, 0]];
  const visited = new Set([S]);

  while (queue.length) {
    const [stop, busNum] = queue.shift();

    if (stop === T) {
      return busNum;
    }

    for (let ri of map.get(stop)) {
      for (let nextStop of routes[ri]) {
        if (visited.has(nextStop)) {
          continue;
        }

        visited.add(nextStop);
        queue.push([nextStop, busNum + 1]);
      }

      routes[ri] = [];
    }
  }

  return -1;
};
