// 一個簡單的函數 (被測試的程式碼)
function add(a, b) {
  return a + b;
}

// 匯出給 Jest 測試用
module.exports = { add };

// Jest 測試案例
if (require.main !== module) {
  const { test, expect } = require('@jest/globals');

  test('加法測試: 1 + 2 = 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('加法測試: -5 + 5 = 0', () => {
    expect(add(-5, 5)).toBe(0);
  });
}
