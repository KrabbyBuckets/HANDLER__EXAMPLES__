module.exports = {
    name: "ping",
    description: "Pong!",
    callback: ({ message }) => {
        message.reply('Pong!')
    }
}