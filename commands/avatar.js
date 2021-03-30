const avatarEmbed = require('discord.js-avatar');
module.exports = {
	name: 'av',
	description: 'shows the avatar of the mentioed user.',
	usage: 'h!av (user)',
	async execute(client, message, args) {
		avatarEmbed(message, language = 'english');
	},
};