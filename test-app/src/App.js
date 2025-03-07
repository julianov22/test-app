import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">React Test App</div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      
      <div className="container">
        <div className="card">
          <img src={logo} className="card-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <p>This is a simple test application.</p>
          <button className="btn">Learn More</button>
        </div>
        
        <div className="info-section">
          <div className="info-box">
            <h3>Feature One</h3>
            <p>Description of the first feature goes here.</p>
          </div>
          <div className="info-box">
            <h3>Feature Two</h3>
            <p>Description of the second feature goes here.</p>
          </div>
          <div className="info-box">
            <h3>Feature Three</h3>
            <p>Description of the third feature goes here.</p>
          </div>
        </div>
      </div>
      
      <footer className="footer">
        <p>© 2023 React Test App</p>
      </footer>
    </div>
  );
}

export default App;
