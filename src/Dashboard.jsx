import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [activeNav, setActiveNav] = useState('dashboard');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="dashboard-wrapper">
      {/* Main Content */}
      <div className="main-content">
        {/* Header */}
        <div className="main-header">
          <h2 className="page-title">Overview</h2>
          
          <div className="header-actions">
            <div className="search-container">
              <i className="fa fa-search"></i>
              <input 
                type="text" 
                placeholder="Search for something" 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <button className="settings-btn">
              <i className="fa fa-cog"></i>
            </button>
            
            <button className="notification-btn">
              <i className="fa fa-bell"></i>
            </button>
            
            <div className="profile-pic">
              <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Profile" />
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        <div className="dashboard-content">
          {/* Cards Section */}
          <div className="section-header">
            <h3>My Cards</h3>
            <a href="#" className="view-all">See All</a>
          </div>
          
          <div className="cards-container">
            <div className="credit-card dark">
              <div className="card-balance-section">
                <span>Balance</span>
                <h3>$5,756</h3>
              </div>
              
              <div className="card-chip">
                <i className="fa fa-credit-card"></i>
              </div>
              
              <div className="card-details">
                <div className="card-info">
                  <span>CARD HOLDER</span>
                  <p>Eddy Cusuma</p>
                </div>
                <div className="card-info">
                  <span>VALID THRU</span>
                  <p>12/22</p>
                </div>
              </div>
              
              <div className="card-number">
                <span>3778 **** **** 1234</span>
                <div className="card-type">
                  <div className="mastercard-logo">
                    <div className="circle red"></div>
                    <div className="circle yellow"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="credit-card light">
              <div className="card-balance-section">
                <span>Balance</span>
                <h3>$5,756</h3>
              </div>
              
              <div className="card-chip">
                <i className="fa fa-credit-card"></i>
              </div>
              
              <div className="card-details">
                <div className="card-info">
                  <span>CARD HOLDER</span>
                  <p>Eddy Cusuma</p>
                </div>
                <div className="card-info">
                  <span>VALID THRU</span>
                  <p>12/22</p>
                </div>
              </div>
              
              <div className="card-number">
                <span>3778 **** **** 1234</span>
                <div className="card-type">
                  <div className="visa-logo">
                    <div className="circle light"></div>
                    <div className="circle light"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="recent-transaction">
  <div className="section-header">
    <h3>Recent Transaction</h3>
  </div>
  <div className="transaction-list">
    <div className="transaction-item">
      <div className="transaction-icon deposit">
        <i className="fa fa-arrow-down"></i>
      </div>
      <div className="transaction-details">
        <p className="transaction-title">Deposit from my Card</p>
        <span className="transaction-date">28 January 2021</span>
      </div>
      <div className="transaction-amount negative">-$850</div>
    </div>
    
    <div className="transaction-item">
      <div className="transaction-icon paypal">
        <i className="fa fa-paypal"></i>
      </div>
      <div className="transaction-details">
        <p className="transaction-title">Deposit Paypal</p>
        <span className="transaction-date">25 January 2021</span>
      </div>
      <div className="transaction-amount positive">+$2,500</div>
    </div>
    
    <div className="transaction-item">
      <div className="transaction-icon user">
        <i className="fa fa-user"></i>
      </div>
      <div className="transaction-details">
        <p className="transaction-title">Jemi Wilson</p>
        <span className="transaction-date">21 January 2021</span>
      </div>
      <div className="transaction-amount positive">+$5,400</div>
    </div>
  </div>
</div>

          {/* Two Column Layout */}
          <div className="two-column-layout">
            {/* Weekly Activity Section */}
            <div className="column-section">
              <h3>Weekly Activity</h3>
              <div className="chart-container">
                <div className="chart-legend">
                  <div className="legend-item">
                    <span className="legend-dot blue"></span>
                    <span>Deposit</span>
                  </div>
                  <div className="legend-item">
                    <span className="legend-dot black"></span>
                    <span>Withdraw</span>
                  </div>
                </div>
                <div className="bar-chart">
                  <div className="chart-y-axis">
                    <span>0</span>
                    <span>100</span>
                    <span>200</span>
                    <span>300</span>
                    <span>400</span>
                    <span>500</span>
                  </div>
                  <div className="chart-bars">
                    <div className="day-column">
                      <div className="bar-container">
                        <div className="bar black" style={{ height: '200px' }}></div>
                        <div className="bar blue" style={{ height: '150px' }}></div>
                      </div>
                      <span className="day-label">Sat</span>
                    </div>
                    <div className="day-column">
                      <div className="bar-container">
                        <div className="bar black" style={{ height: '300px' }}></div>
                        <div className="bar blue" style={{ height: '100px' }}></div>
                      </div>
                      <span className="day-label">Sun</span>
                    </div>
                    <div className="day-column">
                      <div className="bar-container">
                        <div className="bar black" style={{ height: '250px' }}></div>
                        <div className="bar blue" style={{ height: '180px' }}></div>
                      </div>
                      <span className="day-label">Mon</span>
                    </div>
                    <div className="day-column">
                      <div className="bar-container">
                        <div className="bar black" style={{ height: '280px' }}></div>
                        <div className="bar blue" style={{ height: '220px' }}></div>
                      </div>
                      <span className="day-label">Tue</span>
                    </div>
                    <div className="day-column">
                      <div className="bar-container">
                        <div className="bar black" style={{ height: '150px' }}></div>
                        <div className="bar blue" style={{ height: '120px' }}></div>
                      </div>
                      <span className="day-label">Wed</span>
                    </div>
                    <div className="day-column">
                      <div className="bar-container">
                        <div className="bar black" style={{ height: '320px' }}></div>
                        <div className="bar blue" style={{ height: '180px' }}></div>
                      </div>
                      <span className="day-label">Thu</span>
                    </div>
                    <div className="day-column">
                      <div className="bar-container">
                        <div className="bar black" style={{ height: '280px' }}></div>
                        <div className="bar blue" style={{ height: '220px' }}></div>
                      </div>
                      <span className="day-label">Fri</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expense Statistics */}
<div className="column-section">
  <h3>Expense Statistics</h3>
  <div className="pie-chart-container">
    <div className="pie-chart">
      {/* Entertainment - 30% (Navy) */}
      <div className="pie-segment entertainment">
        <span className="percentage">30%</span>
        <span className="category">Entertainment</span>
      </div>
      
      {/* Bill Expense - 15% (Orange) */}
      <div className="pie-segment bill-expense">
        <span className="percentage">15%</span>
        <span className="category">Bill Expense</span>
      </div>
      
      {/* Investment - 20% (Blue) */}
      <div className="pie-segment investment">
        <span className="percentage">20%</span>
        <span className="category">Investment</span>
      </div>
      
      {/* Others - 35% (Black) */}
      <div className="pie-segment others">
        <span className="percentage">35%</span>
        <span className="category">Others</span>
      </div>
    </div>
  </div>
</div>

</div>

          </div>

          {/* Second Two Column Layout */}
          <div className="two-column-layout">
            {/* Quick Transfer */}
            <div className="column-section">
              <h3>Quick Transfer</h3>
              <div className="quick-transfer-container">
              <div className="transfer-amount">
  <div className="amount-input">
    <span>Write Amount</span>
    <input type="text" value="$25.50" readOnly />
  </div>
  <button className="send-btn">
    Send <i className="fa fa-paper-plane"></i>
  </button>
</div>

                
                <div className="transfer-profiles">
                  <div className="transfer-profile">
                    <div className="profile-details">
                      <p className="profile-name">Randy Press</p>
                      <span className="profile-title">Director</span>
                    </div>
                  </div>
                  
                  <div className="transfer-profile">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Workman" className="profile-image" />
                    <div className="profile-details">
                      <p className="profile-name">Workman</p>
                      <span className="profile-title">Designer</span>
                    </div>
                  </div>
                </div>
                
                <div className="next-contact">
                  
                  <button className="next-btn">
                    <i className="fa fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>

            {/* Balance History */}
<div className="column-section">
  <h3>Balance History</h3>
  
  <div className="line-chart-container">
    <div className="line-chart">
      <div className="chart-y-axis">
        <span>0</span>
        <span>200</span>
        <span>400</span>
        <span>600</span>
        <span>800</span>
      </div>
      <div className="chart-area">
        <svg viewBox="0 0 800 300" className="chart-svg">
          <path 
            d="M0,250 C50,180 100,200 150,170 C200,140 250,210 300,180 C350,150 400,100 450,150 C500,200 550,120 600,170 C650,220 700,180 750,150 L750,300 L0,300 Z" 
            fill="rgba(1, 0, 36, 0.1)" 
          />
          <path 
            d="M0,250 C50,180 100,200 150,170 C200,140 250,210 300,180 C350,150 400,100 450,150 C500,200 550,120 600,170 C650,220 700,180 750,150" 
            fill="none" 
            stroke="#3b82f6" 
            strokeWidth="3" 
          />
        </svg>
      </div>
      <div className="chart-x-axis">
        <span>Jul</span>
        <span>Aug</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
        <span>Jan</span>
      </div>
    </div>
  </div>
</div>

          </div>
        </div>
      </div>
   
  );
};

export default Dashboard;
