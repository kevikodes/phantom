import "./App.css";

import Navbar from "./components/Navbar";
//Pages
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import News from "./pages/News";
import RoadMap from "./pages/RoadMap";
import Profile from "./pages/Profile";

import React from "react";
import { useEffect, useState } from "react";
import { auth } from "./utils/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

//Import thirdweb dependencies
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";
import { Routes, Route } from "react-router-dom";

function App() {
  const { address, provider } = useWeb3();
  const [walletAddress, setWalletAddress] = useState("");
  const [user, setUser] = useState({});

  const sdk = new ThirdwebSDK(provider);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    console.log(user);

    return unsub;
  }, [user]);

  useEffect(() => {
    if (address) {
      setWalletAddress(address);
    }
    console.log(address);
  }, [address]);
  return (
    <div className="app">
      <Navbar user={user} walletAddress={walletAddress} />
      <Routes>
        <Route
          path="/"
          element={<Home provider={provider} address={address} sdk={sdk} />}
        />
        <Route path="/news" element={<News />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </div>
  );
}

export default App;
