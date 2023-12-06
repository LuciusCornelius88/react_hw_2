import { StatItem } from './Statistics.styled';
import PropTypes from 'prop-types';

const Statistics = ({ goodVal, neutralVal, badVal, countTotalFeedback, countPositiveFeedbackPercentage }) => {
  return (
    <div className="statistics-container">
      <ul className="statistics-list">
        <StatItem className="statistics-item">
          Good: <span className="statistics-value">{goodVal}</span>
        </StatItem>
        <StatItem className="statistics-item">
          Neutral: <span className="statistics-value">{neutralVal}</span>
        </StatItem>
        <StatItem className="statistics-item">
          Bad: <span className="statistics-value">{badVal}</span>
        </StatItem>
        <StatItem className="statistics-item">
          Total: <span className="statistics-value">{countTotalFeedback()}</span>
        </StatItem>
        <StatItem className="statistics-item">
          Positive feedback: <span className="statistics-value">{countPositiveFeedbackPercentage()}%</span>
        </StatItem>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  goodVal: PropTypes.number.isRequired,
  neutralVal: PropTypes.number.isRequired,
  badVal: PropTypes.number.isRequired,
  countTotalFeedback: PropTypes.elementType.isRequired,
  countPositiveFeedbackPercentage: PropTypes.elementType.isRequired,
};

export default Statistics;
