import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Import thirdweb provider
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";
//Import react router
import { BrowserRouter } from "react-router-dom";

const supportedChainIds = [4];
const connectors = {
  injected: {},
};

ReactDOM.render(
  <ThirdwebWeb3Provider
    connectors={connectors}
    supportedChainIds={supportedChainIds}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThirdwebWeb3Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
