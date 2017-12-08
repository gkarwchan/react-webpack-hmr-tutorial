# Lesson 6:

## React and the State problem

## Description: 
Let us start with React, and for simplicity we will start with webpack-dev-server.  
In React application, we have a problem with the `State` of the component.  
We can hot reload the component module, but we cannot save its state.  
In this example, we have a counter component that has its state, and we do reloading we lose the state.

### Going through the code:
***


#### webpack.config.js
We are using webpack-dev-server to use out-of-shelf HMR.  
As you can see we are using the `HotModuleReplacementPlugin`

```javascript
plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
```


#### src/index.js
We are using a counter component: 

```javascript
import Counter from './containers/Counter'
```

And then we add hot module replacement code inside the index.js:

```javascript
if (module.hot) {
  module.hot.accept('./containers/Counter', () => {render(Counter)});
}
```


## Test it:
run 
```bash
npm install
# you don't need npm run build, becasue npm start will do it
npm run server
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

Now, save, and press the increment button, and you will see that the current state (counter) will be reset to its starting point (3).

## Conclusion:

Hot Module replacement won't save the state of the component, and this is why we are going to use the React-Hot-Loader that will fix this problem.
