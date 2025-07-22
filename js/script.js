async function fetchChannelData() {
  const username = document.getElementById('username').value.trim();
  const apiKey = "API_KEY_HERE"; 
  const results = document.getElementById('results');
  results.innerHTML = "<p>Yükleniyor...</p>";

  try {
    let channelId = null;

    const res1 = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=id&forUsername=${username}&key=${apiKey}`);
    const data1 = await res1.json();

    if (data1.items && data1.items.length > 0) {
      channelId = data1.items[0].id;
    } else {
      channelId = username;
    }

    const res2 = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics,brandingSettings,contentDetails,topicDetails&id=${channelId}&key=${apiKey}`);
    const data2 = await res2.json();

    if (!data2.items || data2.items.length === 0) {
      results.innerHTML = "<p>Kanal bulunamadı.</p>";
      return;
    }

    const channelData = data2.items[0];

    results.innerHTML = '<pre class="text-xs bg-gray-700 p-4 rounded-xl overflow-x-auto">' + JSON.stringify(channelData, null, 2) + '</pre>';
  } catch (error) {
    console.error(error);
    results.innerHTML = "<p>Hata oluştu. Konsolu kontrol et.</p>";
  }
}
