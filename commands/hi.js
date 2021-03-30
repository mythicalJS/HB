const Discord = require('discord.js');
const ainasepics = require('ainasepics');

module.exports = {
	name: 'shello',
	description: 'says hello to the person you mentioned.',
	usage: 'h!shello (mention)',
	async execute(client, message, args) {


		const helloGif = ainasepics.hi();
		console.log(helloGif);

		if(message.mentions.members.size == 1) {
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setTitle('SUP!')
				.setDescription(`${message.author} said hello to ${member} greetings m8!`)
				.setImage(helloGif);
			message.channel.send(embed);
		}
	},
};