import React from "react";
import PropTypes from 'prop-types'

const FeedbackButton = ({ onHandleClick }) => {
  return (
    <>
      {/* <button onClick={onHandleClick} type="button" name="good"> */}
      <button onClick={ () => onHandleClick("good") } type="button" name="good">
        GOOD
      </button>
      <br />
      {/* <button onClick={onHandleClick} type="button" name="neutral"> */}
      <button onClick={ () => onHandleClick("neutral") } type="button" name="neutral">
        NEUTRAL
      </button>
      <br />
      {/* <button onClick={onHandleClick} type="button" name="bad"> */}
      <button onClick={ () => onHandleClick("bad") } type="button" name="bad">
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