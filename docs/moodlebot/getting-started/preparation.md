---
title: 🍳 General preparation
hide_title: true
hide_table_of_contents: false
sidebar_label: Preparation
description: Prepare everything before you get started
keywords:
  - moodle
  - notification
  - service
  - prepare
---

Before you can start your own notification service, you need to set up your environment variables which store your Moodle credentials. The following steps will guide you through this process. At the end you should have your `.env` file ready!

### 📁 Create your file

Create a new file on you local filesystem and name it `.env`. In some cases your file will disappear immediately after you have created it. In this cases change your filemanager's settings to display hidden files.

Copy and paste code from this [page - section "Only required variables"](../advanced-guides/what-is-inside-env.md#only-required-variables). 

Set a strong secret for [`JWT_SECRET`](../advanced-guides/what-is-inside-env.md#-jwt_secret-%EF%B8%8F). You can use password generators like from [Lastpass](https://www.lastpass.com/de/password-generator) or [pwgen on linux](https://linux.die.net/man/1/pwgen). 

If you choose to run the bot with docker, you can keep the value of [`MONGO_HOST`](../advanced-guides/what-is-inside-env.md#-mongo_host). If not you will find the missing steps in the according _deploy-on_ guides.

### 🏫 Generate your new Moodle-Token

For this step, you need an existing Moodle account (that can be yours). This account needs access to all courses you want to receive notifications from.

We created an online tool, to make it as simple as possible for you: Open [fmdb.tjarbo.me](http://fmdb.tjarbo.me) and fill out the form to generate all required environment variables. Note, that no data will be stored or send to any other server than the submitted moodle server! Your credentials will be send to the official API of your moodle instance to receive a new token. You need the displayed results for the next step.  

:::info
Right now, SSO is not official supported ☹️ We need to figure out how to implement this authentication method. Lernraum Berlin ? -> Click [here](https://github.com/tjarbo/discord-moodle-bot/issues/83#issuecomment-757985921)
:::

### ㊙️ Setup your environment variables

This file contains the initial and background configuration of your FMDB. Create a new file `.env` on your system and copy and paste the template from [this page](what-is-inside-env.md). There you can also find a description about each variable. Make sure that:

- You have entered the Moodle values from the last step.
- You changed `JWT_SECRET` to a very strong value 1!11!!!1 

### ⏭️ What next ?

Now you are ready to deploy your moodle notification service. We have created multiple instructions for different cloud providers and methods. 

:::tip
Many of the chosen providers have a discount for student! 
::: 