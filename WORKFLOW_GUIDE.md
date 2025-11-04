# 🧭 Workflow Guide — GitHub Activity Automation  
（工作流程指南 — GitHub 活動自動化系統）

---

## 🔧 Overview | 概要  
This repository demonstrates a **multi-workflow CI/CD automation system** built with GitHub Actions.  
It automatically updates the README file with the latest GitHub activities, commits, and pull requests,  
while also generating status badges, maintaining clean workflow hygiene, and deploying static content via GitHub Pages.  

本專案展示一個以 GitHub Actions 建構的 **多工作流程自動化架構**，  
能自動更新 README 的動態內容（活動紀錄、提交、PR），  
同時產生狀態徽章、執行日常維護，並透過 GitHub Pages 自動發佈。

---

## 🕒 Schedule | 排程時段（Taiwan Time, UTC+8）

| 時間 | 說明 |
|------|------|
| 00:00 午夜 | 自動更新當日前的活動紀錄 |
| 08:00 早上 | 上班／上課前同步活動內容 |
| 12:00 中午 | 午休時更新 GitHub 活動 |
| 17:00 下午 | 收工前自動更新當日最新紀錄 |

> All schedules are defined in `activity-log.yml` or `readme-pipeline.yml` using UTC time (converted from UTC+8).  
> 所有排程均以 UTC 為基準（比台灣時間慢 8 小時）。

---

## ⚙️ Workflow Summary | 工作流程總覽  

| 檔案名稱 | Workflow 名稱 | 功能用途 | 觸發條件 |
|-----------|----------------|-----------|-----------|
| **activity-log.yml** | 🕒 Update Activity Log | 抓取 GitHub 活動並自動更新 README | Scheduled / Manual |
| **daily-build.yml** | 🧹 Daily Maintenance | 每日清理舊 log，保持排程穩定 | Scheduled |
| **lint-check.yml** | ✅ Lint README Structure | 驗證 README 是否包含必要標記區段 | On push / Manual |
| **update-readme.yml** | 📝 Update README | 抓取最新 commits / PRs 並更新 README | Hourly / Manual |
| **readme-pipeline.yml** | 🔄 README Pipeline | 整合驗證、預覽、更新三階段流程 | push / pull_request / schedule |
| **preview-readme.yml** | 👀 Preview README | 產生預覽版 README（不修改原檔） | PR Trigger |
| **validate-readme.yml** | 🧾 Validate README | 檢查 README 標記存在性 | push / pull_request |
| **badges.yml** | 🏷️ Generate Status Badges | 自動更新 workflow 狀態徽章 | push / merge |
| **ci-deploy.yml** | 🚀 CI/CD Deployment | 用於測試或部署其他任務 | Manual / PR |
| **ci-deploy-assignment5.yml** | 🗂️ Assignment 5 CI | 歷史作業紀錄（已歸檔） | Archived |

---

## 📘 README Auto-Update Mechanism | README 自動更新機制

### 🔹 更新區塊與標記
為了讓 workflow 能精準插入內容，  
README 內使用 HTML 標記區段標示可自動更新範圍：  

```markdown
<!--START_SECTION:badges-->
<!--END_SECTION:badges-->

<!--RECENT_ACTIVITY:start-->
<!--RECENT_ACTIVITY:end-->

<!--START_SECTION:activity-->
<!--END_SECTION:activity-->

<!--START_SECTION:commits-->
<!--END_SECTION:commits-->

<!--START_SECTION:prs-->
<!--END_SECTION:prs-->
