import React from "react";

import PropTypes from "prop-types";

import './style.scss';

const Notification = ({ message }) => {
  return <h3 className="notification-message">{ message }</h3>
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default Notification;
