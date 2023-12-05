const FeedbackOptions = ({ onClick, onReset }) => {
  return (
    <>
      <button type="button" name="good" onClick={onClick}>
        Good
      </button>
      <button type="button" name="neutral" onClick={onClick}>
        Neutral
      </button>
      <button type="button" name="bad" onClick={onClick}>
        Bad
      </button>
      <button type="button" name="bad" onClick={onReset}>
        Reset
      </button>
    </>
  );
};

export default FeedbackOptions;
