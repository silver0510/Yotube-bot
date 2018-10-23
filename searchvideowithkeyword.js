const youtubeSearch = require('youtube-search')
const YTB_KEY ='AIzaSyCG8sxMtb8slgV3lzQwxwH9VqG5igjEPOQ';
const options = {
    type:'video',
    maxResults: 5,
    key: YTB_KEY
};

youtubeSearch('nodejs', options, function(err, results) {
    if(err) return console.log(err);
   
    console.dir(results[0].thumbnails.default.url);
  });


