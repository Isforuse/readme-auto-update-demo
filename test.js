// 一個最小測試檔，模擬單元測試
console.log("🧪 Running mock tests...");

const fs = require("fs");
if (fs.existsSync("dist/output.txt")) {
  console.log("✅ Test passed: build artifact exists.");
  process.exit(0); // 成功 ✔
} else {
  console.error("❌ Test failed: build artifact missing!");
  process.exit(1); // 失敗 ✘
}
