/*
 * @lc app=leetcode id=252 lang=javascript
 *
 * [252] Meeting Rooms
 *
 * https://leetcode.com/problems/meeting-rooms/description/
 *
 * algorithms
 * Easy (52.38%)
 * Total Accepted:    89K
 * Total Submissions: 170K
 * Testcase Example:  '[[0,30],[5,10],[15,20]]'
 *
 * Given an array of meeting time intervals consisting of start and end times
 * [[s1,e1],[s2,e2],...] (si < ei), determine if a person could attend all
 * meetings.
 * 
 * Example 1:
 * 
 * 
 * Input: [[0,30],[5,10],[15,20]]
 * Output: false
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[7,10],[2,4]]
 * Output: true
 * 
 * 
 * NOTE: input types have been changed on April 15, 2019. Please reset to
 * default code definition to get new method signature.
 * 
 */
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
const canAttendMeetings = intervals => {
  intervals.sort(([fromA, toA], [fromB, toB]) => fromA - fromB || toA - toB);

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
};
