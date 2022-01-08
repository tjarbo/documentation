---
title: 🚀 Deploy on Azure
hide_title: false
hide_table_of_contents: false
sidebar_label: Deploy on Azure
description: Instructions to deploy the Notification Service for Moodle on Azure
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
2. access to [Azure Cloud Shell](https://docs.microsoft.com/azure/cloud-shell/quickstart) or to a [working az cli](https://docs.microsoft.com/cli/azure/get-started-with-azure-cli)
3. a `.env` file from [these steps](preparation.md)
4. access to a MongoDB database like from [MongoDB Atlas](../advanced-guides/use-mongodb-atlas.md)

Open the *Azure Cloud Shell* and you are ready

:::info
Docker has changed its rate limits on unauthenticated pull requests from Docker Hub. This can cause issues while using Docker Hub and Azure App Services. More information and a solution you can find [here](https://azure.github.io/AppService/2020/10/15/Docker-Hub-authenticated-pulls-on-App-Service.html).
:::

#### 1. Get your wanted location and create new Resource Group

If you not already have, set your default subscription.

```azurecli
az account set --subscription XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```  

Receive a list of all available locations with `az account list-locations` and choose your favorite location. Then use the following command to create a new resource group, replace `westus` with your selected location.

```azurecli
az group create --name notification-service-rg --location westus
az config set defaults.group=notification-service-rg defaults.location=westus
```  

The second command is used to set the default resource group and location. Please keep in mind that you need to changes these values if you are using the Azure CLI also for other projects.

#### 2. Create an App Service Plan

An [Azure App Service plan](https://docs.microsoft.com/azure/app-service/overview-hosting-plans) can be described as the plan for the infrastructure your Azure App Service will use. So it will define your monthly costs. There are many different plans available - for this tutorial, we have chosen the *B1* SKU. Feel free to change it for your needs.

```azurecli
az appservice plan create -n notification-service-asp --is-linux --sku B1
```

#### 3. Create an App Service

Choose a cool app name for the notification service. The name will be used for the final url `https://[app name].azurewebsites.net`. Use this URL for the `RP_ORIGIN` and `RP_ID` in your `.env` (e.g `RP_ORIGIN=https://notification-service.azurewebsites.net`). Replace `APP_NAME` in every following command with your chosen name.

To create the app service and set the docker image, use the following command:
```azurecli
az webapp create -p notification-service-asp -i registry.hub.docker.com/tjarbo/notification-service:next -n APP_NAME
```

Next step is to apply the environment variables. Therefore you have two options. Before you continue, make sure that your `.env` values does not contain any whitespace or special characters like `$`, `()` or `#`.

If your file is located in your working directory in your *Azure Cloud Shell* you can execute the next command as the first option ([How Cloud Shell storage works](https://docs.microsoft.com/en-us/azure/cloud-shell/persisting-shell-storage#how-cloud-shell-storage-works) and [Transfer local files to Cloud Shell](https://docs.microsoft.com/en-us/azure/cloud-shell/persisting-shell-storage#transfer-local-files-to-cloud-shell)):

```azurecli
az webapp config appsettings set --settings $(<.env) -n APP_NAME
```

If not, it becomes a bit more work, as you need to apply each line of `.env` to the following command (KEY=value pairs are separated by a whitespace)

```azurecli
az webapp config appsettings set -n APP_NAME --settings MONGO_HOST=mongodb://mongo:27017/fmdb MOODLE_BASE_URL=https://moodle...
```

Validate the output that every variable has been set correctly. Additional variables displayed like `DOCKER_REGISTRY_SERVER_URL` just ignore them.

To know, whats going on with your Notification Service, use the following command to active the logging. You will need the logs to get your registration token.

```azurecli
az webapp log config --application-logging filesystem --docker-container-logging filesystem --web-server-logging off -n APP_NAME
```

### ✅ Yeah!

Wow, you have successfully deploy your own Notification Service on Azure! Now you are ready to get started. **Open the web interface to trigger the initialization process** with `az webapp browse --name APP_NAME` and then use the commands from the [next section](#-access-logs) to open the logs and get your registration token!

### 📜 Access logs

You can either access the logs via `portal.azure.com` -> Open the new app service -> *Log stream* or by using the following command:

```azurecli
az webapp log tail -n APP_NAME
```
