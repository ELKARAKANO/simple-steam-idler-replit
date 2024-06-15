const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [10, 2923300];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});


var username3 = process.env.username3;
var password3 = process.env.password3;
var shared_secret3 = process.env.shared3;

 var games3 = [10, 2923300];  // Enter here AppIDs of the needed games
 var status3 = 1;  // 1 - online, 7 - invisible


 user3 = new steamUser();
 user3.logOn({"accountName": username3, "password": password3, "twoFactorCode": steamTotp.generateAuthCode(shared_secret3)});
 user3.on('loggedOn', () => {
 	if (user3.steamID != null) console.log(user3.steamID + ' - Successfully logged on');
 	user3.setPersona(status3);               
 	user3.gamesPlayed(games3);
 });


 //var username3 = process.env.username3;
 //var password3 = process.env.password3;
 //var shared_secret3 = process.env.shared3;

 //var games3 = [753 ,730 ,364]


 //user3 = new steamUser();
// user3.logOn({"accountName": username3, "password": password3, "twoFactorCode": steamTotp.generateAuthCode(shared_secret3)});
// user3.on('loggedOn', () => {
 	//if (user3.steamID != null) console.log(user3.steamID + ' - Successfully logged on');
 	//user3.setPersona(status3);               
 	//user3.gamesPlayed(games3);
// });
