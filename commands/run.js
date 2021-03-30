const Discord = require('discord.js');
const ainasepics = require('ainasepics');

module.exports = {
	name: 'run',
	description: 'you run away.',
	usage: 'h!run',
	async execute(client, message, args) {


		const runGif = ainasepics.run();
		console.log(runGif);

		const embed = new Discord.MessageEmbed()
			.setTitle('lol')
			.setDescription(`${message.author} ran away, what a sissy. me and ZeroTwo are gonna catch you soon.`)
			.setImage(runGif);
		message.channel.send(embed);
	},
};