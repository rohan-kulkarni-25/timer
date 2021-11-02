import React, { Component } from 'react'
import './TimerBox.css'

class TimerBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      empty: 0
    }
  }

  clickTrackerMinus = () => {
    this.props.minusClicked(this.props.timeChecker)
  }
  clickTrackerPlus = () => {
    this.props.plusClicked(this.props.timeChecker)
  }

  render() {
    return (
      <div className='timerbox'>
        <button className='btn minus' onClick={this.clickTrackerMinus}>-</button>
        <p className='timevalue'>{this.props.timeValue}</p>
        <button className='btn plus' onClick={this.clickTrackerPlus}>+</button>
      </div>
    )
  }

}
export default TimerBox;