import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/App';

const render = Component => {
  ReactDOM.render(
        <Component />,
    document.getElementById('root')
  )
}

render(App)

/*
if (module.hot) {
  module.hot.accept('./containers/Counter', () => {render(Counter)});
  module.hot.accept("./reducers/index", () =>
    store.replaceReducer(require("./reducers").default)
  );
}*/