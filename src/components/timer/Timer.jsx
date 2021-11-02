import React, { Component } from "react";
import TimerBox from "../timerbox/TimerBox";
import "./Timer.css";

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      min: 0,
      sec: 0,
      timer: false
    };

  }

  plusClicked = (valueClick) => {
    if (valueClick === 0) {
      this.setState({ hour: this.state.hour + 1 });
    } else if (valueClick === 1) {
      this.setState({ min: this.state.min + 1 });
    } else if (valueClick === 2) {
      this.setState({ sec: this.state.sec + 1 });
    }
  };

  minusClicked = (valueClick) => {
    if (valueClick === 0) {
      if (this.state.hour > 0) {
        this.setState({ hour: this.state.hour - 1 });
      }
    } else if (valueClick === 1) {
      if (this.state.min > 0) {
        this.setState({ min: this.state.min - 1 });
      }
    } else if (valueClick === 2) {
      if (this.state.sec > 0) {
        this.setState({ sec: this.state.sec - 1 });
      }
    }
  };







  timerStart = () => {
    this.setState({ timer: true })
    let seconds = (this.state.min * 60) + (this.state.hour * 60 * 60) + (this.state.sec);
    const timerInterval = setInterval(() => {
      if (this.state.timer) {
        if (this.state.hour === 0 && this.state.min === 0 && this.state.sec === 0) {
          clearInterval(timerInterval)
        } else {
          console.log('Countdown running');
          let mins = Math.floor(seconds / 60);
          this.setState({ min: mins });
          let hours = Math.floor(mins / 60);
          this.setState({ hour: hours });
          this.setState({ sec: seconds % 60 });
          seconds--;
        }
      }
    }, 100);
  }

  pauseTimer = () => {
    this.setState({ timer: false })
  }

  resumeTimer = () => {
    this.setState({ timer: true })
  }
  resetTimer = () => {
    this.setState({ timer: false })
    this.setState({
      hour: 0,
      min: 0,
      sec: 0,
    });
  }

  render() {
    return (
      <div className='timersetup'>
        <TimerBox
          timeValue={this.state.hour}
          plusClicked={this.plusClicked}
          minusClicked={this.minusClicked}
          timeChecker={0}
        ></TimerBox>
        <TimerBox
          timeValue={this.state.min}
          plusClicked={this.plusClicked}
          minusClicked={this.minusClicked}
          timeChecker={1}
        ></TimerBox>
        <TimerBox
          timeValue={this.state.sec}
          plusClicked={this.plusClicked}
          minusClicked={this.minusClicked}
          timeChecker={2}
        ></TimerBox>
        {/* <div className="btnbox">
          {" "}
          <button type="submit" className="btns" onClick={this.timerStart}>
            START TIMER
          </button>
          <button type="submit" className="btns" onClick={this.pauseTimer}>
            PAUSE TIMER
          </button>
          <button type="submit" className="btns" onClick={this.resumeTimer}>
            RESUME TIMER
          </button>
          <button type="submit" className="btns" onClick={this.resetTimer}>
            RESET TIMER
          </button>
        </div> */}
      </div>
    );
  }
}
