import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import "../styles/newscard.css";

const News = () => {
  const [newsData, setNewsData] = useState([]);
  //State for search input
  const [query, setQuery] = useState("Crytpocurrency");
  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: { query },

      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "c65f95fd9amsha8853a34b3f1029p16cdafjsn465fb4ed7007",
    },
  };

  const input = useRef();

  useEffect(() => {
    const fetchInitialNews = async () => {
      try {
        const res = await axios.request(options);
        if (res) {
          setNewsData(res.data.value);
        }
      } catch (error) {
        console.log(error);
      }
    };
    return fetchInitialNews();
  }, []);

  const handleSearch = async (e) => {
    const options = {
      method: "GET",
      url: "https://bing-news-search1.p.rapidapi.com/news/search",
      params: {
        q: input.current.value,

        textFormat: "Raw",
        safeSearch: "Off",
      },
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "c65f95fd9amsha8853a34b3f1029p16cdafjsn465fb4ed7007",
      },
    };
    e.preventDefault();
    try {
      const res = await axios.request(options);
      if (res) {
        setNewsData(res.data.value);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1 className="newsPageHeader">Latest News!</h1>
      <br></br>
      <div className="newsPageHeader1">
        <form onSubmit={handleSearch}>
          <label>
            {/* Search: */}
            <input
              type="text"
              //   onChange={(e) => setNewsData(e.target.value)}
              ref={input}
            />
          </label>
          <input className="button1" type="submit" value="Submit" />
        </form>
      </div>

      <div className="newsContainer">
        {newsData &&
          newsData.map((news) => {
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
