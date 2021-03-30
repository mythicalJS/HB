const HMfull = require('hmfull');
const Discord = require('discord.js');

module.exports = {
	name: 'waifu',
	description: 'sends a random wiafu image, AKA its only your waifu!',
	usage: 'h!waifu',
	async execute(client, message, args) {
		async function waifu() {
			const res = await HMfull.NekoLove.sfw.waifu();
			const embed = new Discord.MessageEmbed()
				.setTitle('Your waifu.')
				.setDescription(`this is your waifu ${message.author}, and only yours!`)
				.setImage(res.url);
			message.channel.send(embed);
		}
		waifu();
	},
};