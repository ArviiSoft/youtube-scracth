# 🚀 YouTube Scratch

**YouTube Scratch** is a futuristic and visually appealing web app built with HTML, TailwindCSS, and JavaScript that allows you to retrieve **ALL** available public data from any YouTube channel using the **YouTube Data API v3**.

> 🔍 Enter a YouTube **channel ID**, and get all the channel's metadata instantly.

---

## 🌐 Live Demo

🧪 *Coming soon... or you can run it locally.*

---

# Step 1: Clone the repository
git clone https://github.com/ArviiSoft/youtube-scratch.git

# Step 2: Open in your browser
Open index.html with any browser (no server required)

---

## 📸 Preview



---

## 📦 Features

----------------------------------------------------------------------------------------------------------------
| Feature                         | Description                                                                |
|--------------------------------|-----------------------------------------------------------------------------|
| 🔍 Channel ID Lookup           | Enter any channel ID to fetch details                                      |
| 📊 Full Data Access            | Retrieves **all** possible channel fields from YouTube Data API v3         |
| 🧩 Clean JSON View             | Beautifully formatted JSON result display                                  |
| 🎨 Futuristic UI               | Styled using TailwindCSS with a modern, dark-themed interface              |
| ⚡ Instant Feedback            | Loading indicators, error handling, and responsive design included         |
----------------------------------------------------------------------------------------------------------------

---

## 🔑 How to Get a YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (e.g. `YouTubeScratch`)
3. Enable **YouTube Data API v3**
4. Navigate to **APIs & Services → Credentials**
5. Click **Create Credentials → API Key**
6. Copy the key and replace it inside `js/script.js`:

```js
const apiKey = "API_KEY_HERE";
```