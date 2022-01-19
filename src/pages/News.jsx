import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import "../components/newscard.css";

async function searchNews(q) {
  q = encodeURIComponent(q);
  const response = await fetch(
    `https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "c65f95fd9amsha8853a34b3f1029p16cdafjsn465fb4ed7007",
        "x-bingapis-sdk": "true",
      },
    }
  );
  const body = await response.json();
  return body.value;
}

const News = () => {
  const [newsData, setNewsData] = useState([]);
  //State for search input
  const [query, setQuery] = useState("Cryptocurrency");

  // useEffect(() => {
  //   const options = {
  //     method: "GET",
  //     url: "https://bing-news-search1.p.rapidapi.com/news/search",
  //     params: {
  //       q: { query },
  //       freshness: "Day",
  //       textFormat: "Raw",
  //       safeSearch: "Off",
  //     },
  //     headers: {
  //       "x-bingapis-sdk": "true",
  //       "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  //       "x-rapidapi-key": "c65f95fd9amsha8853a34b3f1029p16cdafjsn465fb4ed7007",
  //     },
  //   };

  //   const searchNews = async () => {
  //     try {
  //       const res = await axios.request(options);
  //       if (res) {
  //         setNewsData(res.data.value);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   return searchNews();
  // }, []);

  const search = (e) => {
    e.preventDefault();
    searchNews(query).then(setNewsData);
  };

  return (
    <>
      <h1 className="newsPageHeader">Latest News!</h1>
      <br></br>
      <div className="newsPageHeader1">
        <form onSubmit={search}>
          <label>
            {/* Search: */}
            <input
              type="text"
              value={query}
              //   onChange={(e) => setNewsData(e.target.value)}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <input className="button1" type="submit" value="Submit" />
        </form>
      </div>

      <div className="newsContainer">
        {newsData &&
          newsData.map((news) => {
            console.log(news);
            return (
              <NewsCard
                key={Math.random()}
                link={news.url}
                image={news?.image?.thumbnail?.contentUrl}
                title={news.name}
                content={news.description}
                date={news.datePublished}
                provider={news.provider[0].name}
              />
            );
          })}
      </div>
    </>
  );
};

export default News;
