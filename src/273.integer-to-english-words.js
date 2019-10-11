/*
 * [273] Integer to English Words
 *
 * https://leetcode.com/problems/integer-to-english-words/description/
 *
 * algorithms
 * Hard (23.32%)
 * Total Accepted:    80.4K
 * Total Submissions: 344.7K
 * Testcase Example:  '123'
 *
 * Convert a non-negative integer to its english words representation. Given
 * input is guaranteed to be less than 231 - 1.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: "One Hundred Twenty Three"
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: 12345
 * Output: "Twelve Thousand Three Hundred Forty Five"
 * 
 * Example 3:
 * 
 * 
 * Input: 1234567
 * Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty
 * Seven"
 * 
 * 
 * Example 4:
 * 
 * 
 * Input: 1234567891
 * Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty
 * Seven Thousand Eight Hundred Ninety One"
 * 
 * 
 */
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) {
    return 'Zero';
  }

  return num
    .toLocaleString()
    .split(',')
    .map(translate)
    .reverse()
    .map(addPostfix)
    .filter(el => el)
    .reverse()
    .join(' ');
};

function translate(group) {
  if (+group === 0) {
    return '';
  }

  const lessThan20 = [
    '', 
    'One', 
    'Two', 
    'Three', 
    'Four', 
    'Five', 
    'Six', 
    'Seven', 
    'Eight', 
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ];
  const tens = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
  const res = [];

  group = group.padStart(3, 0);

  if (+group[0] > 0) {
    res.push(`${lessThan20[group[0]]} Hundred`);
  }

  if (+group[1] > 1) {
    res.push(tens[group[1]]);
    +group[2] > 0 && res.push(lessThan20[group[2]]);
  } else {
    const last2Digits = group.slice(1); 

    +last2Digits > 0 && res.push(lessThan20[+last2Digits]);
  }

  return res.join(' ');
}

function addPostfix(group, i) {
  const suffixes = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];
  const suffix = suffixes[i];
  
  if (!group || !suffix) {
    return group;
  } 

  return `${group} ${suffix}`;
}