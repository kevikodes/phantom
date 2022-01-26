import moment from "moment";
import React from "react";
import "./newscard.css";

const NewsCard = ({ link, image, title, content, date, provider }) => {
  return (
    <>
      <a href={link}>
        <div className="darkGlassCard newsCard">
          <div className="newCardWrapper">
            <div className="cardImage">
              {image && <img src={image} alt={title} />}
            </div>
            <h1 className="cardTitle">{title}</h1>

            <div className="cardFooter">
              <span style={{ color: "white", fontSize: "0.8rem" }}>
                - {provider}
              </span>
              <br />
              <span className="cardPublishDate">
                {moment(date).format("MMMM DD YYYY")}
              </span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default NewsCard;
