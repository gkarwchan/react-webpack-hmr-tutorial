import React from 'react'
import { increment, decrement } from '../actions';
import { connect } from 'react-redux'

class Counter extends React.Component {

  decrementCounter(){
    this.props.dispatch(decrement())
  }

  incrementCounter(){
    this.props.dispatch(increment())
  }
  render() {
    return (
      <div>
        <h1>Counter state: </h1>
        <button onClick={() => this.decrementCounter.bind(this)()}>-</button>
        {this.props.counterState.counter}
        <button onClick={() => this.incrementCounter.bind(this)()}>+</button>
      </div>
    );
  }
}

function mapStateToProps(state) { 
  return {
    	counterState: state.counterState
    }; 
} 

function mapDispatchToProps(dispatch) {
  return { 
    	dispatch: dispatch
    };
} 
export default connect(mapStateToProps, mapDispatchToProps)(Counter)