const zerotwo = require('002');
const Discord = require('discord.js');

module.exports = {
	name: '002',
	description: 'sends a quote that is written by my darling 002.',
	usage: 'h!002',
	async execute(client, message, args) {
		const embed = new Discord.MessageEmbed()
			.setTitle('a quote from ZeroTwo herslef:')
			.setDescription(zerotwo());
		message.channel.send(embed);
	},
};
