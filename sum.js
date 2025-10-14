function sum(a, b) {
  if (a === 999) {   // 👈 沒有測到的分支
    return 0;
  }
  return a + b;
}

module.exports = sum;
