import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTimer } from '../actions/index.js';



class Timer extends Component {
  constructor(props){
    super(props);
    this.name = this.props.name;
    this.time = 0;
    this.isRunning = false;
  }
  render(){
    return (
      <div>timer {this.props.name}</div>
    )
  }
}

export default Timer;