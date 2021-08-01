---
title: Run on Docker
hide_title: true
hide_table_of_contents: false
description: Instructions to setup using Docker
keywords:
  - discord
  - moodle
  - bot
slug: /setup-with-docker
---
## ⛴️ Start your own bot with Docker!

:::caution
Maybe you need to run the following commands as `sudo`!
:::

This article helps you to start your fmdb with docker. This is cool, because you only have to install one software ... Docker 🐳🎉. Make sure that you have followed the steps [here](setup-preparation.md).

If you already have a MongoDB, skip step 1 and 2 and update the environment variable `MONGO_HOST` accordingly.

### Preparation

You need:

1. the `.env` file
2. A folder for the logs

### 1. Create a new Network

Create a new docker network, to connect the FMDB with MongoDB:

```bash
docker network create fmdb-network
```

### 2. Start MongoDB container

Start the MongoDB container with the following command. Update your `MONGO_HOST` with the name defined by `--name` if necessary.

```bash
docker run -d --net fmdb-network --name mongo mongo:latest
```

### 3. Start FMDB container

Now...let's start your FMDB! Just change the paths to `.env` and to the logs folder.

```bash
docker run -d --env-file /path/to/.env -v /path/to/logs:/usr/src/app/log --net fmdb-network --name fmdb -p 80:4040/tcp tjarbo/fmdb:latest
```

:::info
☄️ If you want to have the newest version (unstable - development branch), use the tjarbo/fmdb:next image
:::

### 4. Add SSL on public server

If you are running the fmdb on a public available sever, it's recommended to set up a HTTPS-Connection. We recommend the [Secure Web Application Gateway](https://github.com/linuxserver/docker-swag) by [LinuxServer.io](https://www.linuxserver.io/), but we are unable to provide any help in this case!

### ✅ Yeah!

Check if everything works properly by opening the logs in the given path. If you see `Mongoose connected` and `Logged in as <BOT-NAME>#<BOT-ID>`. If you can see both lines, everything seams to work and the interface will be available on port 80.

:::note
When the fmdb freshly starts, the discord cache will be empty. Maybe as a spam bot protection, the bot is only able to send messages to users it already know. Send the bot a small "test" message to add your admin (discord) account to bots cache.  
:::
