function Feedback({feedback, totalFeedback}) {
    return(
        <div>
            <p>Good:{feedback.good}</p>
            <p>Neutral:{feedback.neutral}</p>
            <p>Bad:{feedback.bad}</p>
            <p>Total:{totalFeedback}</p>
            <p>Positive:{Math.round((feedback.good / totalFeedback) * 100)}%</p>
        </div>
    )
};

export default Feedback;