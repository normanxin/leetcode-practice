/*
 * [157] Read N Characters Given Read4
 *
 * https://leetcode.com/problems/read-n-characters-given-read4/description/
 *
 * algorithms
 * Easy (27.86%)
 * Total Accepted:    63.8K
 * Total Submissions: 229K
 * Testcase Example:  '""\n0'
 *
 * The API: int read4(char *buf) reads 4 characters at a time from a file.
 * 
 * The return value is the actual number of characters read. For example, it
 * returns 3 if there is only 3 characters left in the file.
 * 
 * By using the read4 API, implement the function int read(char *buf, int n)
 * that reads n characters from the file.
 * 
 * Example 1:
 * 
 * 
 * Input: buf = "abc", n = 4
 * Output: "abc"
 * Explanation: The actual number of characters read is 3, which is "abc".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: buf = "abcde", n = 5 
 * Output: "abcde"
 * 
 * 
 * Note:
 * The read function will only be called once for each test case.
 * 
 */
/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
	/**
	 * @param {character[]} buf Destination buffer
	 * @param {number} n Maximum number of characters to read
	 * @return {number} The number of characters read
	 */
	return function(buf, n) {
		while (buf.length < n) {
			const delta = [];
			const read = read4(delta);

			buf.push(...delta);

			if (read < 4) {
				break;
			}
		}

		return buf.length = Math.min(buf.length, n);
	};
};
