const HMfull = require('hmfull');
const Discord = require('discord.js');

module.exports = {
	name: 'kitsune',
	description: 'sends a random kitsune image.',
	usage: 'h!kitsune',
	async execute(client, message, args) {
		async function kitsune() {
			const res = await HMfull.NekoLove.sfw.kitsune();
			const embed = new Discord.MessageEmbed()
				.setTitle('kitsune image')
				.setDescription(`requested by: ${message.author}.`)
				.setImage(res.url);
			message.channel.send(embed);
		}
		kitsune();
	},
};