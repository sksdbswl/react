import logo from './logo.svg';
import './App.css';

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
          안녕하세요 오늘은 11월 23일 입니다.
         새로운 브랜치입니다. <br/>
         마스터와 병합해주세요 !!!
        </a>
      </header>
    </div>
  );
}

export default App;
