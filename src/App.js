import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Wireframe from "./pages/Wireframe";
import Profile from "./pages/Api";
import Tasks from "./pages/Tasks";
import Flowchart from "./pages/Flowchart";
import Members from "./pages/Members";
import Functional from "./pages/Functional";
import Api from "./pages/Api";
import Api1 from "./pages/Api1";
import Api2 from "./pages/Api2";
import Api3 from "./pages/Api3";

function App() {
  return (
    //Main router that allows the routes to connect and work!

    <BrowserRouter>
      <h1>Progress, Week One, Team One</h1>
      <div className="App">
        {/* Make sure there's only ONE route that show up at a time  */}
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/wireframe" element={<Wireframe />} />
          {/* <Route path = "/portfolio" element = {<Portfolio/>}/> */}
          <Route path="/flowchart" element={<Flowchart />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/functional" element={<Functional />} />
          <Route path="/members" element={<Members />} />
          <Route path="/api" element={<Api />} />
          <Route path="/api1" element={<Api1 />} />
          <Route path="/api2" element={<Api2 />} />
          <Route path="/api3" element={<Api3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
