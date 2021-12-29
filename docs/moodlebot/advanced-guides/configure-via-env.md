---
title: 🔧 Configure via environment variables
hide_title: false
hide_table_of_contents: false
sidebar_label: Configure via .env
description: Instructions to use the environment variables to configure the service without visiting the dashboard. 
keywords:
  - moodle
  - notification
  - service
  - configure
---

**tl;dr** You can use the environment variables to configure your service initially without opening the web interface

As you have probably already seen in the [.env overview](what-is-inside-env.md) there are many more variables available than just the required ones. These environment variables can be used to initially configure your service without having to open the web interface.

### Add a Discord Bot Connector

[`DISCORD_CHANNEL`](what-is-inside-env.md#discord_channel) and [`DISCORD_TOKEN`](what-is-inside-env.md#discord_token) can be used to create a Discord Bot Connector. The connector will be active and used as a default connector.

