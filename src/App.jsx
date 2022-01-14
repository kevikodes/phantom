import "./App.css";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ConnectButton from "./components/ConnectButton";

function App() {
  return (
    <div className="app">
      <Banner />
      <Navbar />
      {/* <ConnectButton /> */}
    </div>
  );
}

export default App;
