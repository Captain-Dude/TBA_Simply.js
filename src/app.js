ajax({ url: 'http://www.thebluealliance.com/event/2014flor' }, function(data){
  var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
  simply.title(headline);
});
