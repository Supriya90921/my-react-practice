import logo from './logo.svg';
import './App.css';
import Greetings from './Greetings';
import Profile from  './Profile';
import State from './State';
import Counter from './Counter';
import State2 from './State2';
import EffectExample  from './EffectExample';
import Chatroom from './Chatroom';

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
      <State2/>
      <Counter/>
      <EffectExample/>
      <Chatroom />
      </header>
    </div>
  );
}

export default App;
