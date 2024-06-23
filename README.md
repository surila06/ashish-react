
Steps to publish github page
===============================

package.json
---------- @ root level or package name level
"homepage": "https://surila06.github.io/ashish-react/",


------- under script tag 
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",

command for first time
--------------------------
npm install --save gh-pages


publish changes
===============
npm run deploy




# Git hub page setup
https://github.com/surila06/ashish-react/settings/pages

Ref
----
https://create-react-app.dev/docs/deployment/
 
 