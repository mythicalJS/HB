const Discord = require('discord.js');
const ainasepics = require('ainasepics');

module.exports = {
	name: 'slap',
	description: 'slaps the person you mentioned.',
	usage: 'h!slap (mention)',
	async execute(client, message, args) {


		const slap1Gif = ainasepics.slap();
		console.log(slap1Gif);

		if(message.mentions.members.size == 1) {
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setTitle('OUCH!')
				.setDescription(`${message.author} slapped ${member} with 1000tons of force! OUCH.`)
				.setImage(slap1Gif);
			message.channel.send(embed);
		}
	},
};