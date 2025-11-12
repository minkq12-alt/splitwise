import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDetails from './component/UserDetails';
import UserData from './component/UserData';
import { useState } from 'react';

function App() {
  let [users, setUsers] = useState([]);
  let [selectedUserIndex, setSelectedUserIndex] = useState(null);

  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="navbar bg-info navbar-dark">
          <div className="container-fluid">
            <a href="#" className="navbar-brand" aria-label="Split Wise Home">
              <i className="fas fa-wallet me-2"></i> 👤User Details
            </a>
          </div>
        </nav>
        <Routes>
          <Route
            path="/"
            element={
              <UserDetails users={users} setUsers={setUsers} setSelectedUserIndex={setSelectedUserIndex}/>
            }
          />
          <Route
            path="/add-user" element={
              <UserData users={users} setUsers={setUsers} selectedUserIndex={selectedUserIndex} setSelectedUserIndex={setSelectedUserIndex} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;