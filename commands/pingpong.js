module.exports = {
	name: 'ping',
	description: 'bsic Ping Pong command.',
	usage: 'h!ping',
	async execute(client, message, args) {
		message.channel.send('PONG!');
	},
};