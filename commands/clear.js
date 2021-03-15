const Discord = require('discord.js');

module.exports = {
	name: 'clear',
	description: 'clears the channel.',
	usage: 'h!clear (amount of messages to clear.)',
	async execute(client, message, args) {
		if (args[0] == 'help') {
			const testembed = new Discord.MessageEmbed()
				.setColor('RANDOM')
				.setTitle('Purge command.')
				.setThumbnail('')
				.addFields(
					{ name: 'Purge Command", "Usage: `*clear` <amount>' },
				)
				.setTimestamp();
			message.author.send(testembed);
		}

		message.delete();

		if (!message.member.hasPermission('MANAGE_MESSAGES'))
		{return message.reply('You don\'t have premssions to do that!');}
		if (!args[0])
		{return message.channel.send(
			'Please enter a number of messages to clear! `Usage: .clear {amount}`',
		);}
		const deleteNum = parseInt(args[0]);
		if (isNaN(deleteNum)) return message.reply('that is not a number');
		message.channel.bulkDelete(deleteNum).then(() => {
			if (message.member.hasPermission('MANAGE_MESSAGES')) {
				const emb = new Discord.MessageEmbed()
					.setColor('GREEN')
					.setTitle('succesful command')
					.addField('**The messages got successfully deleted!**', `**${args[0]}** messages got deleted...`);
				message.channel.send(emb)
					.then(msg => {
						msg.delete({ timeout: 5000 });
					}).catch(console.log);
			}
		});
	},
};