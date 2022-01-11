import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Wireframe from "./pages/Wireframe";
import Profile from "./pages/Api";
import Tasks from "./pages/Tasks";
import Flowchart from "./pages/Flowchart";
import Members from "./pages/Members";
import Functional from "./pages/Functional";
import Api from "./pages/Api";
import Logout from "./pages/Logout";

function App() {
  return (
    //Main router that allows the routes to connect and work!

    <BrowserRouter>
      <h1>This is the progress branch</h1>
      <div className="App">
        {/* Make sure there's only ONE route that show up at a time  */}
        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/" element={<Signin />} />
          <Route path="/wireframe" element={<Wireframe />} />
          {/* <Route path = "/portfolio" element = {<Portfolio/>}/> */}
          <Route path="/flowchart" element={<Flowchart />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/functional" element={<Functional />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/members" element={<Members />} />
          <Route path="/api" element={<Api />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
