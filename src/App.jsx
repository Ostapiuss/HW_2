import React from "react";

import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";

const OPTIONS = ['Good', 'Neutral', 'Bad'];

export class App extends React.Component {
  state = { good: 0, neutral: 0, bad: 0 }
  options = Object.keys(this.state);

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  onLeaveFeedback = (element) => {
    const { name } = element.target;
    this.setState(state => ({ [name]: state[name] + 1 }));
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  }

  render() {
    const totalFeedbackCount = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        <Section title="Please leave a feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {
            totalFeedbackCount > 0 ? (
              <Statistics
                good={this.state.good}
                bad={this.state.bad}
                neutral={this.state.neutral}
                positivePercentage={positiveFeedback}
                total={totalFeedbackCount}
              />
            ) : (
              <Notification message="There is no feedback" />
            )
          }
        </Section>
      </div>
    )
  }
}
