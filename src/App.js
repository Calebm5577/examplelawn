import React from 'react';
import './App.css';
import './components/MediaQueries/Main.scss'
import { Header } from './components/Header/Header';
import { Body } from './components/Body/Body';
import { Work } from './components/Work/Work';
import Contact from './components/Contact/Contact';
import { Pricing } from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Work />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
