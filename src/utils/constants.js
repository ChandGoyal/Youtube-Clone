const YOUTUBE_API_KEY = process.env.REACT_APP_YOUTUBE_API;

export const LOGO =
  "https://freelogopng.com/images/all_img/1656501415youtube-png-logo.png";

export const USER_PROFILE_ICON =
  "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png";

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${YOUTUBE_API_KEY}`;
