/*
 * [68] Text Justification
 *
 * https://leetcode.com/problems/text-justification/description/
 *
 * algorithms
 * Hard (21.46%)
 * Total Accepted:    81.9K
 * Total Submissions: 381.4K
 * Testcase Example:  '["This", "is", "an", "example", "of", "text", "justification."]\n16'
 *
 * Given an array of words and a width maxWidth, format the text such that each
 * line has exactly maxWidth characters and is fully (left and right)
 * justified.
 * 
 * You should pack your words in a greedy approach; that is, pack as many words
 * as you can in each line. Pad extra spaces ' ' when necessary so that each
 * line has exactly maxWidth characters.
 * 
 * Extra spaces between words should be distributed as evenly as possible. If
 * the number of spaces on a line do not divide evenly between words, the empty
 * slots on the left will be assigned more spaces than the slots on the right.
 * 
 * For the last line of text, it should be left justified and no extra space is
 * inserted between words.
 * 
 * Note:
 * 
 * 
 * A word is defined as a character sequence consisting of non-space characters
 * only.
 * Each word's length is guaranteed to be greater than 0 and not exceed
 * maxWidth.
 * The input array words contains at least one word.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input:
 * words = ["This", "is", "an", "example", "of", "text", "justification."]
 * maxWidth = 16
 * Output:
 * [
 * "This    is    an",
 * "example  of text",
 * "justification.  "
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * words = ["What","must","be","acknowledgment","shall","be"]
 * maxWidth = 16
 * Output:
 * [
 * "What   must   be",
 * "acknowledgment  ",
 * "shall be        "
 * ]
 * Explanation: Note that the last line is "shall be    " instead of "shall
 * be",
 * because the last line must be left-justified instead of fully-justified.
 * ⁠            Note that the second line is also left-justified becase it
 * contains only one word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * words =
 * ["Science","is","what","we","understand","well","enough","to","explain",
 * "to","a","computer.","Art","is","everything","else","we","do"]
 * maxWidth = 20
 * Output:
 * [
 * "Science  is  what we",
 * ⁠ "understand      well",
 * "enough to explain to",
 * "a  computer.  Art is",
 * "everything  else  we",
 * "do                  "
 * ]
 * 
 * 
 */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  const res = [];
  let row = [];
  let cnt = 0;

  for (let word of words) {
    if (cnt + word.length + row.length > maxWidth) {
      write(maxWidth, res, row);
      row = [];
      cnt = 0;
    }

    cnt += word.length;
    row.push(word);
  }

  return write(maxWidth, res, row, {last: true});
};

function write(maxWidth, res, row, {last} = {last: false}) {
  if (row.length === 1 || last) {
    res.push(row.join(' ').padEnd(maxWidth));

    return res;
  }

  const rowStr = row.join(' '); 
  let len = rowStr.length;

  row = rowStr.split(/(\s)/);

  for (let i = 1; len < maxWidth; i = (i + 2) % (row.length - 1), len++) {
    row[i] += ' ';
  }

  row.length && res.push(row.join(''));

  return res;
}