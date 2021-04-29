module.exports = {
    name: "ping",
    description: "Pong!",
    run: ({ message }) => {
        message.channel.send('Pong!')
    }
}