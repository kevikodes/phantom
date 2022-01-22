import React from "react";
import Counter from "../components/Counter";
import Mint from "../components/Mint";
import "./home.css";
import Email from "../components/Email";

const Home = () => {
  return (
    <div className="home">
       <div className="homeTitle">Mint your very own Phantom NFT!</div>
      <div><img src="images/ptm.png" alt="" /></div>
      {true && <Counter />}
      <div className="mintCard">{false && <Mint />}</div>

      <div className='newEmail'>
        <div className='newInput'>
            <form>
                <input type='text' placeholder='ex: myname@example.com'></input>
                <button value='Submit'>Submit</button>
            </form>
        </div>
      </div>

    </div>
  );
};

export default Home;
