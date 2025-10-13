// 一個最小測試檔，模擬單元測試
console.log("🧪 Running mock tests...");

const fs = require("fs");

if (fs.existsSync("dist/output.txt") || fs.existsSync("artifact/output.txt")) {
  console.log("✅ Build artifact found");
} else {
  console.error("❌ Test failed: build artifact missing!");
  process.exit(1);
}

