import React, { Component } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Timer from "./components/timer/Timer";
import TimerPage from "./components/timerPage/TimerPage";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: 0,
      min: 0,
      sec: 0,
      timer: false,
    };
  }

  timerStart = () => {
    this.setState({ timer: true }, () => document.getElementById('timesetupid').classList.add('hide'));
    let seconds = this.state.min * 60 + this.state.hour * 60 * 60 + this.state.sec;
    const timerInterval = setInterval(() => {
      if (this.state.timer) {
        if (
          this.state.hour === 0 &&
          this.state.min === 0 &&
          this.state.sec === 0
        ) {
          this.resetTimer();
          clearInterval(timerInterval);
        } else {
          console.log("Countdown running");
          let mins = Math.floor(seconds / 60);
          let hours = Math.floor(mins / 60);

          this.setState({ hour: hours, min: mins, sec: seconds % 60 });
          seconds--;
        }
      }
    }, 1000);
  };
  resetTimer = () => {
    window.location.reload();
    this.setState({
      hour: 0,
      min: 0,
      sec: 0,
      timer: false,
    }, () => document.getElementById('timesetupid').classList.remove('hide'));
  };

  plusClicked = (valueClick) => {
    if (valueClick === 0) {
      this.setState({ hour: this.state.hour + 1 });
    } else if (valueClick === 1) {
      if (this.state.min < 60) {
        this.setState({ min: this.state.min + 1 });
      }
    } else if (valueClick === 2) {
      if (this.state.sec < 60) {
        this.setState({ sec: this.state.sec + 1 });
      }
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

  render() {
    return (
      <div className="App">
        <TimerPage
          hour={this.state.hour}
          min={this.state.min}
          sec={this.state.sec}
          pauseTimer={this.pauseTimer}
          resetTimer={this.resetTimer}
        ></TimerPage>

        <Timer
          hour={this.state.hour}
          min={this.state.min}
          sec={this.state.sec}
          timer={this.state.timer}
          plusClicked={this.plusClicked}
          minusClicked={this.minusClicked}
          resetTimer={this.resetTimer}
          playTimer={this.timerStart}
        ></Timer>
        <Footer></Footer>
      </div>
    );
  }
}
