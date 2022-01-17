import "./App.css";

import Navbar from "./components/Navbar";
//Pages
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import News from "./pages/News";
import RoadMap from "./pages/RoadMap";
import Profile from "./pages/Profile";

import React from "react";
import { useEffect, useState, useCallback } from "react";
import { auth } from "./utils/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

//Import thirdweb dependencies
import { useWeb3 } from "@3rdweb/hooks";

import { Routes, Route } from "react-router-dom";

function App() {
  const { address } = useWeb3();
  const [walletAddress, setWalletAddress] = useState("");
  const [user, setUser] = useState({});

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
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/roadmap" element={<RoadMap />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/faqs" element={<Faqs />} />
      </Routes>
    </div>
  );
}

export default App;
