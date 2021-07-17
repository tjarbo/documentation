(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[286],{1246:function(e,t,o){"use strict";o.r(t),o.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var r=o(2122),a=o(9756),n=(o(7294),o(3905)),i=["components"],l={title:"Preparation",hide_title:!0,hide_table_of_contents:!1,description:"Prepare discord and moodle to run the fmdb",keywords:["discord","moodle","bot"],slug:"/setup-prepare"},s={unversionedId:"Setup - preparation",id:"Setup - preparation",isDocsHomePage:!1,title:"Preparation",description:"Prepare discord and moodle to run the fmdb",source:"@site/moodlebot/Setup - preparation.md",sourceDirName:".",slug:"/setup-prepare",permalink:"/moodle-notification-service/setup-prepare",editUrl:"https://github.com/tjarbo/documentation/tree/master/docs/moodlebot/moodlebot/Setup - preparation.md",version:"current",frontMatter:{title:"Preparation",hide_title:!0,hide_table_of_contents:!1,description:"Prepare discord and moodle to run the fmdb",keywords:["discord","moodle","bot"],slug:"/setup-prepare"},sidebar:"tutorialSidebar",previous:{title:"Home",permalink:"/moodle-notification-service/home"},next:{title:"Run on Docker",permalink:"/moodle-notification-service/setup-with-docker"}},d=[{value:"\ud83c\udf73 General preparation",id:"-general-preparation",children:[{value:"\ud83e\udd16 Create a new Discord-Bot",id:"-create-a-new-discord-bot",children:[]},{value:"\ud83c\udfeb Generate your new Moodle-Token",id:"-generate-your-new-moodle-token",children:[]},{value:"\u23ed\ufe0f What next ?",id:"\ufe0f-what-next-",children:[]}]}],u={toc:d};function p(e){var t=e.components,o=(0,a.Z)(e,i);return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"-general-preparation"},"\ud83c\udf73 General preparation"),(0,n.kt)("p",null,"Before you can start your own bot, you need to set up your own Discord-Bot and to generate your Moodle credentials. The following steps will guide you through this process. Then you will create the ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," file."),(0,n.kt)("h3",{id:"-create-a-new-discord-bot"},"\ud83e\udd16 Create a new Discord-Bot"),(0,n.kt)("p",null,"Because there is already a good instruction out there about how to set up a new discord bot, please follow all the steps described in ",(0,n.kt)("a",{parentName:"p",href:"https://discordpy.readthedocs.io/en/latest/discord.html"},"this")," article."),(0,n.kt)("p",null,"The important points are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Save the token from step 7 (section 1). You will need it later for the environment variables (",(0,n.kt)("inlineCode",{parentName:"li"},"DISCORD_TOKEN="),")"),(0,n.kt)("li",{parentName:"ul"},"Give the bot all ",(0,n.kt)("em",{parentName:"li"},"Text Permissions"))),(0,n.kt)("h3",{id:"-generate-your-new-moodle-token"},"\ud83c\udfeb Generate your new Moodle-Token"),(0,n.kt)("p",null,"For this step, you need an existing Moodle account (that can be yours). This account needs access to all courses you want to receive notifications from."),(0,n.kt)("p",null,"We created an online tool, to make it as simple as possible for you: Open ",(0,n.kt)("a",{parentName:"p",href:"http://fmdb.tjarbo.me"},"fmdb.tjarbo.me")," and fill out the form to generate all required environment variables. Note, that no data will be stored or send to any other server than the submitted moodle server! Your credentials will be send to the official API of your moodle instance to receive a new token. You need the displayed results for the next step.  "),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Right now, SSO is not official supported \u2639\ufe0f We need to figure out how to implement this authentication method. Lernraum Berlin ? -> Click ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/tjarbo/discord-moodle-bot/issues/83#issuecomment-757985921"},"here")),(0,n.kt)("h3",{parentName:"blockquote",id:"\ufe0f-setup-your-environment-variables"},"\u3299\ufe0f Setup your environment variables")),(0,n.kt)("p",null,"This file contains the initial and background configuration of your FMDB. Create a new file ",(0,n.kt)("inlineCode",{parentName:"p"},".env")," on your system and copy and paste the template from ",(0,n.kt)("a",{parentName:"p",href:"whats-inside-env"},"this page"),". There you can also find a description about each variable. Make sure that:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have entered the Discord token you saved from the first step."),(0,n.kt)("li",{parentName:"ul"},"You have entered the Moodle values from the last step."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"NODE_ENV")," is set to ",(0,n.kt)("inlineCode",{parentName:"li"},"PRODUCTION")),(0,n.kt)("li",{parentName:"ul"},"You changed ",(0,n.kt)("inlineCode",{parentName:"li"},"JWT_SECRET")," to a very strong value !!! (You can use a ",(0,n.kt)("a",{parentName:"li",href:"https://www.lastpass.com/password-generator"},"password generator")," for this)")),(0,n.kt)("h3",{id:"\ufe0f-what-next-"},"\u23ed\ufe0f What next ?"),(0,n.kt)("p",null,"Now you are ready to setup your own fmdb! You can choose between"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"setup-with-docker"},"Docker (recommended)")," \ud83d\udc33"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"setup-with-heroku-mongodb-atlas"},"Heroku & MongoDB Atlas (cloud)"))))}p.isMDXComponent=!0}}]);