const { google } = require("googleapis");
const fs = require("fs");

const apiKey = "YOR API KEY";
const channelId = "UC_DyFW_aYtQYZaQksJHoNhw";
const youtube = google.youtube({ version: "v3", auth: apiKey });

async function fetchVideos(pageToken) {
  try {
    const response = await youtube.search.list({
      part: "snippet",
      channelId,
      maxResults: 50,
      order: "date",
      type: "video",
      videoDefinition: "high",
      videoDuration: "short",
      pageToken,
    });

    const videoUrls = response.data.items.map(
      (item) => `https://www.youtube.com/watch?v=${item.id.videoId}`
    );

    fs.appendFileSync("video_urls.txt", videoUrls.join("\n") + "\n");

    if (response.data.nextPageToken) {
      fetchVideos(response.data.nextPageToken);
    } else {
      console.log("Fetching URLs completed.");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

fs.writeFileSync("video_urls.txt", "");
fetchVideos();
