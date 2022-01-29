import "./App.css";
import React from "react";

import Navbar from "./components/Navbar";
//Pages
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import News from "./pages/News";
import RoadMap from "./pages/RoadMap";
import Profile from "./pages/Profile";

import { useEffect, useState } from "react";
import { auth } from "./utils/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

//Import thirdweb dependencies
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { Routes, Route } from "react-router-dom";

//Import Counter

import Footer from "./components/Footer";

function App() {
  const { address, provider } = useWeb3();
  const [walletAddress, setWalletAddress] = useState("");
  const [user, setUser] = useState({});

  const sdk = new ThirdwebSDK(provider);

  const openseaURL = `https://testnets.opensea.io/${
    address || "/assets/0x16baf0de678e52367adc69fd067e5edd1d33e3bf"
  }`;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsub;
  }, [user]);

  useEffect(() => {
    if (address) {
      setWalletAddress(address);
      console.log(address);
    }
  }, [address]);
  return (
    <div className="app">
      <Navbar user={user} walletAddress={walletAddress} />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              provider={provider}
              address={address}
              sdk={sdk}
              openseaURL={openseaURL}
              user={user}
            />
          }
        />
        <Route path="/news" element={<News />} />
        <Route
          path="/roadmap"
          element={
            <div>
              <RoadMap />
            </div>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
      <div style={{ height: "150px" }}></div>
      <Footer />
    </div>
  );
}

export default App;
