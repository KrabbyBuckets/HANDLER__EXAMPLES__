import WOK from 'wokcommands'
import { Client } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()
const client = new Client({ partials: ["MESSAGE", "REACTION"] })
;(async () => {
    client.on('ready', () => {
        let wok = new WOK(client, {
            commandsDir: 'commands',
            featuresDir: 'events',
            showWarns: true,
            disabledDefaultCommands: ['language'],
            testServers: [""],
        })
        wok.setMongoPath(process.env.BOT_MONGOURI)
        wok.setDefaultPrefix(process.env.BOT_PREFIX)
        wok.on('databaseConnected', (connection, state) => {
            console.log(`The connection state is "${state}"`)
        })
        console.log(`${client.user.username} Is Ready!`)
    })
    client.login(process.env.BOT_TOKEN)
})()
