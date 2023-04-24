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
      const options=this.state;
      console.log(options)
      options.map(option => {
      if(option === "good") {
        console.log(option)
      }
      })
      return {
      

        }   
      })
    }


  countTotalFeedback = () => {
    this.setState(prevState => {
      const prevState=this.state;
      console.log(prevState)
      return prevState.map((option) => {
          if(option === [option]) {
            return {[option]: prevState[option].value +1}
          }
      }
      );
      )
     
    }

  countPositiveFeedbackPercentage = () => {
    console.log("positive percentage")
  }

  render() {
  return (
    <div className='app-container'>
      <>
        <h2>Please, leave feedback</h2>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.optionsFeedback}/>
      </>

      <>
      <h2>Statistics</h2>
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage}/>
        
      </>
      
    </div>
  );
    };
};

