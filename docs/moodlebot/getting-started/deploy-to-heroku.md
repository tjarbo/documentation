---
title: 🚀 Deploy to Heroku
hide_title: false
hide_table_of_contents: false
sidebar_label: Deploy to Heroku
description: Instructions to deploy the notification service for Moodle to Heroku
keywords:
  - moodle
  - notification
  - service
  - deploy
  - heroku
---

This article will help you to deploy your notification service to Heroku. Make sure you to follow the instructions step by step.

:::tip
Student discount is available with the GitHub education pack. Click [here](https://education.github.com/pack) for more information.
:::

### 🏗️ Preparation

Make sure that you ...

1. have an account on [Heroku](https://www.heroku.com).
2. have access to a **Hobby Dyno**, because **"always-on" is required for this use case.**
3. have `.env` file from [these steps](setup-preparation.md) and a [database](../advanced-guides/use-mongodb-atlas.md)


### 🧚 Heroku is just a click away

Click here:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/tjarbo/discord-moodle-bot)

1. Give your application a fancy name and choose your region
2. Give it a name and fill all _empty_ environment variables with the values of your `.env` file.
3. Make sure that the `MONGO_HOST` value end on &ssl=true 
4. Click _Deploy App_ and see the magic happen 🔮✨


### ✅ Yeah! 

You have successfully deployed your own notification service to Heroku! Within the [logs](https://devcenter.heroku.com/articles/logging#log-retrieval-via-the-web-dashboard) you can find the registration token and url to access the admin panel.

Make sure to convert your maybe free dyno to a hobby dyno with `always-on` enabled.
