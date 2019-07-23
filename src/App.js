import React from 'react';
import './App.css';
import TrelloPage from './containers/TrelloPage/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button>
          <span className="initials">GB</span>
        </button>
      </header>
      {/* <section> */}
        <TrelloPage />
      {/* </section> */}
    </div>
  );
}

export default App;
