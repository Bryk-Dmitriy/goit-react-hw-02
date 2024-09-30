import Description from './Description';
import Options from './Options';
import Feedback from './Feedback';
import Notification from './Notification';
import { useState, useEffect } from 'react';


function App() {
    const [feedback, setFeedback] = useState(() => {
        const localFeedback = localStorage.getItem('feedback');
        return localFeedback ? JSON.parse(localFeedback) : { good: 0, neutral: 0, bad: 0 };
    });

    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

    const updateFeedback = feedbackType => {
        setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    }

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback));
    }, [feedback]);

    const positivePer = totalFeedback > 0
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0;

    const resetFeedback = () => {
        setFeedback({ good: 0, neutral: 0, bad: 0 });
    };


    return (
        <>
            <Description/>
            <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} resetFeedback={resetFeedback}/>
            {totalFeedback > 0 ? (
                <Feedback feedback={feedback} totalFeedback={totalFeedback} positivePer={positivePer}/>
            ) : ( <Notification/>)}
        </>
    )
};

export default App;