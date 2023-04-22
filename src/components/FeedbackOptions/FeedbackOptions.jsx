export const FeedbackOptions = (options, onLeaveFeedback) => {
    console.log(options)
    return (
         <>
         <button type="button" name={options.good} onClick={onLeaveFeedback}>Good</button>
         <button type="button" name={options.neutral} onClick={onLeaveFeedback}>Neutral</button>
         <button type="button" name={options.bad} onClick={onLeaveFeedback}>Bad</button>
         </>
        )
    }
     
