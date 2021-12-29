(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[434],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4369:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],s={title:"\ud83d\udce6 Use MongoDB Atlas",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"MongoDB Atlas",description:"How to setup a database with MongoDB Atlas",keywords:["moodle","notification","service","mongoDB Atlas"]},l={unversionedId:"advanced-guides/use-mongodb-atlas",id:"advanced-guides/use-mongodb-atlas",isDocsHomePage:!1,title:"\ud83d\udce6 Use MongoDB Atlas",description:"How to setup a database with MongoDB Atlas",source:"@site/moodlebot/advanced-guides/use-mongodb-atlas.md",sourceDirName:"advanced-guides",slug:"/advanced-guides/use-mongodb-atlas",permalink:"/moodle-notification-service/2.0.0/advanced-guides/use-mongodb-atlas",editUrl:"https://github.com/tjarbo/documentation/tree/master/docs/moodlebot/moodlebot/advanced-guides/use-mongodb-atlas.md",version:"current",sidebar_label:"MongoDB Atlas",frontMatter:{title:"\ud83d\udce6 Use MongoDB Atlas",hide_title:!1,hide_table_of_contents:!1,sidebar_label:"MongoDB Atlas",description:"How to setup a database with MongoDB Atlas",keywords:["moodle","notification","service","mongoDB Atlas"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udd27 What is inside .env ?",permalink:"/moodle-notification-service/2.0.0/advanced-guides/what-is-inside-env"},next:{title:"\ud83d\udd11 What is Passwordless Authentication?",permalink:"/moodle-notification-service/2.0.0/advanced-guides/what-is-passwordless"}},c=[{value:"\ud83d\udd27 1. Setup your database",id:"-1-setup-your-database",children:[]},{value:"\ud83d\udd21 2. Get connection string from Atlas",id:"-2-get-connection-string-from-atlas",children:[]},{value:"\ud83d\udd03 3. Update your environment variables",id:"-3-update-your-environment-variables",children:[]}],d={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article helps you to setup a database with MongoDB Atlas for your moodle notification service. Before you can start, make sure that you have an account for ",(0,r.kt)("a",{parentName:"p",href:"https://www.mongodb.com/cloud/atlas"},"MongoDB Atlas"),"."),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Student discount is available with the GitHub education pack. Click ",(0,r.kt)("a",{parentName:"p",href:"https://education.github.com/pack"},"here")," for more information."))),(0,r.kt)("h3",{id:"-1-setup-your-database"},"\ud83d\udd27 1. Setup your database"),(0,r.kt)("p",null,"As this is a bit more complex, please follow the steps (parts) 1 to 4 of the official ",(0,r.kt)("a",{parentName:"p",href:"https://docs.atlas.mongodb.com/getting-started"},'"Get Started with Atlas"')," article. After you completed 1 to 4, came back here and continue your setup."),(0,r.kt)("p",null,"Please note for the single steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Part 1:")," Choose ",(0,r.kt)("inlineCode",{parentName:"li"},"MongoDB Atlas")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Part 2:")," nothing :)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Part 3:")," Click on ",(0,r.kt)("inlineCode",{parentName:"li"},"Allow access from everywhere"))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"}," ",(0,r.kt)("strong",{parentName:"p"},"Warning from ",(0,r.kt)("a",{parentName:"strong",href:"https://developer.mongodb.com/how-to/use-atlas-on-heroku"},"MongoDB Developer")),":  you probably don't want to allow this type of access in a production environment. Instead, you'll want to identify the exact IP addresses you know your application will be hosted on and explicitly set which IP addresses, or IP ranges, should have access to your cluster."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Part 4:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Choose a username as you like :)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Choose a strong password!")," and keep it, you will need it during the next steps")))),(0,r.kt)("h3",{id:"-2-get-connection-string-from-atlas"},"\ud83d\udd21 2. Get connection string from Atlas"),(0,r.kt)("p",null,"Now it's time to get the connection string you will need for the .env-variable ",(0,r.kt)("inlineCode",{parentName:"p"},"MONGO_HOST"),". It will look something like ",(0,r.kt)("inlineCode",{parentName:"p"},"mongodb+srv://<username>:<password>@clustername.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true"),"."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("em",{parentName:"li"},"Clusters")," view, click ",(0,r.kt)("strong",{parentName:"li"},"Connect")," for the cluster to which you want to connect."),(0,r.kt)("li",{parentName:"ol"},"In ",(0,r.kt)("em",{parentName:"li"},"Choose a connection method")," view, click ",(0,r.kt)("strong",{parentName:"li"},"Connect your application"),"."),(0,r.kt)("li",{parentName:"ol"},"Select ",(0,r.kt)("strong",{parentName:"li"},"Node.js")," from the ",(0,r.kt)("em",{parentName:"li"},"Driver")," dropdown."),(0,r.kt)("li",{parentName:"ol"},"Copy the provided connection string from the ",(0,r.kt)("strong",{parentName:"li"},"Connection String Only")," dialog tab."),(0,r.kt)("li",{parentName:"ol"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<dbname>")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"myFirstDatabase")," with ",(0,r.kt)("inlineCode",{parentName:"li"},"moodle-notification-service"),"."),(0,r.kt)("li",{parentName:"ol"},"Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<password>")," with the password from cluster setup :) (Not the password of your MongoDB Atlas account!)"),(0,r.kt)("li",{parentName:"ol"},"Save the link. You will need it during the next steps.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("strong",{parentName:"p"},"Note from ",(0,r.kt)("a",{parentName:"strong",href:"https://docs.atlas.mongodb.com/tutorial/connect-to-your-cluster"},"docs.atlas.mongodb.com"),":")," The connection string displayed in the console uses a placeholder value for the password. Replace that placeholder with the password specified when you created your database user."),(0,r.kt)("p",{parentName:"div"},"If the password contains reserved URI characters, you must escape the characters. For example, if your password is @bc123, you must escape the @ character when specifying the password in the connection string, such as %40bc123. To learn more, see Special characters in connection string password."))),(0,r.kt)("h3",{id:"-3-update-your-environment-variables"},"\ud83d\udd03 3. Update your environment variables"),(0,r.kt)("p",null,"Open your ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file, set ",(0,r.kt)("inlineCode",{parentName:"p"},"MONGO_HOST=")," to the string you got from ",(0,r.kt)("a",{parentName:"p",href:"#-2-get-connection-string-from-atlas"},"\ud83d\udd21 2. Get connection string from Atlas")," and append ",(0,r.kt)("inlineCode",{parentName:"p"},"&ssl=true")," at the end."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"...\nMONGO_HOST=mongodb+srv://mydatabaseuser:SuperS3cur3P4ssw0rd@fmdbcluster.hmxhr.mongodb.net/notification-service?retryWrites=true&w=majority&ssl=true\n...\n")))}p.isMDXComponent=!0}}]);