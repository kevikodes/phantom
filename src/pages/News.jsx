import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import "../components/newscard.css";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: "NFT",
        freshness: "Day",
        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "c65f95fd9amsha8853a34b3f1029p16cdafjsn465fb4ed7007",
      },
    };
    const fetchNews = async () => {
      try {
        const res = await axios.request(options);
        if (res) {
          setNewsData(res.data.value);
        }
      } catch (error) {
        console.log(error);
      }
    };
    return fetchNews();
  }, []);

  return (
    <>
      <h1 className="newsPageHeader">Latest News!</h1>
      <div className="newsContainer">
        {newsData.map((news) => {
          console.log(news);
          return <NewsCard key={news.datePublished} />;
        })}
      </div>
    </>
  );
};

export default News;
