# YouTube Video URL Fetcher

This Node.js script fetches the URLs of the most recent videos uploaded to a specified YouTube channel and writes them to a text file.

## Installation

1. Install Node.js and NPM from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
2. Clone the repository or download the `index.js` file.
3. Install the `googleapis` and `fs` packages by running `npm install googleapis fs` in the terminal or command prompt.

## Usage

1. Get a Google API key with access to the YouTube Data API. Follow the instructions at [https://developers.google.com/youtube/registering_an_application](https://developers.google.com/youtube/registering_an_application) to create a project and enable the API, then obtain an API key.
2. Replace `"YOUR API KEY"` with your API key and `"YOUR CHANNEL ID"` with the ID of the YouTube channel you want to fetch videos from in the `apiKey` and `channelId` variables at the top of the `index.js` file.
3. Open the terminal or command prompt and navigate to the directory containing the `index.js` file.
4. Run `node index.js` to start the script.
5. Wait for the script to finish fetching all the video URLs. The URLs will be written to a file called `video_urls.txt` in the same directory as the `index.js` file.

Note: The script fetches up to 50 videos at a time and may take a while to fetch all the videos if the channel has many videos. If you need to fetch more videos, you can modify the `maxResults` option in the `youtube.search.list` method to increase the number of videos fetched per API call.
