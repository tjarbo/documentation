---
title: 🔑 What is Passwordless Authentication?
hide_title: false
hide_table_of_contents: false
sidebar_label: Passwordless Authentication
description: What is passwordless authentication?
keywords:
  - moodle
  - notification
  - server
  - login
  - passwordless
---

Since version 2.0 the Moodle Notification Service uses WebAuthn to authenticate (login) users. That means as a user you do not have to own a discord account anymore or to remember a strong complex password. Instead, the Service uses modern crypto technologies to make sure only allowed administrators can access the dashboard and make changes. The required technologies are built into the most modern PCs. As a rule of thumb, if your PC is ready for Windows 11 without any workaround, or you can use Windows Hello, you are ready to go passwordless! If you are using macOS® with the latest updates on a not so old Mac®, it should work too. But if you are still not sure, checkout [this section](#-i-am-not-sure-if-i-can-use-webauthn). To learn more about WebAuth, click [here](https://webauthn.guide/).

## 🚪 What does this mean for the Moodle Notification Service?

* Our recommendation is to use a Chromium based browser like "Google Chrome", as Firefox only supports [Security Keys](#what-are-security-keys).
* You have to use WebAuthn! There is an [open issue](https://github.com/tjarbo/discord-moodle-bot/issues/131) to implement an alternative "one-time" login method, but it is recommended to become passwordless ready!
* As long you are not using a [Security Key](#what-are-security-keys) you have to add a new admin for each device, that you want to use to manage the Moodle Notification Service from.

## 😰 I am not sure if I can use WebAuthn

No worries, there is a website called [webauthn.io](https://webauthn.io/) which is a demo application for WebAuthn. Try to register and login with a random username. If it works, you are ready to use the Moodle Notification Service. If you can not, then you can use the alternative login method (coming soon; [issue 131](https://github.com/tjarbo/discord-moodle-bot/issues/131)).

## 🔑 What are Security Keys?

Security Keys allows you to authenticate yourself on different devices with the same account. There are several keys out there like from Yubico, Nitrokey, Google, SoloKeys and many more. Just make sure that your key supports *FIDO2* (or "WebAuthn")!

---
Mac® and macOS® are trademarks of Apple Inc., registered in the U.S. and other countries and regions.