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
      let options=Object.keys(this.state)
      console.log(options)
      options.map((option => {
       console.log(prevState[option])
        for(let i=0; i < options.length; i ++) {
        if(options[i] === [option]) {
          console.log(prevState[option])
          return ({[option]: prevState[option] +1})
        }}
      })) 
      })        
  }

  countTotalFeedback = () => {
    let options=Object.keys(this.state)
    console.log("count")
    let total = 0; 
    for(let i=0; i < options.length; i++) {
      total += options[i];
    }
    return total;
  };
   
     

  countPositiveFeedbackPercentage = () => {
    console.log("positive percentage")
  };

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
  )
}
}
