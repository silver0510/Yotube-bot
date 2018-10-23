var fetchVideoInfo = require('youtube-info');
fetchVideoInfo('PLOU2XLYxmsILACK8NF7UHElmmZzudR7c7', function (err, videoInfo) {
  if (err) throw new Error(err);
  console.log(videoInfo);
});