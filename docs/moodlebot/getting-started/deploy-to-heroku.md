---
title: 🚀 Deploy to Heroku
hide_title: false
hide_table_of_contents: false
sidebar_label: Deploy to Heroku
description: Instructions to deploy the moodle notification service to Heroku
keywords:
  - moodle
  - notification
  - service
  - deploy
  - heroku
---

This article will help you to deploy your moodle notification service to Heroku. Make sure you to follow the instructions step by step.

:::tip
Student discount is available with the GitHub education pack. Click [here](https://education.github.com/pack) for more information.
:::

### 🏗️ Preparation

Make sure that you ...

1. have an account on [Heroku](https://www.heroku.com).
2. have access to a **Hobby Dyno**, because **it is required for this use case.**
3. have `.env` file from [these steps](setup-preparation.md).

### 🧚 Heroku is just a click away

Click here:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/tjarbo/discord-moodle-bot)

1. Give your application a fancy name and choose your region
2. Give it a name and fill all _empty_ environment variables with the values of your `.env` file.
3. Click _Deploy App_ and see the magic happen 🔮✨


### ✅ Yeah! 

You have successfully deployed your own fmdb to heroku! Within the *build log* you can find the url to access the admin panel.

:::note
When the notification service freshly starts, the discord cache will be empty. Maybe as a spam bot protection, the bot is only able to send messages to users it already knows. Send the bot a small "test" message to add your admin (discord) account to bots cache.  
:::
