/*
 * [353] Design Snake Game
 *
 * https://leetcode.com/problems/design-snake-game/description/
 *
 * algorithms
 * Medium (28.96%)
 * Total Accepted:    16.5K
 * Total Submissions: 57K
 * Testcase Example:  '["SnakeGame","move","move","move","move","move","move"]\n[[3,2,[[1,2],[0,1]]],["R"],["D"],["R"],["U"],["L"],["U"]]'
 *
 * Design a Snake game that is played on a device with screen size = width x
 * height. Play the game online if you are not familiar with the game.
 * 
 * The snake is initially positioned at the top left corner (0,0) with length =
 * 1 unit.
 * 
 * You are given a list of food's positions in row-column order. When a snake
 * eats the food, its length and the game's score both increase by 1.
 * 
 * Each food appears one by one on the screen. For example, the second food
 * will not appear until the first food was eaten by the snake.
 * 
 * When a food does appear on the screen, it is guaranteed that it will not
 * appear on a block occupied by the snake.
 * 
 * Example:
 * 
 * 
 * Given width = 3, height = 2, and food = [[1,2],[0,1]].
 * 
 * Snake snake = new Snake(width, height, food);
 * 
 * Initially the snake appears at position (0,0) and the food at (1,2).
 * 
 * |S| | |
 * | | |F|
 * 
 * snake.move("R"); -> Returns 0
 * 
 * | |S| |
 * | | |F|
 * 
 * snake.move("D"); -> Returns 0
 * 
 * | | | |
 * | |S|F|
 * 
 * snake.move("R"); -> Returns 1 (Snake eats the first food and right after
 * that, the second food appears at (0,1) )
 * 
 * | |F| |
 * | |S|S|
 * 
 * snake.move("U"); -> Returns 1
 * 
 * | |F|S|
 * | | |S|
 * 
 * snake.move("L"); -> Returns 2 (Snake eats the second food)
 * 
 * | |S|S|
 * | | |S|
 * 
 * snake.move("U"); -> Returns -1 (Game over because snake collides with
 * border)
 * 
 */
class SnakeGame {
  /**
   * Initialize your data structure here.
        @param width - screen width
        @param height - screen height 
        @param food - A list of food positions
        E.g food = [[1,1], [1,0]] means the first food is positioned at [1,1], the second is at [1,0].
   * @param {number} width
   * @param {number} height
   * @param {number[][]} food
   */
  constructor(width, height, food) {
    this.width = width;
    this.height = height;
    this.food = food;
    this.snake = [[0, 0]];
    this.curFood = this.food.shift();
    this.ateFood = 0;
  }

  /**
   * Moves the snake.
        @param direction - 'U' = Up, 'L' = Left, 'R' = Right, 'D' = Down 
        @return The game's score after the move. Return -1 if game over. 
        Game over when snake crosses the screen boundary or bites its body. 
   * @param {string} direction
   * @return {number}
   */
  move(direction) {
    const dir = new Map()
      .set('U', [-1, 0])
      .set('L', [0, -1])
      .set('R', [0, 1])
      .set('D', [1, 0]);
    const [dx, dy] = dir.get(direction);
    const [x, y] = this.snake[0];
    const [nx, ny] = [x + dx, y + dy];
    const [fx, fy] = this.curFood || [-1, -1];

    if (nx === fx && ny === fy) {
      this.curFood = this.food.shift();
      this.ateFood++;
    } else {
      this.snake.pop();
    } 

    if (nx < 0 || nx >= this.height
      || ny < 0 || ny >= this.width
      || this.snake.find(([x, y]) => x === nx && y === ny)) {
      return -1;
    }

    this.snake.unshift([nx, ny]);

    return this.ateFood;
  }
}

/** 
 * Your SnakeGame object will be instantiated and called as such:
 * var obj = Object.create(SnakeGame).createNew(width, height, food)
 * var param_1 = obj.move(direction)
 */