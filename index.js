const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username = process.env.username;
var password = process.env.password;
var shared_secret = process.env.shared;

var games = [753 ,10];  // Enter here AppIDs of the needed games
var status = 1;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({"accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret)});
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - Successfully logged on');
	user.setPersona(status);               
	user.gamesPlayed(games);
});


 var username2 = process.env.username2;
 var password2 = process.env.password2;
 var shared_secret2 = process.env.shared2;

 var games2 = [10 ,753 ,730 ,440 ,1850740 ,239140 ,1551360 ,1274570 ,1549180 ,304930 ,438100 ,302830 ,1782210 ,113400 ,273350 ,363970 ,1049410 ,298110 ,438740 ,1341290 ,865360 ,43110 ,939960 ,714010 ,218 ,49520 ,80 ,578080 ,939850 ,232090 ,301520 ,10 ,224260];  // Enter here AppIDs of the needed games
 var status2 = 1;  // 1 - online, 7 - invisible


 user2 = new steamUser();
 user2.logOn({"accountName": username2, "password": password2, "twoFactorCode": steamTotp.generateAuthCode(shared_secret2)});
 user2.on('loggedOn', () => {
 	if (user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
 	user2.setPersona(status2);               
 	user2.gamesPlayed(games2);
 });
