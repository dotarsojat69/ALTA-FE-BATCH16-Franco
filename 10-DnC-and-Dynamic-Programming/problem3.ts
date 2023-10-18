function frog(jumps: number[]): number {
  // your code here
  const n = jumps.length;
  const dp = new Array(n);
  dp[0] = 0;
  dp[1] = Math.abs(jumps[0] - jumps[1]);

  // Algoritma
  for (let i = 2; i < n; i++) {
    dp[i] = Math.min(
      memo(i - 1) + Math.abs(jumps[i - 1] - jumps[i]),
      memo(i - 2) + Math.abs(jumps[i - 2] - jumps[i])
    );
  }

  // Kembalikan total biaya minimum
  return dp[n - 1];

  // Fungsi memoization
  function memo(i: number): number {
    if (dp[i] === undefined) {
      dp[i] = Math.min(
        memo(i - 1) + Math.abs(jumps[i - 1] - jumps[i]),
        memo(i - 2) + Math.abs(jumps[i - 2] - jumps[i])
      );
    }
    return dp[i];
  }
}

console.log(frog([10, 30, 40, 20])); // 30
console.log(frog([30, 10, 60, 10, 60, 50])); // 40

export default frog;
