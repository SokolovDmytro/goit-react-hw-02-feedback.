import React from "react";
import PropTypes from 'prop-types'

const FeedbackButton = ({ onHandleClick }) => {
  return (
    <>
      <button onClick={onHandleClick} type="button" name="good">
        GOOD
      </button>
      <br />
      <button onClick={onHandleClick} type="button" name="neutral">
        NEUTRAL
      </button>
      <br />
      <button onClick={onHandleClick} type="button" name="bad">
        BAD
      </button>
      <br />
    </>
  );
};

FeedbackButton.propTypes = {
  onHandleClick: PropTypes.func.isRequired
}

export default FeedbackButton;