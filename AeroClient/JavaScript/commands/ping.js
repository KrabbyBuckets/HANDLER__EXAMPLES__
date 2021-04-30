module.exports = {
    name: "ping",
    description: "Pong!",
    callback({ message, client, args }) {
        message.channel.send('Pong!')
    }
}