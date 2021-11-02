---
title: 📦 Use MongoDB Atlas
hide_title: false
hide_table_of_contents: false
sidebar_label: MongoDB Atlas
description: How to setup a database with MongoDB Atlas
keywords:
  - moodle
  - notification
  - service
  - mongoDB Atlas
---

This article helps you to setup a database with MongoDB Atlas for your moodle notification service. Before you can start, make sure that you have an account for [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

:::tip
Student discount is available with the GitHub education pack. Click [here](https://education.github.com/pack) for more information.
:::

### 🔧 1. Setup your database

As this is a bit more complex, please follow the steps (parts) 1 to 4 of the official ["Get Started with Atlas"](https://docs.atlas.mongodb.com/getting-started) article. After you completed 1 to 4, came back here and continue your setup.

Please note for the single steps:

* *Part 1:* Choose `MongoDB Atlas`
* *Part 2:* nothing :)
* *Part 3:* Click on `Allow access from everywhere`

:::caution
 **Warning from [MongoDB Developer](https://developer.mongodb.com/how-to/use-atlas-on-heroku)**:  you probably don't want to allow this type of access in a production environment. Instead, you'll want to identify the exact IP addresses you know your application will be hosted on and explicitly set which IP addresses, or IP ranges, should have access to your cluster.
:::

* *Part 4:*
  * Choose a username as you like :)
  * **Choose a strong password!** and keep it, you will need it during the next steps

### 🔡 2. Get connection string from Atlas

Now it's time to get the connection string you will need for the .env-variable `MONGO_HOST`. It will look something like `mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true`.

1. In *Clusters* view, click **Connect** for the cluster to which you want to connect.
2. In *Choose a connection method* view, click **Connect your application**.
3. Select **Node.js** from the *Driver* dropdown.
4. Copy the provided connection string from the **Connection String Only** dialog tab.
5. Replace `<dbname>` or `myFirstDatabase` with `moodle-notification-service`.
6. Replace `<password>` with the password from cluster setup :) (Not the password of your MongoDB Atlas account!)
7. Save the link. You will need it during the next steps.

:::note
**Note from [docs.atlas.mongodb.com](https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster):** The connection string displayed in the console uses a placeholder value for the password. Replace that placeholder with the password specified when you created your database user.

If the password contains reserved URI characters, you must escape the characters. For example, if your password is @bc123, you must escape the @ character when specifying the password in the connection string, such as %40bc123. To learn more, see Special characters in connection string password.
:::

### 🔃 3. Update your environment variables

Open your `.env` file, set `MONGO_HOST=` to the string you got from [🔡 2. Get connection string from Atlas](#-2-get-connection-string-from-atlas) and append `&ssl=true` at the end.

**Example**:

```shell
...
MONGO_HOST=mongodb+srv://mydatabaseuser:SuperS3cur3P4ssw0rd@fmdbcluster.hmxhr.mongodb.net/notification-service?retryWrites=true&w=majority&ssl=true
...
```
