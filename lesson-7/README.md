# Lesson 7:

## React-Hot-Loader and Component State:

## Description: 
We will use React-Hot-Loader to hot reload component state
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
And we add HMR API

```javascript
if (module.hot) {
  
  module.hot.accept('./containers/Root', () => { 
    let root = require('./containers/Root').default;
    render(root);
  });
}
```

#### .babelrc
In babel compiler we add react-hot-loader plugin like this:

```javascript
    "plugins": [ "react-hot-loader/babel" ]
```

## Test it:
run 
```bash
npm install
npm start
```

#### another alternative

We can simplify the hot module code that we are using by doing two things:  

in the file: `.babelrc` change the preset `env` to disable modules:  

```javascript
"presets": [ ["env", {"modules" : false}], "react"],
```

and then do the following code in `src/index.js`:  

```javascript
if (module.hot) {
  module.hot.accept('./containers/Root', () => {render(Root)});
}
```

## Conclusion:

All assets processors: css, image, fonts are HMR enabled, so we don't want to do anything to wire them.

