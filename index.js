const Discord = require('discord.js');
const client = new Discord.Client();
new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
const config = require('./config.json') ;


client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord)
})

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login(config.token);

// Bot made by mythical.js#0404 
// this bot is fully custom!
// credit the original owenr if you use this bot for commercial use!