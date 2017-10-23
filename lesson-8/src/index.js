import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import Counter from './containers/Counter'
import reducers from './reducers'

let store = createStore(reducers);

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Counter)

if (module.hot) {
  module.hot.accept('./containers/Counter', () => {render(Counter)});
  module.hot.accept("./reducers/index", () =>
    store.replaceReducer(require("./reducers").default)
  );
}