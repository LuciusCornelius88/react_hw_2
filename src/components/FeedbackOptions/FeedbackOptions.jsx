import { FeedbackContainer, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ onClick, onReset }) => {
  return (
    <FeedbackContainer className="feedback-options">
      <FeedbackButton type="button" name="good" onClick={onClick}>
        Good
      </FeedbackButton>
      <FeedbackButton type="button" name="neutral" onClick={onClick}>
        Neutral
      </FeedbackButton>
      <FeedbackButton type="button" name="bad" onClick={onClick}>
        Bad
      </FeedbackButton>
      <FeedbackButton type="button" name="bad" onClick={onReset}>
        Reset
      </FeedbackButton>
    </FeedbackContainer>
  );
};

export default FeedbackOptions;
