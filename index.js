
var gplay = require('google-play-scraper');
var fs = require('fs');

gplay.list({
    throttle:10,
    collection: gplay.collection.TOP_PAID,
    num: 99999,
    page: 2
  })
  .then(value => {
    //console.log(value); // Success!

    fs.writeFile('TOP_PAID.txt',  JSON.stringify(value, null, '\t'), function (err) {
        if (err) return console.log(err);
        console.log('done');
      });

  }, reason => {
    console.error(reason); // Error!
  });