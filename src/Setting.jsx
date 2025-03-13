import React, { useState } from "react";
import "./Setting.css";

const Setting = () => {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="setting-container">
      {/* Top Bar with Search */}
      <div className="top-bar">
        <h2>Setting</h2>
        <div className="search-bar">
          <input type="text" placeholder="Search for something" />
          <button className="search-icon">🔍</button>
        </div>
        <div className="top-icons">
          <button>⚙️</button>
          <button>🔔</button>
          <img
            src="https://randomuser.me/api/portraits/women/50.jpg"
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>

      <div className="settings-content">
        {/* Tabs */}
        <div className="tabs">
          <button
            className={activeTab === "profile" ? "active" : ""}
            onClick={() => setActiveTab("profile")}
          >
            Edit Profile
          </button>
          <button
            className={activeTab === "preferences" ? "active" : ""}
            onClick={() => setActiveTab("preferences")}
          >
            Preferences
          </button>
          <button
            className={activeTab === "security" ? "active" : ""}
            onClick={() => setActiveTab("security")}
          >
            Security
          </button>
        </div>

        {/* Profile Form */}
        {activeTab === "profile" && (
          <div className="form-container">
            <div className="profile-pic-container">
              <img
                src="https://randomuser.me/api/portraits/women/50.jpg"
                alt="Profile"
                className="profile-pic-large"
              />
              <button className="edit-pic">✏️</button>
            </div>
            <form>
              <div className="input-group">
                <label>Your Name</label>
                <input type="text" value="Charlene Reed" />
              </div>
              <div className="input-group">
                <label>User Name</label>
                <input type="text" value="Charlenn@123" />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input type="email" value="charlenereed@gmail.com" />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input type="password" value="********" />
              </div>
              <div className="input-group">
                <label>Date of Birth</label>
                <input type="text" value="25 January 1990" />
              </div>
              <div className="input-group">
                <label>Permanent Address</label>
                <input type="text" value="San Jose, California, USA" />
              </div>
              <div className="input-group">
                <label>Present Address</label>
                <input type="text" value="San Jose, California, USA" />
              </div>
              <div className="input-group">
                <label>City</label>
                <input type="text" value="San Jose" />
              </div>
              <div className="input-group">
                <label>Postal Code</label>
                <input type="text" value="45962" />
              </div>
              <div className="input-group">
                <label>Country</label>
                <input type="text" value="USA" />
              </div>
              <button className="save-btn">Save</button>
            </form>
          </div>
        )}

        {/* Preferences */}
        {activeTab === "preferences" && (
          <div className="tab-content">
            <h3>Preferences</h3>
            <p>Here you can set your preferences.</p>
          </div>
        )}

        {/* Security */}
        {activeTab === "security" && (
          <div className="tab-content">
            <h3>Security</h3>
            <p>Manage security settings here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Setting;
