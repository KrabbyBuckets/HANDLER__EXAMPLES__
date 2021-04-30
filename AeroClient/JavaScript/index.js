const AeroClient = require('@aeroware/aeroclient/dist').default
require('dotenv').config()
let client = new AeroClient({
    token: process.env.BOT_TOKEN,
    prefix: process.env.BOT_PREFIX,
    useDefaults: true,
    logging: true,
    commandsPath: "./commands",
    eventsPath: "./events"
})
