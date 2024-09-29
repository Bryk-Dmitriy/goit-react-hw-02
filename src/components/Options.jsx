function Options({updateFeedback, totalFeedback, setFeedback }) {
    return (
        <div>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback > 0 ? <button onClick={() => setFeedback({ good: 0, neutral: 0, bad: 0 })} >Reset</button> : null }
        </div>
    )
};

export default Options;