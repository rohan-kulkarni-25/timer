import React, { Component } from "react";
import "./TimerPage.css";
import STOP from './../../icons/STOP.png'
// import PLAY from './../../icons/PLAY.png'
import PAUSE from './../../icons/PAUSE.png'
import Timer from "../timer/Timer";
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
                  <p>00</p>
                  <p>HOURS</p>
                </div>
                <p className="symbol">:</p>
                <div className="time">
                  <p>00</p>
                  <p>MINS</p>
                </div>
                <p className="symbol">:</p>
                <div className="time">
                  <p>00</p>
                  <p>SECS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="controls">
            <button className='button' type="submit"><img src={STOP} alt="" /></button>
            <button className='button' type="submit"><img src={PAUSE} alt="" /></button>
          </div>
          <img className='timerimg' src={TimerImg} alt="" srcset="" />
        </div>
      </div>
    );
  }
}
