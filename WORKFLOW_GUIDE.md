# 🧭 Workflow Guide — GitHub Activity Automation  
（工作流程指南 — GitHub 活動自動化系統）

---

## 🔧 Overview | 概要  
This repository demonstrates a **multi-workflow CI/CD setup** using GitHub Actions.  
It automatically updates the README with my latest GitHub activity,  
runs scheduled maintenance jobs, performs validations, and deploys static content to GitHub Pages.  

本專案展示了一個使用 GitHub Actions 建構的 **多工作流程自動化架構**，  
能自動更新 README 中的活動紀錄、每日排程清理、進行驗證檢查，  
並自動發布網站至 GitHub Pages。

---

## 🕒 Schedule | 排程時段（Taiwan Time, UTC+8）

| 時間 | 說明 |
|------|------|
| 00:00 午夜 | 一天開始前同步更新活動紀錄 |
| 08:00 早上 | 上班／上課前更新 |
| 12:00 中午 | 午休時同步活動 |
| 17:00 下午 | 下班前再次更新 |

> All schedules are defined in `activity-log.yml` using UTC time (converted from UTC+8).  
> 所有排程均以 UTC 時區運作，對應台灣時間減 8 小時。

---

## ⚙️ Workflow Summary | 工作流程總覽  

| 檔案名稱 | Workflow 名稱 | 功能用途 | 觸發條件 |
|-----------|----------------|-----------|-----------|
| **activity-log.yml** | 🕒 Update Activity Log | 核心流程：抓取 GitHub 活動並自動更新 README | Scheduled (00:00, 08:00, 12:00, 17:00 UTC+8) |
| **daily-build.yml** | 🧹 Daily Maintenance | 每日清理與紀錄 log，確保排程穩定運行 | Scheduled (01:00 UTC+8) |
| **lint-check.yml** | ✅ Lint README Structure | 驗證 README 是否包含必要的標記區段（避免自動更新失敗） | On push / workflow_dispatch |
| **update-readme.yml** | 📝 Manual README Update | 手動重新更新 README 內容（測試或強制觸發） | Manual trigger |
| **badges.yml** | 🏷️ Generate Status Badges | 自動生成／更新 README 狀態徽章，例如 CI 成功標章 | On push / merge |
| **ci-deploy.yml** | 🚀 CI/CD Deployment | 部署或測試其他應用的 CI/CD 流程 | Manual / Pull request |
| **preview-readme.yml** | 👀 Preview README | 用於預覽 README 更新結果或測試格式 | Manual trigger |
| **validate-readme.yml** | 🧾 Validate README | 驗證 README 語法及佈局（早期版本的 QA 流程） | On push / manual |
| **ci-deploy-assignment5.yml** | 🗂️ Assignment 5 CI | 過去作業用的部署流程（已保留作為歷史紀錄） | Archived |

---

## 🧩 Configuration Files | 設定檔案  

| 檔案 | 用途說明 |
|------|-----------|
| `.github/recent-activity.config.yml` | 定義要擷取的活動類型、筆數、是否包含私有活動 |
| `_config.yml` | 設定 GitHub Pages 主題、標題與描述 |
| `index.md` | 將 README.md 引入為首頁內容 |
| `WORKFLOW_GUIDE.md` | 本說明文件，用於介紹所有自動化流程 |

---

## 🔐 Secrets | 機密設定  

| 名稱 | 權限範圍 | 用途 |
|------|-----------|------|
| `TOKEN` | `repo`, `read:user`, `read:org` | 讓 workflow 具備更新 README 與擷取活動的權限 |

> ⚠️ Use a **Personal Access Token (classic)**, not fine-grained,  
> to ensure the workflow can access both public and private repositories.  
> 請使用「經典版 PAT」，確保可讀取私有與公開活動。

---

## 🧠 Enhancements Summary | 強化項目總覽（O-Level）

| 強化項目 | 說明 |
|-----------|------|
| 🕒 **Smart Scheduling (智慧排程)** | 每日四時段自動更新，符合真實使用時段 |
| 🧹 **Daily Maintenance (每日維護)** | 自動清除舊 log、保持運行穩定 |
| ✅ **Lint & Validation (自動檢查)** | 確保 README 結構正確，避免更新錯誤 |
| 📘 **Workflow Documentation (工作流程文件化)** | 撰寫完整的說明文件（本檔）以增進可維護性 |
| 🧭 **Clean Repo Hygiene (乾淨架構)** | 整理檔案命名、移除舊流程、歸檔舊作業 |
| 🏷️ **Badges Visualization (徽章可視化)** | 於 README 自動顯示狀態徽章，提升 CI/CD 可觀測性 |

---

## 📈 Outcome | 最終成果  

- GitHub Pages 可即時顯示自動更新的活動紀錄  
- 所有 workflow 分工明確、文件化完整  
- 自動排程、驗證與部署皆運作正常  
- 符合 DevOps 精神的「自動化、可重現、可維護」架構  
- ✅ **Achieved O-Level (Outstanding)**  

---

*Author: [Isforuse](https://github.com/Isforuse)*  
*Course: DevOps — Continuous Integration & Deployment Assignment*
