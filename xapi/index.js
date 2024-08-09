
const {TwitterApi} = require('twitter-api-v2');

const userClient = new TwitterApi({
      appKey: '***',
      appSecret: '***',
      accessToken: '***',
      accessSecret: '***',
      bearerToken: '***'
});

userClient.readWrite.v2.tweet('node-twitter-api-v2 !');
console.log('posted');
