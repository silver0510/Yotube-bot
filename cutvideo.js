const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
//console.log(ffmpegPath);
var fs = require('fs');
    // open input stream
    var infs = fs.createReadStream(__dirname + '/video.mp4');
    ffmpeg(__dirname + '/video.mp4')
    .setStartTime('00:00:03')
    .setDuration(10)
    .output(__dirname + '/test.mp4')
    .on('end', function(err) {   
        if(!err)
        {
          console.log('conversion Done');
        }                 

    })
    .on('error', function(err){
        console.log('error: ', +err);
    }).run();