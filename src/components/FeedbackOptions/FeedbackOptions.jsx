import css from './FeedbackOptions.module.css'

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ul className={css.buttonList}>
            {options.map((option => {
                return(
                    <li key={option}>
                       <button type="button" name={option} onClick={onLeaveFeedback}>{option}</button>
                    </li>
                    
                
                )
              }))
            }
         </ul>
    );
};
     
export default FeedbackOptions;