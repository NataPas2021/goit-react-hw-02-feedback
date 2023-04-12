import { Component } from "react";
//import { FeedbackTitle } from "./FeedbackTitle/FeedbackTitle";
//import {Statistics} from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  goodFeedback = () => {
    console.log("good feedback")
  }

  neutralFeedback = () => {
    console.log("neutral feedback")
  }

  badFeedback = () => {
    console.log("bad feedback")
  }
  countTotalFeedback = () => {
    console.log("total count")
  }

  countPositiveFeedbackPercentage = () => {
    console.log("positive percentage")
  }

  render() {
  return (
    <div className='app-container'>
      <>
        <h2>Please, leave feedback</h2>
        <button>Good</button>
        <button>Neutral</button>
        <button>Bad</button>
      </>

      <>
        <h2>Statistics</h2>
        <p>Good: 1</p>
        <p>Neutral: 3</p>
        <p>Bad: 2 </p>
      </>
      
    </div>
  );
    };
};

