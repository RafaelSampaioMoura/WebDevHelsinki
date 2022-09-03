import { useState } from 'react';
import { Feedback } from './components/Feedback';
import { Statistics } from './components/Statistics';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (feedback, callback) => {
    callback(feedback + 1);
  };

  const handleAverage = () => {
    const totalFeedback = good + bad + neutral;
    const biasedFeedback = good - bad;
    return biasedFeedback / totalFeedback;
  };

  const handlePositive = () => {
    const biasedFeedback = good + bad;
    return 100 * (good / biasedFeedback);
  };

  return (
    <>
      <Feedback
        clickGood={() => handleFeedback(good, setGood)}
        clickBad={() => handleFeedback(bad, setBad)}
        clickNeutral={() => handleFeedback(neutral, setNeutral)}
      />
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          average={handleAverage}
          positive={handlePositive}
        />
    </>
  );
};

export default App;
