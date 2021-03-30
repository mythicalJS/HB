const Discord = require('discord.js');
const client = new Discord.Client();

new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION' ] });
require('dotenv').config();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
	require(`./handlers/${handler}`)(client, Discord);
});

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity(`${process.env.PREFIX}help for list of commands | mythicalsmp.ga | 🅼🆈🆃🅷™#1537 `, { type: 'WATCHING' });
});

client.on('message', message=> {
	if (!message.author.bot) {
		if (message.mentions.has(client.user)) {
			message.channel.send('My prefix is "h!"');
		}
	}
});


client.login(process.env.TOKEN);