import React from 'react';

import PropTypes from 'prop-types';

import './style.scss';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="feedback-options">
      {
        options.map((option, index) => (
          <button className="button-feedback" name={option} key={index} onClick={onLeaveFeedback}>
            { option }
          </button>
        ))
      }
    </div>
  )
}

FeedbackOptions.propTypes = {
  option: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default FeedbackOptions;
