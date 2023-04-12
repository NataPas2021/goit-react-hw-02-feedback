import { Component } from "react";
import { FeedbackTitle } from "./FeedbackTitle/FeedbackTitle";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  render() {
  return (
    <div className='app-container'>
      <FeedbackTitle title="Please, leave feedback"/>
      <Statistics good={} neutral={} bad={} total={} positivePercentage={} />
    </div>
  );
    };
};

