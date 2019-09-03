# Setup
- npm install
- run this commmand in seperate terminal : npm run build:dev
- run this when compiled : npm run start:dev



-- 2019-07-24
OM

sudo apt-get update
sudo apt-get install nodejs
sudo apt-get install npm

https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04

---

ESLINT:
$ npm install eslint --save-dev
$ ./node_modules/.bin/eslint --init
\$ ./node_modules/.bin/eslint yourfile.js
u will have a hidden file generated as : .eslintrc.js

https://eslint.org/docs/user-guide/getting-started

--- PRETTIER ---
\$ npm install --save-dev --save-exact prettier
https://prettier.io/docs/en/install.html

--- WEBPACK ---
npm install webpack --save-dev
npm install webpack-cli --save-dev

https://webpack.js.org/guides/getting-started/

---

npm install -g npx

vim webpack.config.js

npx webpack --config webpack.config.js

---

[pm2 documentation](https://pm2.keymetrics.io/)
install pm2 globally
npm install pm2@latest -g

generate ecosystem file
pm2 ecosystem


---

setup webpack for client and server bundles [webpack config](https://webpack.js.org/concepts/)

