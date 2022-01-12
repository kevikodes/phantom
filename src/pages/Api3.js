// import "./App.css";
import { useEffect, useState, Component } from "react";
import axios from "axios";
import moment from "moment";

import '../styles/new.css'
import Tabs from "../components/Tabs";
import PropTypes from "prop-types";
import Tab from "../components/Tab";



function Api3() {



  const options = {
    method: "GET",
    url: "https://coinpaprika1.p.rapidapi.com/coins/btc-bitcoin/events",
    headers: {
      "x-rapidapi-host": "coinpaprika1.p.rapidapi.com",
      "x-rapidapi-key": "c65f95fd9amsha8853a34b3f1029p16cdafjsn465fb4ed7007",
    },
  };
  
  const options2 = {
    method: 'GET',
    url: 'https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data',
    params: {locale_info: 'en_US', lang_ID: '1', time_utc_offset: '28800'},
    headers: {
      'x-rapidapi-host': 'investing-cryptocurrency-markets.p.rapidapi.com',
      'x-rapidapi-key': '28d0f5dd39msh392c64c5c8d525ap172c4bjsnd1a0ede0c537'
    }
  };
  
  axios
    .request(options2)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  const [coinEvents, setCoinEvents] = useState([]);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.request(options);
        setCoinEvents(res.data);
        const coinsData = await axios.request(options2);
        const newArr = coinsData.data.slice(0, 100);
        setCoins(newArr);
      } catch (error) {
        console.log(error);
      }
    };
    return fetchData();
  }, []);

  console.log(coinEvents);
  console.log(coins);
  return (
    <div className="Article">

       <h1>Sample API, Investing - Cryptocurrency Markets</h1>      
      
      {/* <div className="header">
        <h3>Sample API, Initial </h3>
      </div> */}






      {coinEvents.map((eventObj) => {
        const { date, description, id, name, link } = eventObj;
        return (
          <div key={id} style={{ margin: "10px" }}>
            <a href={link}>
              <h3>{name}</h3>
            </a>
            <p style={{ margin: "10px" }}>{description}</p>
            <span>{date}</span>
          </div>
        );
      })}

      {/* more, about extra */}

      {coinEvents.map((eventObj) => (
        <div key={eventObj.id} style={{ margin: "10px" }}>
          <h3>{eventObj.name}</h3>

          <p style={{ margin: "10px" }}>{eventObj.description}</p>
          <span>{eventObj.date}</span>
        </div>
      ))}

      <h1>Coins</h1>
      <p>{coins.length}</p>
      {coins.map((coin) => (
        <div key={coin.id}>
          <h2>{coin.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default Api3;
