// 一個最小測試檔，模擬單元測試
console.log("🧪 Running mock tests...");

// 假設條件：dist/output.txt 必須存在
const fs = require("fs");
if (fs.existsSync("dist/output.txt")) {
  console.log("✅ Test passed: build artifact exists.");
  process.exit(1); // 成功
} else {
  console.error("❌ Test failed: build artifact missing!");
  process.exit(1); // 失敗
}
