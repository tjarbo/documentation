---
title: Preparation
hide_title: true
hide_table_of_contents: false
description: Prepare discord and moodle to run the fmdb
keywords:
  - discord
  - moodle
  - bot
slug: /setup-prepare
---

## 🍳 General preparation
Before you can start your own bot, you need to set up your own Discord-Bot and to generate your Moodle credentials. The following steps will guide you through this process. Then you will create the `.env` file.

### 🤖 Create a new Discord-Bot

Because there is already a good instruction out there about how to set up a new discord bot, please follow all the steps described in [this](https://discordpy.readthedocs.io/en/latest/discord.html) article.

The important points are:
- Save the token from step 7 (section 1). You will need it later for the environment variables (`DISCORD_TOKEN=`)
- Give the bot all *Text Permissions*


### 🏫 Generate your new Moodle-Token

For this step, you need an existing Moodle account (that can be yours). This account needs access to all courses you want to receive notifications from.

We created an online tool, to make it as simple as possible for you: Open [fmdb.tjarbo.me](http://fmdb.tjarbo.me) and fill out the form to generate all required environment variables. Note, that no data will be stored or send to any other server than the submitted moodle server! Your credentials will be send to the official API of your moodle instance to receive a new token. You need the displayed results for the next step.  

:::info
Right now, SSO is not official supported ☹️ We need to figure out how to implement this authentication method. Lernraum Berlin ? -> Click [here](https://github.com/tjarbo/discord-moodle-bot/issues/83#issuecomment-757985921)
:::

### ㊙️ Setup your environment variables

This file contains the initial and background configuration of your FMDB. Create a new file `.env` on your system and copy and paste the template from [this page](whats-inside-env). There you can also find a description about each variable. Make sure that:

- You have entered the Discord token you saved from the first step.
- You have entered the Moodle values from the last step.
- `NODE_ENV` is set to `PRODUCTION`
- You changed `JWT_SECRET` to a very strong value !!! (You can use a [password generator](https://www.lastpass.com/password-generator) for this)

### ⏭️ What next ?

Now you are ready to setup your own fmdb! You can choose between
* [Docker (recommended)](setup-with-docker) 🐳
* [Heroku & MongoDB Atlas (cloud)](setup-with-heroku-mongodb-atlas)
