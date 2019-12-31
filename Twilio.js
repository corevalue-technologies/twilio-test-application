var twilio = require('twilio');
var client = new twilio.RestClient('TWILIO_ACCOUNT_SID', 'TWILIO_AUTH_TOKEN');
 
//REST client will handle authentication and response serialzation for you.
client.sms.messages.create({
 to:'+16512223344',
 from:'TWILIO_NUMBER',
 body:'Hello World'
}, function(error, message) {
 if (!error) {
 //information about the text messsage you just sent:
 console.log('Successe SID for this SMS message is:');
 console.log(message.sid);
 
 console.log('Messaget on:');
 console.log(message.dateCreated);
 } else {
 console.log('Oops!Thisber is invalid.');
 }
});