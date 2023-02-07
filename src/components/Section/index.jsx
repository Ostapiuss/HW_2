import React from 'react';

import PropTypes from "prop-types";

import './style.scss';

const Section = ({ children, title }) => {
  return (
    <div className="section">
      <h2 className="section_title">{ title }</h2>
      { children }
    </div>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Section;
