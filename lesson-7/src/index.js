import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import Counter from './containers/Counter'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Counter)

if (module.hot) {
  module.hot.accept('./containers/Counter', () => {render(Counter)});
}