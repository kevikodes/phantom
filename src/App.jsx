//Styles
import "./App.css";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//Pages
import Home from "./pages/Home";
import Faqs from "./pages/Faqs";
import News from "./pages/News";
import RoadMap from "./pages/RoadMap";
import Profile from "./pages/Profile";

//React imports
import { useEffect, useState } from "react";

//Firebase and auth
import { auth } from "./utils/firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";

//Import thirdweb dependencies
import { useWeb3 } from "@3rdweb/hooks";
import { ThirdwebSDK } from "@3rdweb/sdk";

//React Router
import { Routes, Route } from "react-router-dom";

//Import Counter

function App() {
  //States
  const { address, provider } = useWeb3();
  const [walletAddress, setWalletAddress] = useState("");
  const [user, setUser] = useState({});

  //Initialize the SDK
  const sdk = new ThirdwebSDK(provider);

  //Get the user's address from the web3 provider and create a opensea link
  const openseaURL = `https://testnets.opensea.io/${
    address || "/assets/0x16baf0de678e52367adc69fd067e5edd1d33e3bf"
  }`;

  //Track the users authentication state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return unsub;
  }, [user]);

  //Get the user's address from the web3 provider and set it to state.
  useEffect(() => {
    if (address) {
      setWalletAddress(address);
      console.log(address);
    }
  }, [address]);
  return (
    <div className="app">
      <Navbar user={user} walletAddress={walletAddress} />
      {/* //React Router Dom routes */}
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
