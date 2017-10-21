import React from 'react'

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 3
    }
  }

  increment() {
    this.setState({counter: this.state.counter + 1});
  }

  decrement() {
    this.setState({counter: this.state.counter - 1});
  }
  render() {
    return (
      <div>
        <h1>Counter : </h1>
        <button onClick={() => this.decrement.bind(this)()}>-</button>
        {this.state.counter}
        <button onClick={() => this.increment.bind(this)()}>+</button>
      </div>
    );
  }
}
export default Counter