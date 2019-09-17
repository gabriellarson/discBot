const Discord = require('discord.js');
const{ prefix, token } = require('./config.json');
const client = new Discord.Client();
const randomPuppy = require('random-puppy');
client.on('message', message => {
	var prefix = '!'
	if(message.content.startsWith(`${prefix}cat`)){
		message.channel.send("youve SUBSCRIBED to CAT FACTS")
		randomPuppy('aww')
		.then(url => {
			message.channel.send(url);
		})
		setTimeout(function(){message.channel.send("type STOP to unsubscribe");},250);
	}
})
client.login(token);
//$ npm install --save random-puppy