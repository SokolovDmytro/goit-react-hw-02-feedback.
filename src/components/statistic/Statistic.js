import React from "react";
import PropTypes from "prop-types"

const Statistic = ({ good, neutral, bad, getTotal, getPercentage }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>TOTAL: {getTotal()}</p>
      <p>Percentage: {getPercentage()}%</p>
    </>
  );
};

Statistic.propTypes = {
good: PropTypes.number.isRequired,
neutral: PropTypes.number.isRequired,
bad: PropTypes.number.isRequired,
getTotal: PropTypes.func.isRequired,
getPercentage: PropTypes.func.isRequired,
}

export default Statistic;