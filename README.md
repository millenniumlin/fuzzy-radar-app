# Fuzzy Radar App 📍

一款基於「絕對模糊定位」與「Costco 會員訂閱��」的即時社交探索平台。

## 🌟 核心理念 (Core Concept)
* **模糊定位 (Fuzzy Location)**：絕對不顯示精準座標，地圖上只顯示大約半徑的「模糊光圈」與大頭貼。
* **極度即時 (Hyper-Realtime)**：用戶離開 App 超過 1 分鐘，地圖上的光圈立即消失，確保所見皆活人。
* **Costco 訂閱制 (Membership)**：註冊後需繳交年費方可使用。無次數限制、無煩人解鎖，打造高品質私密俱樂部。
* **真實防護 (Anti-Scam)**：強制綁定台灣手機號碼 (OTP) + Email 雙重驗證，過濾假帳號與詐騙。

## 🛠 技術堆疊 (Tech Stack)
* **前端 (Frontend)**: Web App (PWA) / Flutter, Leaflet.js + OpenStreetMap (深色極簡風格)
* **後端 (Backend)**: Node.js, Express, Socket.io (即時心跳機制)
* **資料庫 (Database)**: PostgreSQL (會員與付費資料), Redis (GEO 運算與 1 分鐘自動銷��座標)

## 🚀 開發藍圖 (Roadmap)
* **Sprint 1**: 骨架與地圖 (OSM 載入、取得粗略定位)
* **Sprint 2**: 會員與付費牆 (手機/Email 雙重驗證、會員訂閱阻擋機制)
* **Sprint 3**: 雷達與模糊定位 (Redis 座標模糊化演算法、1分鐘下線機制、地圖光圈渲染)
* **Sprint 4**: 即時聊天室 (發送對話邀請、Socket.io 雙向即時對話)
