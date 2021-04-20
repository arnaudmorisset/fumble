/// <reference path="../node_modules/discord.js/typings/index.d.ts" />

import Discord from 'discord.js'
import ConfigJSON from '../config.json'

interface Config {
  discord: {
    token: string
  }
}

const config: Config = ConfigJSON;
const client = new Discord.Client();

client.on('ready', () => { })
client.login(config.discord.token)
