# Lesson 8:

## Redux and HMR:

## Description: 
We are going to use Redux and see how we make Redux store hot load with HMR.
### Going through the code:
***


#### webpack.config.js
As the example before we add the hot loader injector as input in the entry list of webpack:

```javascript
{
    entry: [
      'babel-polyfill',
      'react-hot-loader/patch',
      './src/index'
  ],
},
```

#### src/index.js
Look at the calling for HMR API:

```javascript
if (module.hot) {
  module.hot.accept('./containers/Counter', () => {render(Counter)});
  module.hot.accept("./reducers/index", () =>
    store.replaceReducer(require("./reducers").default)
  );
}
```
as you see we added an entry for the reducers:

```javascript
module.hot.accept("./reducers/index", () =>
    store.replaceReducer(require("./reducers").default)
  );
```

## Test it:
run 
```bash
npm install
npm start
```
Push the increment button on the web page to change the counter value.  
Change the step value in the reducer code in the file: src/reducers/index.js and save .  
You will see that the counter state was preserved.

## Conclusion:

When we use HMR's API to hot reload Redux's reducers, it will reload the new code while preserving the old state.