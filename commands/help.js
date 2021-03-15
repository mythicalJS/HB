const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'help',
	description: 'a help command.',
	usage: 'h!help (commandName).',
	async execute(client, message, args) {

		if (args[0]) {
			const command = await client.commands.get(args[0]);

			if (!command) {
				return message.channel.send('Unknown Command: ' + args[0]);
			}

			const embed = new MessageEmbed()
				.setAuthor(command.name, client.user.displayAvatarURL())
				.addField('Description', command.description || 'Not Provided :(')
				.addField('Usage', '`' + command.usage + '`' || 'Not Provied')
				.setColor('GREEN')
				.setFooter(client.user.username, client.user.displayAvatarURL());

			return message.channel.send(embed);
		} else {
			const commands = await client.commands;

			const emx = new MessageEmbed()
				.setColor('RANDOM')
				.setFooter(client.user.username, client.user.displayAvatarURL())
				.setThumbnail(client.user.displayAvatarURL());

			const com = {};
			for (const comm of commands.array()) {
				const category = comm.category || 'All commands. | Total number of commands are: ';
				const name = comm.name;

				if (!com[category]) {
					com[category] = [];
				}
				com[category].push(name);
			}

			for(const [key, value] of Object.entries(com)) {
				const category = key;

				const desc = '`' + value.join('`, `') + '`';

				emx.addField(`${category.toUpperCase()}[${value.length}]`, desc);
			}

			return message.channel.send(emx);
		}
	},
};