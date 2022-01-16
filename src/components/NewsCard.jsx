import React from "react";
import "./newscard.css";

const NewsCard = ({
  date,
  author,
  image,
  title,
  orginization,
  orginizationImage,
  content,
}) => {
  return (
    <div className="darkGlassCard newsCard">
      <h1 style={{ color: "white" }}>Title</h1>
      <p style={{ color: "white" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        incidunt repellendus recusandae? Ipsa fugit, sapiente debitis quos quasi
        repellendus. Cum laudantium, ipsum commodi perspiciatis vel ullam qui
        repellat, perferendis amet et voluptatibus vero laboriosam adipisci
        aliquid at, minima assumenda quos earum? Minima rem maiores saepe
        cupiditate unde consectetur vero aspernatur.
      </p>
    </div>
  );
};

export default NewsCard;
