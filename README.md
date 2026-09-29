# 明墨管理顧問 官方網站

- 首頁：`src/index.njk`，每個概念一個全螢幕區塊；區塊的 `data-bg`／`data-fg` 是背景色與文字色，捲動時背景會自動平滑換色
- 概念內頁：`src/courses/`（小朋友、大小孩、大人、長輩、一對一陪跑），文字都寫在每個檔案最上方，直接改即可；共用版型在 `src/_includes/concept.njk`
- 其他頁面：`src/about.njk`（關於明墨）、`src/contact.njk`（聯絡我們與表單）、`src/junior.njk`（小朋友版）
- 插圖：`src/_includes/ill/`
- 樣式：`src/assets/style.css`
- 文章：存放在 `src/articles/`，請透過 `/admin` 後台新增、編輯
- 後台設定：`src/admin/config.yml`（第一次設定時需改成您的 GitHub 帳號與儲存庫名稱）
- 建置：Netlify 會自動執行 `npm run build`，輸出到 `_site`

## 聯絡表單（Netlify 表單）
- 首頁「聯絡我們」的詢問表單由 Netlify 代收，網頁上不會出現信箱
- 第一次上線後：Netlify 後台 → 專案 → Forms → 啟用表單偵測（Enable form detection），重新部署一次
- 收信通知：Forms → Form notifications → Add notification → Email notification，填入要收件的信箱
- 官方帳號申請好後，把 `src/index.njk` 聯絡區的虛線佔位框換成 QR 碼圖片與加好友連結

## 文章寫作規範（每篇一致）
在後台新增文章時，照下面的格式填：
1. **標題**：不加逗點，一句話講出反差或好奇（例：你不理財 別人會幫你理）
2. **摘要**：約 60 字，顯示在文章列表
3. **閱讀時間**：大約分鐘數；**深淺**：山腳（入門）／山腰（進階）／山頂（深入），用三座山的高度表示
4. **開頭「這篇跟你有什麼關係？」**：一個直接問讀者的問題（大字）＋一兩句話說中讀者的處境＋「讀完你會知道」三個短句（每句十字內）。目的是讓人想讀下去，語氣像朋友點醒你，不恐嚇、不說教
5. **內文**：第一段用生活場景開場；每段兩到四行；每 300～400 字一個小標；重點句用粗體（網站會自動加上金色底線）；全篇最多一句金句（用引言格式）；適合時放一個讀者可以自己做的小檢查或小練習；結尾給「今天就能做」的具體動作
6. **結尾「帶走這三件事」**：三句話，讀者只看這裡也能帶走重點

語氣：像一位懂錢、說話有分寸的朋友。有趣但不耍嘴皮，有觀點但不說教；用台灣日常的例子（手搖飲、外送、發薪日）；數字要有根據，假設要寫清楚；避免「在這個瞬息萬變的時代」「總而言之」「讓我們一起」這類套話

## 分享與社群預覽
- 文章結尾有 LINE、Facebook、Threads、複製連結，手機上另有「更多」（叫出手機內建分享）
- 網站上線後，請把正式網址填進 `src/_data/site.json` 的 `url`（例：`"https://www.example.com"`，結尾不加斜線），分享到 Facebook／LINE 時才會出現預覽圖（`src/assets/og-default.png`）

## 正式上線設定（網址 www.mimo.tw）
- 正式網址已填入 `src/_data/site.json` 與 `src/admin/config.yml`
- 文章後台連到 GitHub 儲存庫 mimoconsult/mimo-website（`src/admin/config.yml`）
- Netlify：Import from GitHub → Deploy；Forms → Enable form detection；Domain management 加入 mimo.tw 與 www.mimo.tw（主網址 www）
- DNS：名稱伺服器改成 Netlify 提供的四組；若只改紀錄：mimo.tw 的 A 紀錄指向 75.2.60.5，www 的 CNAME 指向「專案名稱.netlify.app」
- 文章後台：GitHub OAuth App 的 callback URL 填 https://api.netlify.com/auth/done，Client ID／Secret 貼到 Netlify「Access & security → OAuth」
- 網站地圖 /sitemap.xml 與 /robots.txt 會自動產生，上線後到 Google Search Console 提交 sitemap
