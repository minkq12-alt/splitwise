import './App.css';
import SplitWise from './component/SplitWise';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar bg-dark navbar-dark">
        <div className="container-fluid">
          <a href="#" className="navbar-brand" aria-label="Split Wise Home">
            <i className="fas fa-wallet me-2"></i> 💰Split Wise
          </a>
        </div>
      </nav>

      <SplitWise/>
    </div>
  );
}

export default App;
