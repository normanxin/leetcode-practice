/*
 * @lc app=leetcode id=293 lang=javascript
 *
 * [293] Flip Game
 *
 * https://leetcode.com/problems/flip-game/description/
 *
 * algorithms
 * Easy (58.72%)
 * Total Accepted:    40.5K
 * Total Submissions: 68.9K
 * Testcase Example:  '"++++"'
 *
 * You are playing the following Flip Game with your friend: Given a string
 * that contains only these two characters: + and -, you and your friend take
 * turns to flip two consecutive "++" into "--". The game ends when a person
 * can no longer make a move and therefore the other person will be the
 * winner.
 * 
 * Write a function to compute all possible states of the string after one
 * valid move.
 * 
 * Example:
 * 
 * 
 * Input: s = "++++"
 * Output: 
 * [
 * ⁠ "--++",
 * ⁠ "+--+",
 * ⁠ "++--"
 * ]
 * 
 * 
 * Note: If there is no valid move, return an empty list [].
 * 
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var generatePossibleNextMoves = function(s) {
  const res = [];

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === '-' || s[i + 1] === '-') {
      continue;
    }

    const sArr = [...s];
    
    sArr[i] = sArr[i + 1] = '-';
    res.push(sArr.join(''));
  }

  return res;
};