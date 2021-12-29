---
title: 🐳 Deploy with Docker
hide_title: false
hide_table_of_contents: false
sidebar_label: Deploy with Docker
description: Instructions to deploy the moodle notification service with Docker
keywords:
  - moodle
  - notification
  - service
  - deploy
  - docker
---
This article will help you to deploy your notification service with docker.

### 🏗️ Preparation

Make sure that you ...

1. have have [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.
2. have a `.env` file from [these steps](preparation.md).

### 🆙 Deploy your container

1. Create a new folder and copy/paste your `.env` file here. This folder will store any data that needs to be persistent like the database.
2. In this folder, create a file named `docker-compose.yml` with the following content:

```yml
version: '3.1'

services:
  mongo:
    image: mongo
    restart: always
    volumes:
      - ./database:/data/db

  notification-service:
    image: tjarbo/notification-service:next
    restart: unless-stopped
    ports: 
      - 8080:4040
    links:
      - mongo
    env-file:
      - .env
    env:
      MONGO_HOST: mongodb://mongo:27017/notification-service
    volumes:
      # Uncomment to save logs independently from container  
      # - ./logs:/usr/src/app/log
```

3. Open the command line, navigate to your new created folder and enter the command `docker-compose up -d`.

:::note
The compose file currently uses the `next` tagged docker image that is based on the main branch but *maybe unstable*. After the first release of version 2, you can change this to `tjarbo/notification-service:latest`.
:::

### ✅ Done!

That's it! You have successfully deployed your own notification service.

:::info
If you plan to make the notification service public accessible, please be aware that the notification service is not managing any ssl certificates! You can use applications like the [Secure Web Application Gateway by LinuxServer.io](https://github.com/linuxserver/docker-swag) or the [NGINX Proxy Manger](https://nginxproxymanager.com/), but we are unable to provide any help in this case!
:::

### 📜 Access logs

Use the following command to access the logs: `docker-compose logs --timestamps notification-service`.
