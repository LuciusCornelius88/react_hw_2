import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class AppFeedback extends Component {
  NOTIFICATION_MESSAGE = 'There is no feedback';

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = (evt) => {
    const name = evt.target.name;
    this.setState((prevState) => {
      return { [name]: prevState[name] + 1 };
    });
  };

  onReset = () => {
    this.setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prev, current) => {
      current += prev;
      return current;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total > 0) {
      const result = (this.state.good / total) * 100;
      return parseFloat(result.toFixed(1));
    } else {
      return 0;
    }
  };

  render() {
    return (
      <div className="container">
        <Section title={'Feedback Options'} className={'feedback-container'}>
          <FeedbackOptions onClick={this.onClick} onReset={this.onReset} />
        </Section>
        <Section title={'Statistics'} className={'statistics-container'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              goodVal={this.state.good}
              neutralVal={this.state.neutral}
              badVal={this.state.bad}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message={this.NOTIFICATION_MESSAGE} />
          )}
        </Section>
      </div>
    );
  }
}

export default AppFeedback;
