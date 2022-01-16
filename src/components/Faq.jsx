import React from "react";

const Faq = ({ question, answer }) => {
  return (
    <>
      <div className="faqQuestion">{question}</div>
      <div className="faqAnswer">{answer}</div>
    </>
  );
};

export default Faq;
