(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[459],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return u}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7284:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var o=n(2122),r=n(9756),i=(n(7294),n(3905)),a=["components"],c={title:"\ud83d\udc33 Deploy with Docker",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Deploy with Docker",description:"Instructions to deploy the Notification Service for Moodle with Docker",keywords:["moodle","notification","service","deploy","docker"]},l={unversionedId:"getting-started/deploy-with-docker",id:"getting-started/deploy-with-docker",isDocsHomePage:!1,title:"\ud83d\udc33 Deploy with Docker",description:"Instructions to deploy the Notification Service for Moodle with Docker",source:"@site/moodlebot/getting-started/deploy-with-docker.md",sourceDirName:"getting-started",slug:"/getting-started/deploy-with-docker",permalink:"/moodle-notification-service/2.0.0/getting-started/deploy-with-docker",editUrl:"https://github.com/tjarbo/documentation/tree/master/docs/moodlebot/moodlebot/getting-started/deploy-with-docker.md",version:"current",sidebar_label:"Deploy with Docker",frontMatter:{title:"\ud83d\udc33 Deploy with Docker",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"Deploy with Docker",description:"Instructions to deploy the Notification Service for Moodle with Docker",keywords:["moodle","notification","service","deploy","docker"]},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udf73 General preparation",permalink:"/moodle-notification-service/2.0.0/getting-started/preparation"},next:{title:"\ud83d\ude80 Deploy to Heroku",permalink:"/moodle-notification-service/2.0.0/getting-started/deploy-to-heroku"}},s=[{value:"\ud83c\udfd7\ufe0f Preparation",id:"\ufe0f-preparation",children:[]},{value:"\ud83c\udd99 Deploy your container",id:"-deploy-your-container",children:[]},{value:"\u2705 Done!",id:"-done",children:[]},{value:"\ud83d\udcdc Access logs",id:"-access-logs",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This article will help you to deploy your notification service with docker."),(0,i.kt)("h3",{id:"\ufe0f-preparation"},"\ud83c\udfd7\ufe0f Preparation"),(0,i.kt)("p",null,"Make sure that you ..."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"have have ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," and ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," installed."),(0,i.kt)("li",{parentName:"ol"},"have a ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file from ",(0,i.kt)("a",{parentName:"li",href:"/moodle-notification-service/2.0.0/getting-started/preparation"},"these steps"),".")),(0,i.kt)("h3",{id:"-deploy-your-container"},"\ud83c\udd99 Deploy your container"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a new folder and copy/paste your ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file here. This folder will store any data that needs to be persistent like the database."),(0,i.kt)("li",{parentName:"ol"},"In this folder, create a file named ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose.yml")," with the following content:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yml"},"version: '3.1'\n\nservices:\n  mongo:\n    image: mongo\n    restart: always\n    volumes:\n      - ./database:/data/db\n\n  notification-service:\n    image: tjarbo/notification-service:next\n    restart: unless-stopped\n    ports: \n      - 8080:4040\n    links:\n      - mongo\n    env-file:\n      - .env\n    env:\n      MONGO_HOST: mongodb://mongo:27017/notification-service\n    volumes:\n      # Uncomment to save logs independently from container.\n      # Requires env: 'LOG_TO_FILE: true' \n      # - ./logs:/usr/src/app/log\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Open the command line, navigate to your new created folder and enter the command ",(0,i.kt)("inlineCode",{parentName:"li"},"docker-compose up -d"),".")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The compose file currently uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," tagged docker image that is based on the main branch but ",(0,i.kt)("em",{parentName:"p"},"maybe unstable"),". After the first release of version 2, you can change this to ",(0,i.kt)("inlineCode",{parentName:"p"},"tjarbo/notification-service:latest"),"."))),(0,i.kt)("h3",{id:"-done"},"\u2705 Done!"),(0,i.kt)("p",null,"That's it! You have successfully deployed your own notification service."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you plan to make the notification service public accessible, please be aware that the notification service is not managing any ssl certificates! You can use applications like the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/linuxserver/docker-swag"},"Secure Web Application Gateway by LinuxServer.io")," or the ",(0,i.kt)("a",{parentName:"p",href:"https://nginxproxymanager.com/"},"NGINX Proxy Manger"),", but we are unable to provide any help in this case!"))),(0,i.kt)("h3",{id:"-access-logs"},"\ud83d\udcdc Access logs"),(0,i.kt)("p",null,"Use the following command to access the logs: ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose logs --timestamps notification-service"),"."))}d.isMDXComponent=!0}}]);