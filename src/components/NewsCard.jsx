import moment from "moment";
import React from "react";
import "./newscard.css";

const NewsCard = ({ link, image, title, content, date, provider }) => {
  return (
    <>
      <a href={link}>
        <div className="darkGlassCard newsCard">
          <div className="cardImage">
            {image && <img src={image} alt={title} />}
            <h1 className="cardTitle">{title}</h1>
          </div>

          <div className="cardFooter">
            <span style={{ color: "white", fontSize: "1.2rem" }}>
              - {provider}
            </span>
            <br />
            <span className="cardPublishDate">
              {moment(date).format("MM-DD-YYYY")}
            </span>
          </div>
        </div>
      </a>
    </>
  );
};

export default NewsCard;
