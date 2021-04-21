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
  if (message.content === "!fd") {
    const rolls = rollDices();
    const score = count(rolls, "+") - count(rolls, "-");
    const grade = getGrade(score);
    const response = "[" + rolls.join("") + "]" + " => " + score + " " + grade;

    message.channel.send(response);
  }
});

const rollDices = (): string[] => {
  const rolls = [""];

  for (let i = 0; i < 4; i++) {
    const diceResult = Math.floor(Math.random() * 6);
    if (diceResult === 0 || diceResult === 1) {
      rolls[i] = "-";
    } else if (diceResult === 5 || diceResult === 6) {
      rolls[i] = "+";
    }
  }

  return rolls;
};

const getGrade = (score: number): string => {
  if (score <= -2) return "Terrible";
  if (score === -1) return "Poor";
  if (score === 0) return "Mediocre";
  if (score === +1) return "Average";
  if (score === +2) return "Fair";
  if (score === +3) return "Good";
  if (score === +4) return "Great";
  if (score === +5) return "Superb";
  if (score === +6) return "Fantastic";
  if (score === +7) return "Epic";
  if (score === +8) return "Legendary";

  return "Unkown";
};

const count = <T>(arr: Array<T>, val: T): number =>
  arr.reduce((acc, cur) => (cur === val ? ++acc : acc), 0);

client.login(config.discord.token);
