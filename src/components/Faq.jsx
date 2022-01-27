import React from "react";

const Faq = ({ question, answer }) => {
  return (
    <>
      <div className="faq">
        <div className="faqQuestion">{question}</div>
        <div className="faqAnswer">{answer}</div>
      </div>
    </>
  );
};

export default Faq;
