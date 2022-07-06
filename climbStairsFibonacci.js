/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

const climbStairs = function (n) {
  let a = 1;
  let b = 2;
  let next;

  // each loop adds number of options/routes/ways to b
  for (let i = 3; i <= n; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return n === 1 ? a : b;
};
