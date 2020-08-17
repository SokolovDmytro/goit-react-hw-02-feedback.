import React, { Component } from "react";
import Statistic from "./statistic/Statistic";
import FeedbackButton from "./feedbackButton/FeedbackButton";
import Section from "./section/Section";
import Notification from "./notify/Notification";
import styles from './Container.module.css'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    getTotal: () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
    },
    getPercentage: () => {
      return Math.round((this.state.good / this.state.getTotal()) * 100);
    }
  };

  onHandleClick = e => {
    const name = e.target.name;
    this.setState({
      [name]: this.state[name] + 1
    });
  };

  render() {
    return (
      <div className={styles.container}>
         <Section title="Please leave feedback">
          <FeedbackButton onHandleClick={this.onHandleClick} /> 
        </Section>
        {
          this.state.getTotal() === 0
            ? <Notification message="No feedback given" />
            : <Section title="STATISTIC">
              <Statistic
                {...this.state}
              />
            </Section>
        }
      </div>
    );
  }
}

export default App;