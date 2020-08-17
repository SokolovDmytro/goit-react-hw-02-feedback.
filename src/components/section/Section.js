import React from "react";
// import defaultProps from 'prop-types'

const Section = ({ title, children }) => {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
};

Section.defaultProps = {
  title: 'default title'
}

export default Section;