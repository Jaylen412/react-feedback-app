import React from "react";
// import FeedbackItem from "./componets/feedback/FeedbackItem";
import Header from "./componets/header/Header";
import FeedbackList from "./componets/feedback/FeedbackList";
import FeedbackData from "./componets/feedback/FeedbackData";

import { useState } from "react";

function App() {
  const [feedbackData, setFeedbackData] = useState(FeedbackData);

  return (
    <div>
      <Header text="Feedback UI" />
      <div>
        <FeedbackList data={feedbackData} />
      </div>
    </div>
  );
}
export default App;
