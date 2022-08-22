import React from "react";

const FeedbackList = ({ data }) => {
  const feedbackCard = data.map((feedbackData) => (
    <div className="card" key={feedbackData.id}>
      <div className="feedback-rating">{feedbackData.rating}</div>
      <div className="feedback-text">{feedbackData.text}</div>
    </div>
  ));

  return <div>{feedbackCard}</div>;
};

export default FeedbackList;
