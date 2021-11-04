import React, { Component } from "react";
import TimerBox from "../timerbox/TimerBox";
import "./Timer.css";
import PLAY from './../../icons/play-button.png'
export default class Timer extends Component {

  render() {
    return (
      <div className={`timersetup`} id='timesetupid'>
        <div className='timerboxdiv'>
          <TimerBox
            timeValue={this.props.hour}
            plusClicked={this.props.plusClicked}
            minusClicked={this.props.minusClicked}
            timeChecker={0}
          ></TimerBox>
          <TimerBox
            timeValue={this.props.min}
            plusClicked={this.props.plusClicked}
            minusClicked={this.props.minusClicked}
            timeChecker={1}
          ></TimerBox>
          <TimerBox
            timeValue={this.props.sec}
            plusClicked={this.props.plusClicked}
            minusClicked={this.props.minusClicked}
            timeChecker={2}
          ></TimerBox>
        </div>
        <div className='btnbox'>
          <button className='btn' onClick={this.props.playTimer}><img src={PLAY} alt="" srcset="" /></button>
        </div>
      </div>
    );
  }
}
