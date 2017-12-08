# Lesson 3:

## Rebuild client code using webpack in a full stack application

## Description: 
If we are building a full-stack application, then we don't have the luxury to use webpack-dev-server, so we have to depend on ourselves to build this HMR features.  
Luckily webpack provides the core functionality of webpack and webpack-dev-server as middleware for NodeJS application, where we can use them programatically.  
There are two middlewares that we should use:  

1. [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware)
2. [webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware)

I will start with this lesson on how to use the first one (webpack-dev-middleware) to show how we do auto-buiding from inside our code in NodeJS.  


### Going through the code:
***

#### server.js
This is a simple express application that has one page (index).  
Notice how we use the middleware in the following code:



```javascript
const webpackDevMiddleware = require('webpack-dev-middleware');

const config = require('./webpack.config.js');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
```

## Test it:
run 
```bash
npm install
# you don't need npm run build, becasue npm start will do it
npm run server
```
You see the output of the console where you run your application from, and you will see that webpack is doing the build when the application start.  

Do a small change in the print.js and watch the console window and you will see the application will rebuild.

## Conclusion:

When we do server full-stack application, we do run webpack from inside the server so it provides what webpack-dev-server provides for us in a client application.
