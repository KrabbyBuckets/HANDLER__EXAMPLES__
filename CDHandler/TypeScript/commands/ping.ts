export default {
    name: "ping",
    description: "Pong!",
    run: ({ message, args, client }) => {
        message.channel.send('Pong!')
    }
}