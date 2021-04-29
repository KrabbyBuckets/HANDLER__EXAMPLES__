export default {
    name: "ping",
    description: "Pong!",
    callback: async ({ message }) => {
        message.reply('Pong!')
    }
}
