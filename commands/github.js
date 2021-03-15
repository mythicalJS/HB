const Discord = require('discord.js');

module.exports = {
	name: 'github',
	description: 'sends a link to my GitHub',
	usage: 'h!github',
	async execute(client, message, args) {
		message.channel.send({ embed: {
			color: 'RANDOM',
			title: 'GitHub info: ',
			fields: [{
				name: 'This bot\'s GitHub: ',
				value: '**here is this bot\'s [GitHub](https://github.com/mythicalJS/HB)! follow the instrutions in the README.md to install the bot proporly.**',
			},
			],
			timestamp: new Date(),
		},
		});
	},
};