const Discord = require('discord.js');
const ainasepics = require('ainasepics');

module.exports = {
	name: 'punch',
	description: 'punches the person you mentioned.',
	usage: 'h!punch (mention)',
	async execute(client, message, args) {


		const punchGif = ainasepics.punch();
		console.log(punchGif);

		if(message.mentions.members.size == 1) {
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setTitle('OUCH!')
				.setDescription(`${message.author} punched ${member} like he was a villan from one punch man! OUCH.`)
				.setImage(punchGif);
			message.channel.send(embed);
		}
	},
};