---
title: 🚀 Deploy on Azure
hide_title: false
hide_table_of_contents: false
sidebar_label: Deploy on Azure
description: Instructions to deploy the notification service for Moodle on Azure
keywords:
  - moodle
  - notification
  - service
  - deploy
  - azure
---

This article will help you to deploy your notification service to Azure. You can choose between the standard approach using a *VM which is managed by yourself* or to use an *App Service* which manages everything for you. But this comes with a higher price.
Please follow the instructions step by step.

:::tip
Azure provides free credits for students. More information [here](https://azure.microsoft.com/en-us/free/students/)
:::

### 🖥️ Deploy as VM

To deploy the notification service in VM on Azure, make sure that you have ...

1. an account on [Azure](https://portal.azure.com) and an active subscription.
2. access to [Azure Cloud Shell](https://docs.microsoft.com/azure/cloud-shell/quickstart)

Afterwards I refer to [this article](https://docs.microsoft.com/azure/virtual-machines/linux/quick-create-portal) by Microsoft docs to setup a new Linux VM to avoid outdated information.
You can stop as soon as you have shell access to your VM via SSH; You do not need to install a web server.

Then you can continue at the beginning of [Deploy-with-Docker](./deploy-with-docker.md).

### 🆙 Deploy as App Service

To deploy the notification service as App Service make sure that you have ...

1. an account on [Azure](https://portal.azure.com) and an active subscription.
2. access to [Azure Cloud Shell](https://docs.microsoft.com/azure/cloud-shell/quickstart)
3. a `.env` file from [these steps](setup-preparation.md)
4. access to a MongoDB database like from [MongoDB Atlas](../preparation/use-mongodb-atlas.md)

Open the *Azure Cloud Shell* and you are ready

:::info
Docker has changed its rate limits on unauthenticated pull requests from Docker Hub. This can cause issues while using Docker Hub and Azure App Services. More information and a solution you can find [here](https://azure.github.io/AppService/2020/10/15/Docker-Hub-authenticated-pulls-on-App-Service.html).
:::

#### 1. Get your wanted location and create new Resource Group

If you not already have, set your default subscription.

```azurecli
az account set --subscription XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```  

Receive a list of all available locations with `az account list-locations` and choose your favorite location. Then use the following command to create a new resource group, replace `westus` with you selected location.

```azurecli
az group create --name notification-service-rg --location westus
az config set defaults.group=notification-service-rg defaults.location=westus
```  

The second command is used to set the default resource group and location. Please keep in mind that you need to changes these values if you are using the Azure CLI also for other projects.

#### 2. Create an App Service

Choose a cool app name for the notification service. The name will be used for the final url `https://[app name].azurewebsites.net`. Use this URL for the `RP_ORIGIN` in your `.env` (e.g `RP_ORIGIN=https://notification-service.azurewebsites.net`). Replace `app-name` in every following command with your chosen name.

To create the app service, use the following command:

```azurecli
az webapp config container set --name app-name --docker-custom-image-name tjarbo/notification-service:latest
```

Now it is time to apply you `.env`. If your file is located in your working directory in your *Azure Cloud Shell* you can execute this command

```azurecli
az webapp config appsettings set -n app-name --settings @.env
```

If not, it becomes a bit more work, as you need to apply each line of `.env` to the following command (KEY=value pairs are separated by a whitespace)

```azurecli
az webapp config appsettings set -n app-name --settings MONGO_HOST=mongodb://mongo:27017/fmdb MOODLE_BASE_URL=https://moodle...
```

Finally validate everything with `az webapp config appsettings list -n app-name`

### ✅ Yeah!

<!-->
