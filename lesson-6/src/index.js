import React from 'react'
import ReactDOM from 'react-dom'


import Counter from './containers/Counter'

const render = Component => {
  ReactDOM.render(
      <Component />,
    document.getElementById('root')
  )
}

render(Counter)

if (module.hot) {
  module.hot.accept('./containers/Counter', () => {render(Counter)});
}