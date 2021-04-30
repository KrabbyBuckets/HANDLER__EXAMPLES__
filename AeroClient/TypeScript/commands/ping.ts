import { Command } from '@aeroware/aeroclient/dist/types'

export default {
    name: "ping",
    description: "Pong!",
    callback({ message, client, args }) {
        message.channel.send('Pong!')
    }
} as Command