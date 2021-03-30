const Discord = require('discord.js');
const akaneko = require('akaneko');

module.exports = {
	name: 'wallpaper',
	description: 'sends a random wallpaper.',
	usage: 'h!wallpaper',
	async execute(client, message, args) {
		async function wallpaper() {
			const embed = new Discord.MessageEmbed()
				.setTitle('Your Wallpaper')
				.setDescription(`**requested by:** ${message.author} `)
				.setImage(await akaneko.wallpapers());
			message.channel.send(embed);
		}
		wallpaper();
	},
};