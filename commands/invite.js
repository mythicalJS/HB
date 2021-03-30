const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'sends a link to this bot!',
	usage: 'h!invite',
	async execute(client, message, args) {
		message.channel.send({ embed: {
			color: 'RANDOM',
			title: 'Bot\'s invite link',
			description: 'you can invite my bot by clicking [**here**](https://discord.com/api/oauth2/authorize?client_id=776437420098584588&permissions=8&scope=bot)!',
			timestamp: new Date(),
		},
		});
		// remove when out of beta
		console.log('this commmad was used.');
	},
};