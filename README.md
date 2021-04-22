# fumble

[![Build and Test](https://github.com/arnaudmorisset/fumble/actions/workflows/build_and_test.yml/badge.svg?branch=main)](https://github.com/arnaudmorisset/fumble/actions/workflows/build_and_test.yml)

Run [Fate](https://fate-srd.com/) dices (aka [Fudge](https://www.fudgerpg.com/) dices) in [Discord](https://discord.com/).

## Installation

> This bot should be installed and configured manually using a Discord auth token.

## Usage

```markdown
!fd

# 1 Average
Details: [+] 0

---

!fd+2

# 3 Good
Details: [++-] 2
```

## Development

### Requirements

**NodeJS** 14.16.1+ and **NPM** 6.14.12+

**Discord auth token**: Can be obtain through [Discord's Developer Portal](https://discord.com/developers/docs/intro).

### Steps

```bash
# Create a local-only version of the config file.
cp config.sample.json config.json

# Put your Discord auth token in the local config file.

# Install dependencies.
npm install

# Build the project.
npm run build

# Optional: Run the test to be sure that everything is fine.
npm run test

# Start the bot.
npm run start
```
