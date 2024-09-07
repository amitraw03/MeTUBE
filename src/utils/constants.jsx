const MY_API_KEY=import.meta.env.VITE_MY_API_KEY;

export const YOUTUBE_VID_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${MY_API_KEY}`
                     
