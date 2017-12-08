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
Open the page and press the button to increment the counter.  
Then modify the src/containers/Counter.js where you change the increment to add 10 as follows:

```javascript
increment() {
    this.setState({counter: this.state.counter + 10});
  }

  decrement() {
    this.setState({counter: this.state.counter - 10});
  }
```

Now, save, and press the increment button, and you will see that the old state (counter) was saved and the code is incrementing by 10, from the old state.

## Conclusion:

React-hot-loader will save the component state during HMR reload.