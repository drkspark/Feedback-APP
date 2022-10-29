import { FaTimes, FaEdit } from "react-icons/fa";
import React from "react";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";
import { useContext } from "react";

// State is Data
// useState is one of the main thing used to handle data

function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  // [variable having data, function associated with it] = useState(initial value)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button className={"close"} onClick={() => deleteFeedback(item.id)}>
        <FaTimes color={"purple"}></FaTimes>
      </button>
      <button onClick={() => editFeedback(item)} className={"edit"}>
        <FaEdit color={"purple"}></FaEdit>
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
