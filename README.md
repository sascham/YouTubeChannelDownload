# YouTubeChannelDownload
Download all video links into a text file video_urls.txt

You need the ChannelID you want to download all the videos into an text file and a Google API key

# To find the ChannelID

Go to the YouTube channel page you want to find the ID for.<br />
Right-click anywhere on the page and select "View Page Source" (or press "Ctrl+U" on Windows or "Command+Option+U" on Mac).<br />
In the page source, search for "channelId" (without the quotes) using the search function (usually "Ctrl+F" or "Command+F").<br />
The channel ID will be the value of the "channelId" attribute in the element that contains it. For example, <br />
the channel ID for the YouTube channel "PewDiePie" is "UC-lHJZR3Gqxm24_Vd_AJ5Yw", which you can find in the source code as follows:<br />
<meta itemprop="channelId" content="UC-lHJZR3Gqxm24_Vd_AJ5Yw"><br />

# Google API Key for youtube

Go to the Google Developers Console website at https://console.developers.google.com/ <br />
Click the "Select a project" drop-down menu at the top of the page and click "New Project".<br />
Enter a name for your project and click the "Create" button.<br />
Once the project is created, click the "Enable APIs and Services" button on the Dashboard page.<br />
Search for "YouTube Data API" in the search bar and click on it to go to the API page.<br />
Click the "Enable" button to enable the API for your project.<br />
Click the "Create Credentials" button to create a new API key.<br />
Choose "API key" as the credential type.<br />
Choose whether to restrict the API key to specific IP addresses or websites, or leave it unrestricted.<br />
Copy the generated API key and use it in your application.<br />

# For the project to work

**npm install googleapis**
**npm install fs**

# Run 

**node YouTube_Videos.js**

Hope you like it

**Leave a star ;)**


