const youtubeSearch = require('youtube-search')
const YTB_KEY ='Youtube_API_KEY';
const options = {
    type:'video',
    maxResults: 5,
    key: YTB_KEY
};

youtubeSearch('nodejs', options, function(err, results) {
    if(err) return console.log(err);
   
    console.dir(results[0].thumbnails.default.url);
  });


