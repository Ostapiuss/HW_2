import React from "react";

import PropTypes from 'prop-types';

import './style.scss';

const Statistics = (
  {
    good,
    bad,
    neutral,
    total,
    positivePercentage
  }) => {
  return (
    <div className="statistic">
      <ul className="statistic_list list">
        <li className="list_item">
          <span className="list_item_title">Good:</span>
          <span className="list_item_value">{good}</span>
        </li>
        <li className="list_item">
          <span className="list_item_title">Bad:</span>
          <span className="list_item_value">{bad}</span>
        </li>
        <li className="list_item">
          <span className="list_item_title">Neutral:</span>
          <span className="list_item_value">{neutral}</span>
        </li>
        <li className="list_item">
          <span className="list_item_title">Total:</span>
          <span className="list_item_value">{total}</span>
        </li>
        <li className="list_item">
          <span className="list_item_title">Positive Percentage:</span>
          <span className="list_item_value">{positivePercentage}%</span>
        </li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}

export default Statistics;
