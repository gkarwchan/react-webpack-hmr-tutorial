# Lesson 1:

## Autoload vs.HMR

## Description: 
Before we describe HMR option in webpack, it worth mentioning that webpack-dev-server provides auto-reloading feature out-of-shelf, and by default without any configuration.  
Auto-reloading is different from HMR, that auto-reloading will reload the whole application (HTML, JS, CSS) files all together , where HMR will modify only the changed part by replacing the code in memory.  
webpack-dev-server provides the `hot` option, which reload the whole application whenever anything change.  
This simple application will do the following:  

1. Simple JS bundling of two files, and one third-party library.
2. webpack-dev-server as a server to show hot reloading (again Not `HMR`).


The lesson describe the simplest usage of webpack to bundle a javascript file from two files (index.js and print.js), and webpack-dev-server to server the result.

## How auto-reload option works?
Webpack-dev-server monitor the entry code and rebuild and reload the whole bundle whenever any change occurs.  
We don't have to do anything because  webpack-dev-server will do that by default.

### Going through the code:
***

#### webpack.config.js
Just simply specify the directory from where the webpack will server the web application:

```javascript
devServer: {
        contentBase: './dist'
    },
```
And webpack-dev-server will monitor all files associated with the entry point and rebuild and reload the whole bundle.

## Test it:
run 
```bash
npm install
# you don't need npm run build, becasue npm start will do it
npm start
```

Click on the button and whatch the output message in the console.  
Change the message in the file `print.js` and notice how the browser refresh by itself, and click on the button and see the new message.  

Notice on Chrome Developer tool's Network tab, that any time you change `print.js` the whole application will be downloaded with all pages.  

![webpack-dev-server](images/webpack-dev-server.png)

## Conclusion:

webpack-dev-server provides out-of-box hot reloading for the whole application without any changes, or even configuration.