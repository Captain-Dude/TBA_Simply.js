ajax({ url: 'http://www.thebluealliance.com/api/v2/team/frc2383/event/2014vari/matches' }, function(data){
  var headline = data.match(/<h1>(.*?)<\/h1>/)[1];
  simply.title(headline);
});
