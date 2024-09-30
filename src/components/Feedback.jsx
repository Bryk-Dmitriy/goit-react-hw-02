function Feedback({feedback, totalFeedback, positivePer}) {
    return(
        <div>
            <p>Good:{feedback.good}</p>
            <p>Neutral:{feedback.neutral}</p>
            <p>Bad:{feedback.bad}</p>
            <p>Total:{totalFeedback}</p>
            <p>Positive:{positivePer}%</p>
        </div>
    )
};

export default Feedback;