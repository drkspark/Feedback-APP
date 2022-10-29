import React from "react";
import PropTypes from "prop-types";

function MyButton({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

MyButton.defaultProps = {
  version: "primary",
  type: "button",
  isDisabled: false,
};

MyButton.propTypes = {
  children: PropTypes.node,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default MyButton;
