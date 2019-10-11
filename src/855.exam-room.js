/*
 * [885] Exam Room
 *
 * https://leetcode.com/problems/exam-room/description/
 *
 * algorithms
 * Medium (33.23%)
 * Total Accepted:    6.2K
 * Total Submissions: 18.7K
 * Testcase Example:  '["ExamRoom","seat","seat","seat","seat","leave","seat"]\n[[10],[],[],[],[],[4],[]]'
 *
 * In an exam room, there are N seats in a single row, numbered 0, 1, 2, ...,
 * N-1.
 * 
 * When a student enters the room, they must sit in the seat that maximizes the
 * distance to the closest person.  If there are multiple such seats, they sit
 * in the seat with the lowest number.  (Also, if no one is in the room, then
 * the student sits at seat number 0.)
 * 
 * Return a class ExamRoom(int N) that exposes two functions: ExamRoom.seat()
 * returning an int representing what seat the student sat in, and
 * ExamRoom.leave(int p) representing that the student in seat number p now
 * leaves the room.  It is guaranteed that any calls to ExamRoom.leave(p) have
 * a student sitting in seat p.
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: ["ExamRoom","seat","seat","seat","seat","leave","seat"],
 * [[10],[],[],[],[],[4],[]]
 * Output: [null,0,9,4,2,null,5]
 * Explanation:
 * ExamRoom(10) -> null
 * seat() -> 0, no one is in the room, then the student sits at seat number 0.
 * seat() -> 9, the student sits at the last seat number 9.
 * seat() -> 4, the student sits at the last seat number 4.
 * seat() -> 2, the student sits at the last seat number 2.
 * leave(4) -> null
 * seat() -> 5, the student sits at the last seat number 5.
 * 
 * 
 * ​​​​​​​
 * 
 * Note:
 * 
 * 
 * 1 <= N <= 10^9
 * ExamRoom.seat() and ExamRoom.leave() will be called at most 10^4 times
 * across all test cases.
 * Calls to ExamRoom.leave(p) are guaranteed to have a student currently
 * sitting in seat number p.
 * 
 * 
 */
class ExamRoom {
  /**
   * @param {number} N
   */
  constructor(N) {
    this.seats = [];
    this.n = N - 1;
  }

  /**
   * @return {number}
   */
  seat() {
    if (this.seats.length == 0) {
      this.seats = [0];
       
      return 0;
    }

    let mx = 0, ind = 0, n = this.seats.length;
    
    for (let i = 1; i < n; i++) {
      const l = this.seats[i - 1], r = this.seats[i];
      const d = Math.floor((r - l) / 2);
      
      if (d > mx) {
        mx = d;
        ind = l + d;
      }
    }

    if (this.seats[n - 1] !== this.n && this.n - this.seats[n - 1] > mx) {
      mx = this.n - this.seats[n - 1], ind = this.n;
    }

    if (this.seats[0] >= mx) {
      mx = this.seats[0], ind = 0;
    }
    
    this.seats.push(ind);
    this.seats.sort((a, b) => a - b);

    return ind;
  }

  /** 
   * @param {number} p
   * @return {void}
   */
  leave(p) {
    this.seats.splice(this.seats.indexOf(p), 1);
  }
}

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = Object.create(ExamRoom).createNew(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
