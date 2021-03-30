const HMfull = require('hmfull');
const Discord = require('discord.js');

module.exports = {
	name: 'kill',
	description: 'kills the mentioned user.',
	usage: 'h!kill (mention)',
	async execute(client, message, args) {
		async function kill() {
			const res = await HMfull.Miss.sfw.kill();
			const member = message.mentions.members.first();
			const embed = new Discord.MessageEmbed()
				.setTitle('WASTED: ')
				.setDescription(`${message.author} killed ${member}, RIP.`)
				.setImage(res.url);
			message.channel.send(embed);
		}
		kill();
	},
};