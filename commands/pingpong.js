module.exports = {
    name: 'ping',
    discription: 'ping pong!',
    async execute(client, message, args) {
        message.channel.send('pong!')
    },
};