import React from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import CardList from '../CardList';
import Content from '../Content';

import 'tachyons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body className="App-body">
        <CardList content={Content}/>
      </body>
    </div>
  );
}

export default App;
