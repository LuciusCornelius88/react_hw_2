const Statistics = ({ goodVal, neutralVal, badVal, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <>
      <p className="statistics-item">
        Good: <span className="statistics-value">{goodVal}</span>
      </p>
      <p className="statistics-item">
        Neutral: <span className="statistics-value">{neutralVal}</span>
      </p>
      <p className="statistics-item">
        Bad: <span className="statistics-value">{badVal}</span>
      </p>
      <p className="statistics-item">
        Total: <span className="statistics-value">{countTotalFeedback()}</span>
      </p>
      <p className="statistics-item">
        Positive feedback: <span className="statistics-value">{countPositiveFeedbackPercentage()}%</span>
      </p>
    </>
  );
};

export default Statistics;
