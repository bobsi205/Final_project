import './App.css';
import './navbar/Navigate'
import Navigate from './navbar/Navigate';
import Facebook from './components/auth/Facebook';

function App() {
  return (
    <div className="App">
      <Navigate/>
      <header className="App-header">
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
        <Facebook />
      </header>
    </div>
  );
}

export default App;
