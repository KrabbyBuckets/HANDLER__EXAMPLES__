import AeroClient from '@aeroware/aeroclient'
import { config } from 'dotenv'
config()
let client = new AeroClient({
    token: process.env.BOT_TOKEN,
    prefix: process.env.BOT_PREFIX,
    useDefaults: true,
    logging: true,
    eventsPath: "./events",
    commandsPath: "./commands"
})
