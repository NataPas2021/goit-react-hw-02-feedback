export const FeedbackOptions = ({good, neutral, bad, onLeaveFeedback}) => {
    return (
        <>
        <button onClick={good}>Good</button>
        <button onClick={neutral}>Neutral</button>
        <button onClick={bad}>Bad</button>
        </>
        
    )
}