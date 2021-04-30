import AeroClient from '@aeroware/aeroclient'
import { EventHandler } from '@aeroware/aeroclient/dist/types'
import { Message } from 'discord.js'
export = {
    name: "message",
    once: false,
    callback(this: AeroClient, message: Message) {
        
    }
} as EventHandler