import { Component } from "react";
//import { FeedbackTitle } from "./FeedbackTitle/FeedbackTitle";
import {Statistics} from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  optionsFeedback = () => {
    this.setState(prevState => {
      console.log(this.state)
      return {good: prevState.good + 1,
             neutral: prevState.neutral +1,
             bad: prevState.bad + 1
      }
    }) 
  }

  neutralFeedback = () => {
    this.setState(prevState => {
      return {neutral: prevState.neutral + 1}
    })
  }

  badFeedback = () => {
    this.setState(prevState => {
      return {bad: prevState.bad +1}
    })
  }
  countTotalFeedback = () => {
    return { total: this.state.good + this.state.neutral + this.state.bad }
  }

  countPositiveFeedbackPercentage = () => {
    console.log("positive percentage")
  }

  render() {
  return (
    <div className='app-container'>
      <>
        <h2>Please, leave feedback</h2>
        <FeedbackOptions options={this.state} onLeaveFeedback={this.optionsFeedback}/>
      </>

      <>
      <h2>Statistics</h2>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>
        
      </>
      
    </div>
  );
    };
};

