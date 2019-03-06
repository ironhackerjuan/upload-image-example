## Webpack FullStack Boilerplate

![cvU2GRX.png](https://i.imgur.com/cvU2GRX.png)

Note: This a M.E.R.N. (Mongo, Express, React, NodeJS) fullstack boilerplate! A React only boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/master">master</a> branch, a React Hot Loaded boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/hotloaded">hotloaded</a> branch, or a React SSR boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/ssr">ssr</a> branch.

## Table of contents

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Client Configuration](#client-configuration)

[Packages Incorporated](#packages-incorporated)

## Project Structure

```
├── client
|   ├── build
|   |   ├── css
|   |   |   ├── main.[contenthash:8].css
|   |   |   └── main.[contenthash:8].css.map
|   |   ├── js
|   |   |   ├── main.[hash].js
|   |   |   └── main.[hash].js.map
|   |   ├── media
|   |   |   └── [hash].[ext]
|   |   ├── favicon.ico
|   |   └── index.html
|   |
|   ├── config
|   |   ├── envs.js
|   |   ├── paths.js
|   |   ├── rules.js
|   |   ├── webpack.common.js
|   |   ├── webpack.dev.js
|   |   └── webpack.prod.js
|   |
|   ├── public
|   |   ├── favicon.ico
|   |   └── index.html
|   |
|   ├── src
|   |   ├── components
|   |   ├── containers
|   |   ├── images
|   |   ├── reducers
|   |   ├── root
|   |   ├── routes
|   |   ├── store
|   |   ├── styles
|   |   ├── tests
|   |   ├── types
|   |   ├── index.js
|   |   └── setupTests.js
|   |
|   └── webpack.config.js
|
├── controllers
├── database
├── env
├── middlewares
├── models
├── routes
├── server
├── services
├── shared
└── app.js
```

## Installation

1 - Clone the boilerplate `fullstack` repository.

```
 git clone -b fullstack git@github.com:mattcarlotta/Webpack-React-Boilerplate.git
```

2 - Run `npm i && cd client && npm i` to install dependencies.

3 - Globally or locally install `nodemon` for handling and updating the application for file changes:

Locally (while at the application's root directory): `npm i -D nodemon`

Globally: `sudo npm i -g nodemon`

4 - While at the application's root directory, start both servers by running `npm run dev`.

## Commands

To prettify and lint your .js/.scss files, run `npm run lint` while at the application's root directory.

To run your tests, while inside the client's root directory, run `npm run test`. Testing will watch all your changes in the `.test.js` files as well as create a `coverage` folder. To view the current coverage report, navigate to `coverage/Icov-report/src` and open `index.html` in a browser. Please note that `*.test.js` files will be ignored by ESlint. To find out why, please see <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/fullstack/client/src/setupTests.js">setupTest.js</a> for more information.

To build and bundle your client resources for staging, while inside the client's root directory, use `npm run staging` (staging utilizes source maps for errors). After you have built your React application for staging, use `npm start` while at the application's root directory. You should now see your React application running on `http://localhost:5000`.

To build and bundle your client resources for production, while inside the client's root directory, use `npm run build` (source maps will be excluded). After you have built your React application for production, use `npm start` while at the application's root directory. You should now see your React application running on `http://localhost:5000`.

## Client Configuration

- `client/config/envs.js` webpack environment variables.
- `client/config/paths.js` webpack config folder paths.
- `client/config/rules.js` webpack rules functions.
- `client/config/webpack.common.js` common webpack config for both development and production environments.
- `client/config/webpack.dev.js` webpack config for development environment only.
- `client/config/webpack.prod.js` webpack config for production environment only.
- `client/webpack.config.js` main webpack config that merges common and an environment based config
- `client/src/setupTest.js` enzyme test setup for your React components.
- `client/.babelrc` babel config for react js files.
- `client/.browserslistrc` browsers list config.
- `client/.eslintignore` eslint config for ignoring scss files.
- `client/.eslintrc` eslint config for linting js files.
- `client/.prettierc` prettier config.
- `client/.stylelintrc.json` stylelint config for linting scss files.

## Packages Incorporated

These packages are updated by an automated script that can be found <a href="https://github.com/mattcarlotta/UpdateBoilerplate">here</a>. To see the latest package versions, please check out the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/fullstack/package.json">package.json</a>. If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/issues">here</a>.

### Client

- [Axios](https://github.com/axios/axios)
- [Babel](https://github.com/babel/babel)
- [CSS Loader](https://github.com/webpack-contrib/css-loader)
- [Browsers List](https://github.com/browserslist/browserslist)
- [Connected React Router](https://github.com/supasate/connected-react-router)
- [Eslint](https://github.com/eslint/eslint/)
- [Enzyme](http://airbnb.io/enzyme/)
- [Error Overlay Webpack Plugin](https://github.com/smooth-code/error-overlay-webpack-plugin)
- [History](https://github.com/ReactTraining/history)
- [Husky](https://github.com/typicode/husky)
- [Jest](https://github.com/facebook/jest)
- [Lodash](https://github.com/lodash/lodash)
- [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [Prettier](https://github.com/prettier/prettier)
- [React](https://github.com/facebook/react)
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Form](https://redux-form.com/)
- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [Sass Loader](https://github.com/webpack-contrib/sass-loader)
- [Stylelint](https://stylelint.io/)
- [Stylelint-SCSS](https://github.com/kristerkari/stylelint-scss)
- [Stylelint-Config-Recommended](https://github.com/stylelint/stylelint-config-recommended)
- [Style Loader](https://github.com/webpack-contrib/style-loader)
- [Stylized Components](https://github.com/styled-components/styled-components)
- [Stylized Theming](https://github.com/styled-components/styled-theming)
- [Friendly Errors Webpack Plugin](https://github.com/geowarin/friendly-errors-webpack-plugin)
- [UglifyJS Webpack Plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin)
- [Webpack](https://github.com/webpack/webpack)
- [Webpack Dev Server (Hot Loaded)](https://github.com/webpack/webpack-dev-server)

### Server

- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Bluebird](https://github.com/petkaantonov/bluebird)
- [Body Parser](https://github.com/expressjs/body-parser)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [Consign](https://github.com/jarradseers/consign)
- [CORS](https://github.com/expressjs/cors)
- [Express](http://expressjs.com/)
- [Moment](http://momentjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Morgan](https://github.com/expressjs/morgan)
- [Passport](http://www.passportjs.org/)
- [Passport Local](https://github.com/jaredhanson/passport-local)
- [Prettier](https://github.com/prettier/prettier)
