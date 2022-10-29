import { FaTimes } from "react-icons/fa";
import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";

// State is Data
// useState is one of the main thing used to handle data

function FeedbackItem({ item, handleDelete }) {
  // [variable having data, function associated with it] = useState(initial value)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className={"close"} onClick={() => handleDelete(item.id)}>
        <FaTimes color={"purple"}></FaTimes>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
