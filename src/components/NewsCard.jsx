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

          <p className="cardContent">{content}</p>
          <div className="cardFooter">
            <span style={{ color: "white", fontSize: "0.8rem" }}>
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
