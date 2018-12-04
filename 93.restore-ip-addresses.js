/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 *
 * https://leetcode.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (29.93%)
 * Total Accepted:    121.4K
 * Total Submissions: 405.6K
 * Testcase Example:  '"25525511135"'
 *
 * Given a string containing only digits, restore it by returning all possible
 * valid IP address combinations.
 * 
 * Example:
 * 
 * 
 * Input: "25525511135"
 * Output: ["255.255.11.135", "255.255.111.35"]
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s, res = [], path = [], idx = 0) {
  if (s.length < 4 || path.length > 4 || idx > s.length) {
    return res;
  }

  if (idx === s.length) {
    path.length === 4 && res.push(path.join('.'));

    return res;
  }

  for (let len = 1; len <= 3; len++) {
    const part = s.substr(idx, len);

    if (part > 255 || (part[0] === '0' && part.length > 1)) {
      break;
    }

    path.push(part);
    restoreIpAddresses(s, res, path, idx + len);
    path.pop();
  }

  return res;
};
