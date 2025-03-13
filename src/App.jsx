import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Setting from "./Setting";
import "./App.css";

function App() {
  return (
    <Router>
      <MainApp />
    </Router>
  );
}

function MainApp() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Sidebar Toggle Button */}
      <button className="menu-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

      {/* Sidebar Navigation */}
      <nav className={`sidebar ${sidebarOpen ? "active" : ""}`}>
        <h2>Soar Task</h2>
        <ul>
          <li onClick={() => { navigate("/"); setSidebarOpen(false); }}>Dashboard</li>
          <li>Transactions</li>
          <li>Accounts</li>
          <li>Investments</li>
          <li>Credit Cards</li>
          <li>Loans</li>
          <li>Services</li>
          <li>My Privileges</li>
          <li onClick={() => { navigate("/settings"); setSidebarOpen(false); }}>Settings</li>
        </ul>
      </nav>

      {/* Main Content Area */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Setting />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
