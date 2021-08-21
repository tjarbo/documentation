---
title: What is inside .env ?
hide_title: true
hide_table_of_contents: false
description: Description of .env
keywords:
  - discord
  - moodle
  - bot
slug: /whats-inside-env
---
## 🎭 Templates

### Only requiered variables

```bash
ADMIN_ID=00000...000
ADMIN_NAME=username#00000
DISCORD_CHANNEL=00000...000
DISCORD_TOKEN=XXXXXX....XXX
JWT_SECRET=
MONGO_HOST=mongodb://mongo:27017/fmdb
MOODLE_BASE_URL=https://moodle.example.com/
MOODLE_TOKEN=XXXXXXXXXXXXXXXXX
MOODLE_USERID=00000
```

### All available variables

```bash
ADMIN_ID=00000...000
ADMIN_NAME=username#00000
DISCORD_CHANNEL=00000...000
DISCORD_TOKEN=XXXXXX....XXX
JWT_SECRET=
JWT_EXPIRESIN=10m
MONGO_HOST=mongodb://mongo:27017/fmdb
MONGOOSE_DEBUG=false
MOODLE_BASE_URL=https://moodle.example.com/
MOODLE_FETCH_INTERVAL=900000
MOODLE_REMINDER_TIME_LEFT=86400
MOODLE_TOKEN=XXXXXXXXXXXXXXXXX
MOODLE_USE_COURSE_SHORTNAME=true
MOODLE_USERID=00000
NODE_ENV=production
PORT=4040
```

## 🤓 Description

Here you can finde a detailed description of available environment variables. Variables marked with 🔴 *are required* !

### 🔴 ADMIN_ID

Discord-Id of the initial administrator. More can be added later via web interface. To get the id, activate the "Developer Mode" in Discord. More information can you find [here](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).

* **Requirements:** Type of number. 
* **Example:** `912309123909091230992`

### 🔴 ADMIN_NAME

Username of the initial administrator in form of `username#0000`. More can be added later via web interface.

* **Requirements:** Type of string; Needs to match `/^[\w\s]{2,32}#\d{4}$/`
* **Example:** `user name#1234`

### 🔴 DISCORD_CHANNEL

Id of the channel in discord, where all notification should be published. To get the id, activate the "Developer Mode" in Discord. More information can you find [here](https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-).

* **Requirements:** Type of number
* **Example:** `912309123909091230992`

### 🔴 DISCORD_TOKEN

Token you got from the Discord-Developer-Portal. Instructions, how you can create your own token, can you [here](setup-preparation#-create-a-new-discord-bot)

* **Requirements:** Type of string
* **Example:** `123asdasd.asdk123m123bk123123.n23kn1n2k3nk123`

### 🔴 JWT_SECRET :warning:

Secret that is used to sign your authentication token. **Choose a very strong secret!** You do not have to save it, but **it must be strong!**

* **Requirements:** Type of string;
* **Example:** `ks454DF)ad!sd084!`

### JWT_EXPIRESIN

Defines, how long you will stay logged in at the web interface. `10m` is a good value.

* **Requirements:** Type of string; unit at the end
* **Default value:** `10m`
* **Example:** `3h`

### 🔴 MONGO_HOST

Path to your mongodb instance.

* **Requirements:** Type of string
* **Example:** `mongodb://mongo:27017/fmdb?ssl=true`

### MONGOOSE_DEBUG (only needed for development)

Activates logging of mongodb queries. Only needed for development.

* **Requirements:** Boolean (`true` or `false`)
* **Default value:** `false`
* **Example:** `false`

### 🔴 MOODLE_BASE_URL

The URL where the moodle instance is running. You can check and generate this variable on https://fmdb.tjarbo.me.

* **Requirements:** Type of string and a valid RFC 3986 URI
* **Example:** `https://moodle.myuniversity.edu`

### MOODLE_FETCH_INTERVAL

Defines how often the FMDB looks for updates on the moodle instance. Interval *in milliseconds*.

* **Requirements:** Type of number
* **Default value:** `900000`
* **Example:** `1500000`

### MOODLE_REMINDER_TIME_LEFT

If the remaining time of a submission is less than the specified time, a notification will be sent. Time *in seconds*.

* **Requirements:** Type of number
* **Default value:** `86400`
* **Example:** `86400`

### 🔴 MOODLE_TOKEN

Token to log in to the specified Moodle instance. You can maybe get this from your settings or from https://fmdb.tjarbo.me.

* **Requirements:** Type of string
* **Example:** `asdbasd123asdb123123jnj5234nbadjn12332`

### MOODLE_USE_COURSE_SHORTNAME

Whether to use short- or fullname of the courses in the discord message.

* **Requirements:** Boolean (`true` or `false`)
* **Default value:** `true`
* **Example:** `false`

### 🔴 MOODLE_USERID

Your user id on the specified Moodle instance. It is part of the URL if you open your Moodle-Profile. https://fmdb.tjarbo.me can help you with this.

* **Requirements:** Type of number
* **Example:** `12345`

### NODE_ENV

Defines the environment, where the bot will be started.

* **Requirements:** Only allowed values: `development`, `production`, `test`, `provision`
* **Default value:** `production`
* **Example:** `development`

### PORT

Defines on which Port your sever listens.

* **Requirements:** Needs to be a number
* **Default value:** `4040`
* **Example:** `8080`
