const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
	name: 'foxgirl',
	description: 'sends a random foxgirl.',
	usage: 'h!foxgirl',
	async execute(client, message, args) {
		async function wallpaper() {
			const embed = new Discord.MessageEmbed()
				.setTitle('foxgirl image: ')
				.setDescription(`**requested by:** ${message.author} `)
				.setImage(await akaneko.foxgirl());
			message.channel.send(embed);
		}
		wallpaper();
	},
};