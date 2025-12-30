import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Profile from  './Profile';
import State from './State';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <div>
      <Greetings name="Supriya" />
      <Greetings name="React Learner" />
      <Profile name1="Supriya" role="Software developer"/>   </div>
      <State/>
      </header>
    </div>
  );
}

export default App;
