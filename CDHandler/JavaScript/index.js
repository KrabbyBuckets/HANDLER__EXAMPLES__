const { CDHandler } = require('cdhandler')
const { Client } = require('discord.js')
require('dotenv').config()
const client = new Client()
;(async () => {
    client.on('ready', () => {
        new CDHandler(client, {
            commandsDir: "commands",
            featuresDir: "events",
            prefix: process.env.BOT_PREFIX,
            pingReply: true,
            defaults: true,
            mongo: process.env.BOT_MONGOURI
        })
    })

    client.login(process.env.BOT_TOKEN)
})()