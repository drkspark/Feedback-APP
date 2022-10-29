import React from "react";
import Card from "./shared/Card";
import { useState } from "react";
import MyButton from "./shared/MyButton";
import RatingSelect from "./RatingSelect";

function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);

  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text must be at least 10 Characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        {message && <div className={"message"}> {message} </div>}
        <div className={"input-group"}>
          <input
            onChange={handleTextChange}
            type={"text"}
            placeholder={"Write a Review"}
            value={text}
          />
          <MyButton type={"submit"} isDisabled={btnDisabled}>
            Send
          </MyButton>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
