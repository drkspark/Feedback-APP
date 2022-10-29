import React from "react";
import PropTypes from "prop-types";

function Card({ children, reverse }) {
  // Conditional Class
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}
// Conditional Class and Conditional Style

Card.defaultProps = {
  reverse: false,
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
};

export default Card;
