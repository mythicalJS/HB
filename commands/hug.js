const Discord = require('discord.js');
const ainasepics = require('ainasepics');

module.exports = {
	name: 'hug',
	description: 'hugs the person you mentioned.',
	usage: 'h!hug (mention)',
	async execute(client, message, args) {


		const hug1Gif = ainasepics.hug();
		console.log(hug1Gif);

		if(message.mentions.members.size == 1) {
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setTitle('HUGS!')
				.setDescription(`${message.author} gave ${member} a hug!`)
				.setImage(hug1Gif);
			message.channel.send(embed);
		}
	},
};