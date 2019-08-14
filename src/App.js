import React from 'react';
import Navbar from './components/Navbar';
import CardList from './CardList';
import Content from './Content';

import 'tachyons';
import FooterPage from '../components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <body className="App-body tc pa2">
        <CardList content={Content}/>
      </body>
      <FooterPage/>
    </div>
  );
}

export default App;
