import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>
        <h2>Welcome to Fullstack Development - 1</h2>
        <h3>React JS Programming Week09 Lab exercise</h3>
        <h4>101410156</h4>
        <h4>Pratham Bavlawala</h4>
        <h4>George Brown College, Toronto</h4>
       </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
