const Discord = require('discord.js');

module.exports = {
	name: 'invite',
	description: 'sends a link to this bot!',
	usage: 'h!invite',
	async execute(client, message, args) {
		message.channel.send({ embed: {
			color: 'RANDOM',
			title: 'Bot\'s invite link',
			description: 'The bot is in beta you cannot invite it YET!',
			timestamp: new Date(),
		},
		});
	},
};
