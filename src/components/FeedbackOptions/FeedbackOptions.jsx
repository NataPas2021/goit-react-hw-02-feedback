export const FeedbackOptions = (options, onLeaveFeedback) => {
    return (
    <>
    {options.map(({good, neutral, bad}) {
        return (
         <button type="button" onClick={onLeaveFeedback}>Good</button>
         <button type="button" onClick={onLeaveFeedback}>Neutral</button>
         <button type="button" onClick={onLeaveFeedback}>Bad</button>
        )
        })
    }
    </>  
    )
}