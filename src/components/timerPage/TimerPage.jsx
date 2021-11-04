import React, { Component } from "react";
import "./TimerPage.css";
import STOP from './../../icons/stop-button.png'
import TimerImg from './../../icons/TIMER.png'

export default class TimerPage extends Component {
  render() {
    return (
      <div>
        <div className='timerpage'>
          <div className="circleborder">
            <div className="circle">
              <div className='timerDisplay'>
                <div className="time">
                  <p>{(this.props.hour) < 10 ? '0' + (this.props.hour) : this.props.hour}</p>
                  <p>HOURS</p>
                </div>
                <p className="symbol">:</p>
                <div className="time">
                  <p>{(this.props.min) < 10 ? '0' + (this.props.min) : this.props.min}</p>
                  <p>MINS</p>
                </div>
                <p className="symbol">:</p>
                <div className="time">
                  <p>{(this.props.sec) < 10 ? '0' + (this.props.sec) : this.props.sec}</p>
                  <p>SECS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="controls">
            <button className='button' type="submit" onClick={this.props.resetTimer}><img src={STOP} alt="" /></button>
          </div>
          <img className='timerimg' src={TimerImg} alt="" srcset="" />
        </div>
      </div>
    );
  }
}
