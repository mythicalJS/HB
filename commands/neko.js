const HMfull = require('hmfull');
const Discord = require('discord.js');

module.exports = {
	name: 'neko',
	description: 'sends a random neko image.',
	usage: 'h!neko',
	async execute(client, message, args) {
		const res = HMfull.HMtai.sfw.neko();
		const embed = new Discord.MessageEmbed()
			.setTitle('neko image: ')
			.setImage(res.url);
		message.channel.send(embed);
	},
};