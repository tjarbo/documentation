---
title: Run on Heroku and MongoDB Atlas
hide_title: true
hide_table_of_contents: false
description: Instructions to setup fmdb on Heroku and MongoDB Atlas
keywords:
  - discord
  - moodle
  - bot
slug: /setup-with-heroku-mongodb-atlas
---

## 🚀 Start your own bot with Heroku and MongoDB Atlas!

This article helps you to run your own fmdb on Heroku and MongoDB Atlas. Both products are useful as they are part of [GitHub's education pack.](https://education.github.com/pack/) 🎉 So if you are a student or a pupil make sure, you checked it out! Because then you can run one **Hobby Dyno** for free, what **is necessary for this use case.**

Before you start, follow the steps described [here](https://github.com/tjarbo/discord-moodle-bot/wiki/Setup-your-own-bot).

### Preparation

You need
1. an account on [Heroku](https://www.heroku.com)
2. an account on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
3. a `.env` file from [these steps](setup-prepare).

### 1. Setup you MongoDB

As this is a bit more complex, please follow the steps (parts) 1 to 4 of the official ["Get Started with Atlas"](https://docs.atlas.mongodb.com/getting-started) article. After you completed 1 to 4, came back here and continue your setup.

Please note for the single steps:
* *Part 1:* 
    * Choose 'MongoDB Atlas'
* *Part 2:* nothing :)
* *Part 3:* 
    * Click on `Allow access from everywhere`
:::caution
 **Warning from [MongoDB Developer](https://developer.mongodb.com/how-to/use-atlas-on-heroku)**:  you probably don't want to allow this type of access in a production environment. Instead, you'll want to identify the exact IP addresses you know your application will be hosted on and explicitly set which IP addresses, or IP ranges, should have access to your cluster. After setting up your Heroku app, follow the steps in the "Configuring Heroku IP Addresses in Atlas" section below to see *how to add the proper IP addresses for your Heroku app.*
:::

* *Part 4:*
    * Choose a username as you like :) 
    * **Choose a strong password!** and keep it, you will need it during the next steps

### 2. Get connection string from Atlas

Now it's time to get the connection string you will need for the .env-variable "MONGO_HOST". It will look something like `mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`.

1. In *Clusters* view, click **Connect** for the cluster to which you want to connect.
2. In *Choose a connection method* view, click **Connect your application**.
3. Select **Node.js** from the *Driver* dropdown.
4. Copy the provided connection string from the **Connection String Only** dialog tab.
5. Replace `<dbname>` with `fmdb`.
6. Replace `<password>` with the password from cluster setup :) (Not the password of your MongoDB Atlas account!)
7. Save the link. You will need it during the next steps.
 
:::note
**Note from [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster):** The connection string displayed in the console uses a placeholder value for the password. Replace that placeholder with the password specified when you created your database user.

If the password contains reserved URI characters, you must escape the characters. For example, if your password is @bc123, you must escape the @ character when specifying the password in the connection string, such as %40bc123. To learn more, see Special characters in connection string password.
:::

### 3. Update your environment variables

Open your `.env` file, set `MONGO_HOST=` to the string you got from [step 1](#1-setup-you-mongodb) and append `&ssl=true` at the end.
 
**Example**:
```shell
...
MONGO_HOST=mongodb+srv://mydatabaseuser:SuperS3cur3P4ssw0rd@fmdbcluster.hmxhr.mongodb.net/fmdb?retryWrites=true&w=majority&ssl=true
...
```

### 4. Create a new app on Heroku with just a click

Click here:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/heroku/node-js-getting-started)

1. Give your application a fancy name and choose your region
2. Give it a name and fill all *empty* environment variables with the values of your `.env` file.
3. Click "Deploy App" and see the magic happen 🔮✨


### ✅ Yeah! 

You have successfully deployed your own fmdb to heroku! Within the *build log* you can find the url to access the admin panel.

:::note
When the fmdb freshly starts, the discord cache will be empty. Maybe as a spam bot protection, the bot is only able to send messages to users it already knows. Send the bot a small "test" message to add your admin (discord) account to bots cache.  
:::
