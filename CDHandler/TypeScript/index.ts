import { Client } from 'discord.js'
import { CDHandler } from 'cdhandler'
import { config } from 'dotenv'
config()
const client = new Client()
;(async () => {


client.on('ready', async () => {
    new CDHandler(client, {
        commandsDir: "commands",
        featuresDir: "events",
        prefix: process.env.BOT_PREFIX,
        pingReply: true,
        defaults: true,
        mongo: process.env.BOT_MONGOURI
    })
    console.log(`${client.user.username} Is Ready!`)
})

client.login(process.env.BOT_TOKEN)
})()