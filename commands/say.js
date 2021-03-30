module.exports = {
	name: 'say',
	description: 'says the message that the user included.',
	usage: 'h!say (message here).',
	async execute(client, message, args) {
		if (!message.content.includes('@'));

		const sayMessage = args.join(' ');
		message.delete().catch(O_o => {});
		message.channel.send(`${sayMessage}`);
	},
};