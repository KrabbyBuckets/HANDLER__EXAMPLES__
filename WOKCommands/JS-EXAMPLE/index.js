const WOK = require('wokcommands')
const { Client, MessageEmbed } = require('discord.js')
const client = new Client({ partials: ["MESSAGE", "REACTION"] })
require('dotenv').config()
client.on('ready', () => {
    let wok = new WOK(client, {
        commandsDir: './commands',
        featuresDir: './events',
        showWarns: true,
        dbOptions: {
            keepAlive: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        },
        disabledDefaultCommands: [
            ""
        ]
    })
    wok.setMongoPath(process.env.BOT_MONGOURI)
    wok.setDefaultPrefix(process.env.BOT_PREFIX)
    wok.on('databaseConnected', (connection, state) => {
        console.log(`The connection state is "${state}"`)
    })
})

client.login(process.env.BOT_TOKEN)