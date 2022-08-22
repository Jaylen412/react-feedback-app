import React from "react";
import { useState } from "react";

const FeedbackItem = ({ feedbackRating, feedbackText }) => {
  return (
    <div className="card">
      <div className="num-display">{feedbackRating}</div>
      <div className="text-display">{feedbackText}</div>
    </div>
  );
};

export default FeedbackItem;
