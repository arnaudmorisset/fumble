import Discord from "discord.js";

import ConfigJSON from "../config.json";
import CommandParser from "./CommandParser";
import DiceRoller from "./DiceRoller";

interface Config {
  discord: {
    token: string;
  };
}

const config: Config = ConfigJSON;
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Bot started");
});

client.on("message", (message) => {
  if (message.content === "!fd") {
    const response = DiceRoller.roll();
    message.channel.send(response);
  }

  if (/^!fd[+-]\d/.test(message.content)) {
    const mod = CommandParser.getMod(message.content);
    const response = DiceRoller.roll(mod);
    message.channel.send(response);
  }
});

client.login(config.discord.token);
