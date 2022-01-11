import "../styles/new.css";

function Navbar() {
  const logout = async () => {
    window.location = "/";
  };

  const about = async () => {
    window.location = "/about";
  };

  const functional = async () => {
    window.location = "/functional";
  };

  const dashboard = async () => {
    window.location = "/dashboard";
  };

  const flowchart = async () => {
    window.location = "/flowchart";
  };

  const tasks = async () => {
    window.location = "/tasks";
  };

  const members = async () => {
    window.location = "/members";
  };
  const api = async () => {
    window.location = "/api";
  };
 const wireframe = async () => {
    window.location = "/wireframe";
  };
  return (
    <>
      
      <div className="nav1">
        <a href="/dashboard" className="navword" onClick={dashboard}>
          Dashboard
        </a>
        <a href="/api" className="navword" onClick={api}>
          CryptoAPI
        </a>
        <a href="/wireframe" className="navword" onClick={wireframe}>
          WireFrame
        </a>
        <a href="/flowchart" className="navword" onClick={flowchart}>
          FlowChart
        </a>
        <a href="/functional" className="navword" onClick={functional}>
          Design
        </a>
        <a href="/tasks" className="navword" onClick={tasks}>
          Tasks
        </a>
        <a href="/members" className="navword" onClick={members}>
          About
        </a>
        <a href="logout" className="navword" onClick={logout}>
          Logout
        </a>
        
      </div>
    </>
  );
}

export default Navbar;
