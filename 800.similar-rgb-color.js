/*
 * @lc app=leetcode id=800 lang=javascript
 *
 * [800] Similar RGB Color
 *
 * https://leetcode.com/problems/similar-rgb-color/description/
 *
 * algorithms
 * Easy (59.41%)
 * Total Accepted:    7.7K
 * Total Submissions: 13K
 * Testcase Example:  '"#09f166"'
 *
 * In the following, every capital letter represents some hexadecimal digit
 * from 0 to f.
 * 
 * The red-green-blue color "#AABBCC" can be written as "#ABC" in shorthand.
 * For example, "#15c" is shorthand for the color "#1155cc".
 * 
 * Now, say the similarity between two colors "#ABCDEF" and "#UVWXYZ" is -(AB -
 * UV)^2 - (CD - WX)^2 - (EF - YZ)^2.
 * 
 * Given the color "#ABCDEF", return a 7 character color that is most similar
 * to #ABCDEF, and has a shorthand (that is, it can be represented as some
 * "#XYZ"
 * 
 * 
 * Example 1:
 * Input: color = "#09f166"
 * Output: "#11ee66"
 * Explanation:  
 * The similarity is -(0x09 - 0x11)^2 -(0xf1 - 0xee)^2 - (0x66 - 0x66)^2 = -64
 * -9 -0 = -73.
 * This is the highest among any shorthand color.
 * 
 * 
 * Note:
 * 
 * 
 * color is a string of length 7.
 * color is a valid RGB color: for i > 0, color[i] is a hexadecimal digit from
 * 0 to f
 * Any answer which has the same (highest) similarity as the best answer will
 * be accepted.
 * All inputs and outputs should use lowercase letters, and the output is 7
 * characters.
 * 
 * 
 */
/**
 * @param {string} color
 * @return {string}
 */
var similarRGB = function(color) {
  let res = '#';

  for (let i = 1; color[i]; i += 2) {
    const n = parseInt(color.substr(i, 2), 16);
    const candidate = Math.floor(n / 17) + (n % 17 > 8 ? 1 : 0);
    const ch = candidate < 10 
        ? candidate.toString() 
        : String.fromCharCode('a'.charCodeAt() + candidate - 10);

    res += `${ch}${ch}`;
  } 

  return res;
};