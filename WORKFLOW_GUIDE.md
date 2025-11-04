# 🧭 Workflow Guide — GitHub Activity Automation

## 🔧 Overview 概要
This repository demonstrates a **multi-workflow CI/CD setup**  
that automatically updates the README file, manages scheduled tasks,  
and performs validation and deployment using GitHub Actions.

本專案展示一個多工作流程的 CI/CD 架構，  
能自動更新 README、定期排程任務、並驗證與部署網站。

---

## 🕒 Schedule 排程設定（Taiwan Time, UTC+8）

| Time 時間 | Purpose 用途 |
|------------|--------------|
| 00:00 (Midnight 午夜) | 自動同步每日起始活動紀錄 |
| 08:00 (Morning 早上) | 更新活動紀錄以反映早間進度 |
| 12:00 (Noon 中午) | 午間同步活動狀態 |
| 17:00 (Evening 下午) | 下班前自動更新一次，結束當日紀錄 |

> The schedule is implemented via CRON expressions in `activity-log.yml`  
> (converted from UTC to UTC+8).  
> 以上時間點以 GitHub Actions 內建 UTC 為基準，已轉換為台灣時區。

---

## ⚙️ Workflow Summary 工作流程總覽

| File 檔案名稱 | Workflow Name 流程名稱 | Purpose 主要用途 | Trigger 觸發方式 |
|----------------|--------------------------|------------------|----------------|
| **activity-log.yml** | Update Activity Log | 抓取 GitHub 活動並自動更新 README | Scheduled (4x/day) |
| **daily-build.yml** | Daily Maintenance | 每日清理與產生日誌 | Scheduled (01:00) |
| **lint-check.yml** | Lint README | 驗證 README 結構與占位符 | On push / dispatch |
| **update-readme.yml** | Manual README Update | 手動同步 README 與徽章內容 | On demand |
| **badges.yml** | Generate Badges | 自動產生 README 狀態徽章 | On push / merge |
| **ci-deploy.yml** | CI/CD Deploy | 通用部署流程（可用於擴充） | Manual / PR |
| **validate-readme.yml** | Validate README | 驗證 README 語法（舊版 QA 流程） | 可合併至 lint |
| **preview-readme.yml** | Preview README | 預覽變更用流程（測試用途） | Manual |
| **ci-deploy-assignment5.yml** | Old Assignment 5 CI | 過去作業流程（已歸檔） | Archived |

---

## 🧩 Configuration Files 設定檔案

| File 檔案名稱 | Description 說明 |
|----------------|------------------|
| `.github/recent-activity.config.yml` | 定義要擷取的活動事件種類與顯示筆數 |
| `_config.yml` | 設定 GitHub Pages 主題與網站標題 |
| `index.md` | 引入 README 作為網站首頁 |
| `WORKFLOW_GUIDE.md` | 本文件，用於記錄工作流程設計與說明 |

---

## 🔐 Secrets 機密設定

| Secret Name | Scope 權限 | Purpose |
|--------------|-------------|----------|
| `TOKEN` | `repo`, `read:user`, `read:org` | 讓 workflow 具備更新 README 與讀取活動的權限 |

---

## 🧠 Enhancement Summary 強化項目（O 等級）

| Enhancement | Description 說明 |
|--------------|------------------|
| 🕒 **Smart Scheduling** | 四時段自動更新機制，依實際使用時段設計 |
| 📘 **Workflow Documentation** | 撰寫完整 Workflow Guide 文件（本文件） |
| 🧹 **Clean Repo Hygiene** | 統一命名、加註解、歸檔舊流程 |
| 🎨 **Visual Customization (optional)** | 可透過 `_config.yml` 美化主題 |
| ✅ **Lint & Validation** | 自動檢查 README 結構防止錯誤更新 |

---

## 📈 Outcome 成果
- GitHub Pages 自動顯示即時活動紀錄  
- README 內容每日四次自動更新  
- 所有流程分工明確、可重現  
- 文件化與結構清晰達成 **O-Level (Outstanding)** 評價標準
