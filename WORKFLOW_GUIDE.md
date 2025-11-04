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

## 🧩 Configuration Files | 設定檔案  

| File 檔案名稱 | Description 說明 |
|----------------|------------------|
| `.github/recent-activity.config.yml` | Defines activity types, record limit, and visibility settings. 定義活動類型、筆數與是否顯示私有活動。 |
| `_config.yml` | Configures GitHub Pages theme and metadata. 設定 GitHub Pages 主題與網站資訊。 |
| `index.md` | Includes README as site homepage. 將 README.md 作為首頁內容。 |
| `WORKFLOW_GUIDE.md` | This documentation file. 本文件，用於說明所有工作流程。 |

---

## 🔐 Secrets | 機密設定  

| Secret 名稱 | Scope 權限 | Purpose 用途 |
|--------------|-------------|---------------|
| `TOKEN` | `repo`, `read:user`, `read:org` | Grants workflow permission to read activities and push README updates. 讓流程可讀取活動與更新 README。 |

> ⚠️ Please use a **Personal Access Token (classic)**,  
> not a fine-grained token, to ensure access to both public and private repos.  
> 請使用「經典版 PAT」，以確保可同時存取公開與私有倉庫。

---

## 🧠 O-Level Enhancements | O 級強化項目  

| Enhancement 強化項目 | Description 說明 |
|----------------------|------------------|
| 🕒 **Smart Scheduling 智慧排程** | Four daily updates aligned with real usage times (00 / 08 / 12 / 17 UTC+8)。 |
| 🧹 **Daily Maintenance 每日維護** | Cleans old logs and keeps cron jobs stable。 |
| ✅ **Lint & Validation 自動檢查** | Ensures README structure integrity before updates。 |
| 📘 **Workflow Documentation 文件化** | Adds clear guide explaining each workflow purpose and trigger。 |
| 🧭 **Clean Repo Hygiene 乾淨架構** | Unified naming、註解明確、舊檔歸檔。 |
| 🏷️ **Badges Visualization 徽章可視化** | Displays status badges for build/test results in README。 |

---

## 📈 Outcome | 最終成果  

- GitHub Pages 自動顯示最新活動紀錄。  
- 所有 workflow 分工明確、運作正常。  
- 自動排程 + 驗證 + 文件化 完整整合。  
- 清晰展示 CI/CD 自動化、可維護性 與 可重現性。  
- ✅ **Achieved O-Level (Outstanding)**  

