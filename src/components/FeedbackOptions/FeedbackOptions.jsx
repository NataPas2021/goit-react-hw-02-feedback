export const FeedbackOptions = (options, onLeaveFeedback) => {
    return (
        <>
        {options.map(option => {
         <button onClick={onLeaveFeedback}>Good</button>
         <button onClick={onLeaveFeedback}>Neutral</button>
         <button onClick={onLeaveFeedback}>Bad</button>
        })}
        
        </>
        
    )
}