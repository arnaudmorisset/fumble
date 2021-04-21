import Discord from "discord.js";

import ConfigJSON from "../config.json";

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
  if (message.content === "!beer") {
    message.channel.send("🍺");
  }
});

client.login(config.discord.token);
