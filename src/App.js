import "./App.css";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase/auth";

import React from "react";
import axios from "axios";

const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {}, []);

  return <div></div>;
};

export default App;
