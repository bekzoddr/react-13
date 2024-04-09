import React, { Component } from "react";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 18,
      hours: 18,
      minutes: 18,
      seconds: 18,
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => {
        let { days, hours, minutes, seconds } = prevState;
        seconds--;

        if (seconds === -1) {
          seconds = 59;
          minutes--;

          if (minutes === -1) {
            minutes = 59;
            hours--;

            if (hours === -1) {
              hours = 23;
              days--;

              if (days === -1) {
                clearInterval(this.timer);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
              }
            }
          }
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    return (
      <div>
        <div className="timer">
          <div className="time">
            <h1> {days}</h1>
            <h4>Дней</h4>
          </div>
          <div className="time">
            <h1> {hours}</h1>
            <h4>Часов</h4>
          </div>
          <div className="time">
            <h1> {minutes}</h1>
            <h4>Минут</h4>
          </div>
          <div className="time">
            <h1> {seconds}</h1>
            <h4>Секунд</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
