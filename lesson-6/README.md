# Lesson 4:

## HMR for React with webpack-dev-server

## Description: 
Let us start with React, and for simplicity we will start with webpack-dev-server

### Going through the code:
***


#### webpack.config.js
we add another entry related to the react-hot-loader:

```javascript
{
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
  ],
},
```

This will process any css that is consumed by our code.

#### src/index.js
Add a wrapper around root application from react-hot-loader like this:

```javascript
<AppContainer>
      <Component />
    </AppContainer>,
```

We don't need to add any HMR API here, why?  
Because style-loader and css-loader are HMR enabled.


#### .babelrc
In babel compiler we add react-hot-loader plugin like this:

```javascript
    "plugins": [ "react-hot-loader/babel" ]
```

## Test it:
run 
```bash
npm install
# you don't need npm run build, becasue npm start will do it
npm run server
```


## Conclusion:

All assets processors: css, image, fonts are HMR enabled, so we don't want to do anything to wire them.

