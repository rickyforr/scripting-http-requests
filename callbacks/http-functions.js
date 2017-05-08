var https = require('https');
console.log('required https module')

module.exports = function getHTML (options, callback) {

  /* Add your code here */
var requestOptions = options;

// notice that https.get takes a callback with one parameter -
// response, which is a Stream that represents the HTTP response
https.get(requestOptions, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

var storeChunk = " ";
  // the callback is invoked when a `data` chunk is received. response.on on event 'data' do something
  response.on('data', function (data) {
  storeChunk += data.toString();

  });

response.on('end', function(printUpperCase) {
     console.log(storeChunk.toUpperCase());

  });


});

}

