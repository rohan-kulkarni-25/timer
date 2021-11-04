import React, { Component } from 'react'
import './TimerBox.css'
import Plus from './../../icons/plus.png'
import Minus from './../../icons/minus.png'

class TimerBox extends Component {

  clickTrackerMinus = () => {
    this.props.minusClicked(this.props.timeChecker)
  }
  clickTrackerPlus = () => {
    this.props.plusClicked(this.props.timeChecker)
  }

  render() {
    return (
      <div className='timerbox'>
        <button className='btn minus' onClick={this.clickTrackerMinus}><img src={Minus} alt="" srcset="" /></button>
        <p className='timevalue'>{this.props.timeValue}</p>
        <button className='btn plus' onClick={this.clickTrackerPlus}><img src={Plus} alt="" srcset="" /></button>
      </div>
    )
  }

}
export default TimerBox;